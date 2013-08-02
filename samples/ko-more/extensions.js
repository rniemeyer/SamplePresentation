ko.observable.fn.required = function() {
    this.isValid = ko.computed(function() {
        var value = this();
        return !!value;
    }, this);

    return this;
};
