var ViewModel = function() {
    this.users = ko.observableArray([
        { name: ko.observable("Bob") },
        { name: ko.observable("John") },
        { name: ko.observable("Kent") }
    ]);

    this.addUser = function() {
        var newUser = { name: ko.observable("new user") };
        this.users.push(newUser);
        this.users.notifySubscribers(newUser, "userAdded");
    };

    this.users.subscribe(function(user) {
        alert(user.name());
    }, this, "userAdded")
};

ko.applyBindings(new ViewModel());