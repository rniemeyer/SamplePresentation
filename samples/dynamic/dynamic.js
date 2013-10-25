var original = ko.getBindingHandler;
ko.getBindingHandler = function(bindingKey) {
    var binding = original(bindingKey);

    if (!binding) {
        binding = {
            update: function(element, valueAccessor) {
                element.setAttribute(bindingKey, ko.unwrap(valueAccessor()));
            }
        };
    }

    return binding;
};

ko.applyBindings({
    name: "My Item",
    description: "My Item's description"
});