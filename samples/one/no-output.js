var ViewModel = function() {
    this.test = ko.observable("Testing");
};

ko.applyBindings(new ViewModel());