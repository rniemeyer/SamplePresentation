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
    missions: [
        { name: ko.observable("Save the village")},
        { name: ko.observable("Stop the mobster")},
        { name: ko.observable("Rescue the children")}
    ]
});