var ViewModel = function() {
    this.name = ko.observable("Jonathan");
    this.name.subscribe(function(value) {
        alert(value);
    });
};

ko.applyBindings(new ViewModel());