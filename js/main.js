require.config({
    paths: {
        "knockout": "ext/knockout-3.0.0rc",
        "knockout.punches": "ext/knockout.punches.min",
        "jquery": "ext/jquery-1.7.2.min",
        "jqueryui": "ext/jquery-ui.min",
        "text": "ext/text",
        "codemirror": "ext/codemirror",
        "bootstrap": "ext/bootstrap.min",
        "moment": "ext/moment",
        "ko2": "ext/knockout-2.3.0"
    },
    shim: {
        "bootstrap": ["jquery"],
        "underscore": {
            exports: "_"
        }
    }
});

require(["knockout", "app", "jquery", "bootstrap", "utilities", "stringTemplateEngine", "text", "codemirror", "moment"], function(ko, App, $) {
    window.ko = ko;

    require(["knockout.punches"], function() {
        var vm = new App();

        //simple client-side routing - update hash when current section is changed
        vm.currentSection.subscribe(function(newValue) {
            location.hash = newValue.name;
        });

        var updateSection = function() {
            vm.updateSection(location.hash.substr(1));
        };

        //respond to hashchange event
        window.onhashchange = updateSection;

        //initialize
        updateSection();

        //block alt navigation
        $(document).keydown(function(event) {
            if (event.altKey && (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40)) {
                return false;
            }
        });

        window.alert = function(text) {
            $("#alert .modal-body").html("<p>" + text + "</p>").parent().modal();
        };

        ko.punches.interpolationMarkup.enable();

        ko.applyBindings(vm);
    });
});
