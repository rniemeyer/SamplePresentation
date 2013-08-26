var viewModel = function() {
    var users = ko.observableArray([
        { name: ko.observable("Bob") },
        { name: ko.observable("Ted") },
        { name: ko.observable("Jordan") }
    ]);

    var remove = function(item) {
        users.remove(item);
    };

    return {
        users: users,
        removeItem: remove
    };
}();

ko.applyBindings(viewModel);