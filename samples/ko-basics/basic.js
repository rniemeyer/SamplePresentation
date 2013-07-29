var camper = {
    name: "Bob Smith",
    room: 515,
    showName: function() {
        alert(camper.name);
    }
};

ko.applyBindings(camper);