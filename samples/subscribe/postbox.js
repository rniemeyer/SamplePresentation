var ViewModelOne = function() {
    this.first = ko.observable("Jonathan").publishOn("first");
};

var ViewModelTwo = function() {
    this.firstName = ko.observable().subscribeTo("first", true);
};

ko.applyBindings(new ViewModelOne(), document.getElementById("one"));
ko.applyBindings(new ViewModelTwo(), document.getElementById("two"));