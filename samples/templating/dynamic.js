var ViewModel = function() {
    this.users = ko.observableArray([
        { name: ko.observable("Bess"), role: "js" },
        { name: ko.observable("Ted"), role: "vde" }
    ]);

    this.getTemplate = function(user) {
        return user.role + "Tmpl";
    };
};

ko.applyBindings(new ViewModel());