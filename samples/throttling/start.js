var ViewModel = function() {
    this.width = ko.observable(100);
    this.height = ko.observable(100);

    this.dimensions = ko.computed(function() {
        return {
            width: this.width() + "px",
            height: this.height() + "px"
        };
    }, this);

    this.grow = function() {
        this.width(this.width() + 10);
        this.height(this.height() + 10);
    };
};

ko.applyBindings(new ViewModel());