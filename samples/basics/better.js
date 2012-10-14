var Meeting = function(name, location) {
    this.name = ko.observable(name);
    this.location = ko.observable(location);

    this.formatted = ko.computed(function() {
        return this.name() + " (" + this.location() + ")";
    }, this);
};

ko.applyBindings(new Meeting("10/8 MadJS", "STUDYBLUE"));