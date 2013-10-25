ko.bindingHandlers.live = {
    preprocess: function(value, name, addBindingCallback) {
        addBindingCallback("valueUpdate", "'afterkeydown'");
        addBindingCallback("value", value);
    }
};

ko.applyBindings({
    first: ko.observable("Bob")
});