ko.applyBindings({
    selected: ko.observable(),
    users: [
        { name: ko.observable("Andy")},
        { name: ko.observable("Amy")},
        { name: ko.observable("Deanna")}
    ]
});