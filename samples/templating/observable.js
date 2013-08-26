var ViewModel = function() {
    this.name = ko.observable("Luiz");
    this.role = ko.observable("js");
};

ko.applyBindings(new ViewModel());