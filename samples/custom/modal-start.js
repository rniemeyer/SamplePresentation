ko.bindingHandlers.modal = {
    init: function(element, valueAccessor) {

        return ko.bindingHandlers.with.init.apply(this, arguments);
    },
    update: function(element, valueAccessor) {

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