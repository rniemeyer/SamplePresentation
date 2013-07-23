//this code had an override to load immediately
var ViewModel = function() {
    this.first = ko.observable("Bob");
    this.last = ko.observable("Smith");

    this.full = ko.computed(function() {
        return this.first() + " " + this.last();
    }, this);
};

ko.applyBindings(new ViewModel());
