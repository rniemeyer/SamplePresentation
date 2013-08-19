var bindings = {
    name: function(context, classes) {
        return { text: this.name };
    },
    nameEdit: function(context, classes) {
        return { value: this.name };
    }
};

ko.bindingProvider.instance = new ko.classBindingProvider(bindings, { fallback: true });

ko.applyBindings({
    name: ko.observable("Bob")
});