ko.bindingHandlers.slider = {
    init: function(element, valueAccessor) {
        var observable = valueAccessor();
        $(element).slider({
            change: function(event, ui) {
                observable(ui.value);
            }
        });
    },
    update: function(element, valueAccessor) {
        var observable = valueAccessor();
        $(element).slider("value", observable());
    }
};

ko.applyBindings({ amount: ko.observable(50) });
