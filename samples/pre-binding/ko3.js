ko.bindingHandlers.valueWithInit = {
    preprocess: function(value, name, addBindingCallback) {
        return "'" + value + "'";
    },
    init: function (element, valueAccessor, allBindings, data, context) {
        var prop = ko.unwrap(valueAccessor()),
            value = element.value;

        if (!prop in data || !ko.isObservable(data[prop])) {
            data[prop] = ko.observable()
        }

        data[prop](value);

        ko.applyBindingsToNode(element, { value: data[prop] }, context);
    }
};

ko.applyBindings({});