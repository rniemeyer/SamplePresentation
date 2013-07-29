var Camper = function(data) {
    this.name = ko.observable(data.name);
    this.room = ko.observable(data.room);
    this.formatted = ko.computed(this.getFormatted, this);
};

Camper.prototype.getFormatted = function() {
    return this.name() + " (" + this.room() + ")";
};

var camperFromServer = {
    name: "Bob Smith",
    room: 515
};

ko.applyBindings(new Camper(camperFromServer));