ko.bindingHandlers.enterKey = {
    init: function(element, valueAccessor, allBindings, data, context) {
        var wrapper = function(data, event) {
            if (event.keyCode === 13) {
                valueAccessor().call(this, data, event);
            }
        };

        ko.applyBindingsToNode(element, {
            event: {
                keyup: wrapper
            }
        }, context);
    }
};

var ViewModel = function() {
    this.newSupply = ko.observable();
    this.supplies = ko.observableArray();
    this.addSupply = function() {
        this.supplies.push(this.newSupply());
        this.newSupply("");
    };
};

ko.applyBindings(new ViewModel());