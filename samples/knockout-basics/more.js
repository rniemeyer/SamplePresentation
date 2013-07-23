//the idea is that you build this from the existing code, but in a pinch you can pull it in with Alt+? in the editor.
var ViewModel = function() {
    this.first = ko.observable("Bob");
    this.last = ko.observable("Smith");
};

ko.applyBindings(new ViewModel());
