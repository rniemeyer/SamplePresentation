ko.observable.fn.maxLength = function(maxLength, message) {
    this.hasError = ko.observable();
    this.message = message || "Too long!";

    this.subscribe(function(newValue) {
        this.hasError(newValue && newValue.length > maxLength);
    }, this);

    //validate our value initially
    this.valueHasMutated();

    return this;
};

var Client = function() {
    this.username = ko.observable("julie1").maxLength(10, "Way too long!");
};

ko.applyBindings(new Client());