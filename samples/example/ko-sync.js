var camper = new Camper({ name: "Bob Smith", room: 515 });

var camperViewModel = {
    name: ko.observable("Bob"),
    room: ko.observable(515)
};

camper.on("change", function(model) {
    _.each(model.changed, function(value, prop) {
        if (ko.isWriteableObservable(camperViewModel[prop])) {
            camperViewModel[prop](model.changed[prop]);
        }
    }, this);
});

camper.set("name", "Robert");
