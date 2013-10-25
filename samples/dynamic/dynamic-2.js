var original = ko.getBindingHandler;
ko.getBindingHandler = function(bindingKey) {
    var binding = original(bindingKey);

    if (!binding && bindingKey.indexOf('attr-') > -1) {
        binding = {
            update: function(element, valueAccessor) {
                element.setAttribute(bindingKey.substr(5), ko.unwrap(valueAccessor()));
            }
        };
    }

    return binding;
};

ko.applyBindings({
    name: "My Item",
    description: "My Item's description"
});