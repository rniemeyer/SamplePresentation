var ViewModel = function() {
    this.users = ko.observableArray([
        { name: ko.observable("Bob") },
        { name: ko.observable("Ted") }
    ]);

    this.removeItem = function(item) {
        this.items.remove(item);
    };
};

ko.applyBindings(new ViewModel());