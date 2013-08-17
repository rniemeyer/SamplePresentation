ko.applyBindings({
    selected: ko.observable(),
    missions: [
        { name: ko.observable("Save the village")},
        { name: ko.observable("Stop the mobster")},
        { name: ko.observable("Rescue the children")}
    ]
});