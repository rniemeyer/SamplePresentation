ko.bindingHandlers.tooltip = {
    init: function(element, valueAccessor) {
        var options = {
            title: ko.utils.unwrapObservable(valueAccessor())
        };

        ko.utils.extend(options, ko.bindingHandlers.tooltip.options);

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