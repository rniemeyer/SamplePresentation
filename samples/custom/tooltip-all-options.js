ko.bindingHandlers.tooltip = {
    init: function(element, valueAccessor) {
        var local = ko.utils.unwrapObservable(valueAccessor()),
            options = {};

        ko.utils.extend(options, ko.bindingHandlers.tooltip.options);
        ko.utils.extend(options, local);

        $(element).tooltip(options);
    },
    options: {
        placement: "right",
        trigger: "click"
    }
};

var mission = {
    name: ko.observable("Find the missing son"),
    help: ko.observable("enter a summary of the mission")
};

ko.applyBindings(mission);