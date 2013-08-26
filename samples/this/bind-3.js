var ViewModel = function() {
    var self = this;

    this.users = ko.observableArray([
        { name: ko.observable("Bob") },
        { name: ko.observable("Ted") },
        { name: ko.observable("Jordan") }
    ]);

    this.removeItem = function(item) {
        self.users.remove(item);
    };
};

ko.applyBindings(new ViewModel());