var ViewModelOne = function() {
    this.first = ko.observable("Jonathan");
};

var ViewModelTwo = function() {
    this.firstName = ko.observable();
};

var one = new ViewModelOne();
var two = new ViewModelTwo();

one.first.publishOn("first");
two.firstName.subscribeTo("first", true);

ko.applyBindings(one, document.getElementById("one"));
ko.applyBindings(two, document.getElementById("two"));