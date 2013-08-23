ko.bindingHandlers.tooltip = {
    init: function(element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        $(element).tooltip({ title: value });
    }
};

var user = {
    name: ko.observable("Tyson"),
    role: ko.observable("JavaScript Engineer")
};

ko.applyBindings(user);
