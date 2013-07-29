var camper = {
    name: ko.observable("Bob Smith"),
    room: ko.observable(515)
};

camper.formatted = ko.computed(function() {
    return camper.name() + " (" + camper.room() + ")";
});

ko.applyBindings(camper);