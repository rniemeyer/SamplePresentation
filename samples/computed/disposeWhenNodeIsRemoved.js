ko.bindingHandler.widget = {
    init: function(element, valueAccessor) {
        var options = valueAccessor();

        ko.computed({
            read: function() {


            },
            disposeWhenNodeIsRemoved: element
        });
    }
};