ko.bindingHandlers.dblclick = {
    init: function(element, valueAccessor, allBindings, data) {
        var newValueAccessor = function() {
            return { dblclick: valueAccessor() };
        };

        ko.bindingHandlers.event.init(element,  newValueAccessor, allBindings, data);
    }
};

var ViewModel = function() {
    this.showDetails = ko.observable(false);
    this.toggleDetails = function() {
        this.showDetails(!this.showDetails());
    }
};

ko.applyBindings(new ViewModel());