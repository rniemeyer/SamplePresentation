var ViewModel = function() {
    this.showDetails = ko.observable(false);
    this.toggleDetails = function() {
        this.showDetails(!this.showDetails());
    }
};

ko.applyBindings(new ViewModel());