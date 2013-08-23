ko.bindingHandlers.enterKey = {
    init: function(el, valueAccessor, allBindings, data, context) {

    }
};

var ViewModel = function() {
    this.newUser = ko.observable();
    this.users = ko.observableArray();
    this.addUser = function() {
        this.users.push(this.newUser());
        this.newUser("");
    };
};

ko.applyBindings(new ViewModel());