ko.bindingHandlers.modal = {
    init: function(element, valueAccessor) {
        $(element).modal({ show: false }).on("hidden", function() {
            var data = valueAccessor();
            if (ko.isWriteableObservable(data)) {
                data(null);
            }
        });

        return ko.bindingHandlers.with.init.apply(this, arguments);
    },
    update: function(element, valueAccessor) {
        var data = ko.utils.unwrapObservable(valueAccessor());
        $(element).modal(data ? "show" : "hide");

        return ko.bindingHandlers.with.update.apply(this, arguments);
    }
};

ko.applyBindings({
    selected: ko.observable(),
    users: [
        { name: ko.observable("Andy")},
        { name: ko.observable("Amy")},
        { name: ko.observable("Deanna")}
    ]
});