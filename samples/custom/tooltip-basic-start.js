ko.bindingHandlers.tooltip = {
    init: function(element, valueAccessor) {

    }
};

var mission = {
    name: ko.observable("Find the missing son"),
    help: ko.observable("enter a summary of the mission")
};

ko.applyBindings(mission);
