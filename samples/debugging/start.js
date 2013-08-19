var ViewModel = function() {
    this.title = ko.observable("User List");

    this.users = ko.observableArray([
        { name: ko.observable("Ryan") },
        { name: ko.observable("Bess") },
        { name: ko.observable("Tyson") }
    ]);
};

ko.applyBindings(new ViewModel());

