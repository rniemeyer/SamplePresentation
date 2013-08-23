var ViewModel = function() {
    this.newUser = ko.observable();
    this.users = ko.observableArray();
    this.addUser = function(data, event) {
        if (event.keyCode === 13) {
            this.users.push(this.newUser());
            this.newUser("");
        }
    };
};

ko.applyBindings(new ViewModel());