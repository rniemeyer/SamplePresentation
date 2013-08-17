ko.bindingHandlers.modal = {
    init: function(element, valueAccessor) {
        var data = valueAccessor();
        $(element).modal({ show: false }).on("hidden", function() {
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
    missions: [
        { name: ko.observable("Save the village")},
        { name: ko.observable("Stop the mobster")},
        { name: ko.observable("Rescue the children")}
    ]
});