
ko.bindingHandlers.myCustomBinding = {
    init: function(element, valueAccessor, allBindings, data, context) {
        //one time set-up/initialization
        //add event handlers
    },
    update: function(element, valueAccessor, allBindings, data, context) {
        //respond to updates from observables that we depend on
    }
};
