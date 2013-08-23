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

var user = {
    name: ko.observable("Tyson"),
    role: ko.observable("JavaScript Engineer")
};

ko.applyBindings(user);