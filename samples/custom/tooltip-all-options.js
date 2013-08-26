ko.bindingHandlers.tooltip = {
    init: function(element, valueAccessor) {
        var local = valueAccessor(),
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

var user = {
    name: ko.observable("Tyson"),
    role: ko.observable("JavaScript Engineer")
};

ko.applyBindings(user);