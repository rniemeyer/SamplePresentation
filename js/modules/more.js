define(["knockout"], function(ko) {
    var ViewModel = function() {
        var self = this;

        this.title = "Resources"

        this.points= [
            { name: "Main Site - ", url: "http://knockoutjs.com "},
            { name: "Tutorials - ", url: "http://learn.knockoutjs.com "},
            { name: "My Blog - ", url: "http://knockmeout.net"}
        ];
    };

    return new ViewModel();
});