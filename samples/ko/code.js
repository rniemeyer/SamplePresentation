//Alt+Down will move to the next sample state
var ViewModel = function() {
    this.test = ko.observable("Testing");
};

ko.applyBindings(new ViewModel());