ko.bindingHandlers.enterKey = {
    init: function(element, valueAccessor, allBindings, data) {
        var wrapper = function(data, event) {
            if (event.keyCode === 13) {
                valueAccessor().call(this, data, event);
            }
        };

        var newValueAccessor = function() {
            return { keyup: wrapper };
        };

        ko.bindingHandlers.event.init(element, newValueAccessor, allBindings, data);
    }
};

var ViewModel = function() {
    this.newSupply = ko.observable();
    this.supplies = ko.observableArray();
    this.addSupply = function() {
        this.supplies.push(this.newSupply());
    };
};

ko.applyBindings(new ViewModel());