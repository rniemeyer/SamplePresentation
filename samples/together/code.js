var ViewModel = function() {
    this.name = ko.observable("Bob");
};

ko.applyBindings(new ViewModel());
