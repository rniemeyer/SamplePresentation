var ViewModel = function() {
    this.first = ko.observable("Bob");
    this.last = ko.observable("Smith");

    this.fullName = ko.computed({
        read: function() {
            return this.first() + " " + this.last();
        },
        write: function(newValue) {
            var vals = newValue.split(" ");
            this.first(vals[0]).last(vals[1]);
        }
    }, this);
};

ko.applyBindings(new ViewModel());