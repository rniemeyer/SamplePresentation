var ViewModel = function() {
    this.users = ko.observableArray([
        { name: ko.observable("Bob") },
        { name: ko.observable("Ted") }
    ]);

    this.removeItem = function(item) {
        this.users.remove(item);
    }.bind(this);
};

ko.applyBindings(new ViewModel());