var camper = new Camper({ name: "Bob Smith", room: 515 });

var camperViewModel = {
    name: ko.observable("Bob"),
    room: ko.observable(515)
};

var sync = ko.computed(function() {
    camper.set(ko.toJS(camperViewModel));
});

camperViewModel.name("Robert");