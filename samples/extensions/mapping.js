ko.observableArray.fn.map = function(data, Constructor) {
    var mapped = ko.utils.arrayMap(data, function(item) {
        return new Constructor(item);
    });

    this(mapped);

    return this;
};

var Client = function(data) {
    this.username = ko.observable(data.username);
    this.name = ko.observable(data.name);
};

var clientsFromServer = [
    { username: "bob_smith", name: "Bob Smith" },
    { username: "tjones", name: "Ted Jones" },
    { username: "susant", name: "Sue Thomas" }
];

var ViewModel = function(clients) {
    this.clients = ko.observableArray().map(clients, Client);
};

ko.applyBindings(new ViewModel(clientsFromServer));