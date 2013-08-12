var camper = new Camper({ name: "Bob Smith", room: 515 });

var camperViewModel = {
    name: ko.observable(camper.name),
    room: ko.observable(camper.room)
};

camperViewModel.name.subscribe(function(newValue) {
    camper.set("name", newValue);
});

camperViewModel.name("Robert");