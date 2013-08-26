var ViewModel = function() {
    this.first = ko.observable("Bob");
    this.last = ko.observable("Smith");

    this.fullName = ko.computed({
        read: function() {
            return this.first() + " " + this.last();
        },
        disposeWhen: function() {
            //decide when to dispose
        }
    }, this);
};

ko.applyBindings(new ViewModel());