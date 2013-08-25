var ViewModel = function() {
    this.search = ko.observable();

    this.counter = ko.observable(0);

    this.search.subscribe(function() {
        //potentially make a call to the server here

        this.counter(this.counter() + 1);
    }, this);
};

ko.applyBindings(new ViewModel());