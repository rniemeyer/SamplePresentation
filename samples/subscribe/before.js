var ViewModel = function() {
    this.name = ko.observable("Jonathan");
    this.name.subscribe(function(value) {
        alert(value);
    }, this, "beforeChange");
};

ko.applyBindings(new ViewModel());