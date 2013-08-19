ko.bindingHandlers.enterKey = {
    init: function(element, valueAccessor, allBindings, data) {

    }
};

var ViewModel = function() {
    this.newSupply = ko.observable();
    this.supplies = ko.observableArray();
    this.addSupply = function() {
        this.supplies.push(this.newSupply());
        thi.newSupply("");
    };
};

ko.applyBindings(new ViewModel());