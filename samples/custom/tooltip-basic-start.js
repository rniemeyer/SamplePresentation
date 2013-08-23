ko.bindingHandlers.tooltip = {
    init: function(element, valueAccessor) {

    }
};

var user = {
    name: ko.observable("Tyson"),
    role: ko.observable("JavaScript Engineer")
};

ko.applyBindings(user);
