ko.bindingHandlers.tooltip = {
    init: function(element, valueAccessor) {
        var local = ko.utils.unwrapObservable(valueAccessor()),
            options = {};

        ko.utils.extend(options, ko.bindingHandlers.tooltip.options);
        ko.utils.extend(options, local);

        $(element).tooltip(options);

        ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
            //$(element).tooltip("destroy");
        });
    },
    options: {
        placement: "right",
        trigger: "click"
    }
};

var user = {
    name: ko.observable("Tyson"),
    role: ko.observable("JavaScript Engineer")
};

ko.applyBindings(user);