var Client = function(data) {
    this.username = ko.observable(data.username);
    this.name = ko.observable(data.name);
};

var ViewModel = function() {
    this.clients = ko.observableArray(),
    this.addClient = function() {
        this.clients.push(new Client({}));
    };
};

ko.applyBindings(new ViewModel());