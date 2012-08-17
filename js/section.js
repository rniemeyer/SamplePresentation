define(["knockout"], function(ko) {
    return function(name, template, style) {
        var self = this;
        this.name = name;
        this.template = template || name;
        this.data = ko.observable();
        this.style = style;
        this.loaded = false;
        this.activate = function() {
            //load view model from the server
            if (!this.loaded) {
                require(["modules/" + name, "text!../templates/" + self.template + ".html"], function(Module, template) {
                    ko.templates[self.template] = template;
                    self.data(typeof Module === "function" ? new Module() : Module);
                    self.loaded = true;
                });
            }
        };
    };
});
