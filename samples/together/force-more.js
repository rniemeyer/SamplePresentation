//modified code that can be pulled in
var ViewModel = function(data) {
    this.first = ko.observable(data.first);
    this.last = ko.observable(data.last);

    this.full = ko.computed(function() {
        return this.first() + " " + this.last();
    }, this);
};

var dataFromServer = {
    first: "Bob",
    last: "Smith"
};

ko.applyBindings(new ViewModel(dataFromServer));
