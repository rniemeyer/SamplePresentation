//name stayed the same, so it did not fade.  Code could be updated a bit.
var ViewModel = function() {
    this.test = ko.observable("Testing");
    this.testUpper = ko.computed(function() {
        return this.test().toUpperCase();
    }, this);
};

ko.applyBindings(new ViewModel());