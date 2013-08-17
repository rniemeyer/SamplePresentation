var ViewModel = function() {
    this.users = ko.observableArray([
        { name: ko.observable("Bob") },
        { name: ko.observable("Ted") }
    ]);
};

ViewModel.prototype.removeItem = function(item) {
    this.users.remove(item);
};

ko.applyBindings(new ViewModel());