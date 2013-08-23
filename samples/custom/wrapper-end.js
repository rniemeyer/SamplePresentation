ko.bindingHandlers.enterKey = {
    init: function(el, valueAccessor, allBindings, data, context) {
        var wrapper = function(data, event) {
            if (event.keyCode === 13) {
                valueAccessor().call(this, data, event);
            }
        };

        ko.applyBindingsToNode(el, {
            event: {
                keyup: wrapper
            }
        }, context);
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