var ViewModel = function() {
    this.newSupply = ko.observable();
    this.supplies = ko.observableArray();
    this.addSupply = function(data, event) {
        if (event.keyCode === 13) {
            this.supplies.push(this.newSupply());
            this.newSupply("");
        }
    };
};

ko.applyBindings(new ViewModel());