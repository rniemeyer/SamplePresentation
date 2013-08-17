ko.observable.fn.maxLength = function(maxLength) {

};

var Client = function() {
    this.username = ko.observable("julie1");
    this.hasError = ko.observable(false);

    this.username.subscribe(function(newValue) {
        this.hasError(newValue && newValue.length > 10);
    }, this);
};

ko.applyBindings(new Client());