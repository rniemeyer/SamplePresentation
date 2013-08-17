ko.bindingHandlers.tooltip = {
    init: function(element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        $(element).tooltip({ title: value });
    }
};

var mission = {
    name: ko.observable("Find the missing son"),
    help: ko.observable("enter a summary of the mission")
};

ko.applyBindings(mission);
