ko.observable.fn.focusable = function(val) {
    this.focused = ko.observable(val);
    return this;
};

var Client = function(data) {
    this.username = ko.observable(data.username).focusable();
    this.name = ko.observable(data.name);
};

var ViewModel = function(data) {
    this.clients = ko.observableArray();
    this.addClient = function() {
        var newClient = new Client({});
        this.clients.push(newClient);

        newClient.username.focused(true);
    }
};

ko.applyBindings(new ViewModel());