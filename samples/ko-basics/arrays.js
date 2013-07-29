var ViewModel = function() {
   this.campers = ko.observableArray([
        new Camper({ name: "Bob Smith", room: 515 }),
        new Camper({ name: "Sue Jones", room: 110 })
   ]);
};

ko.applyBindings(new ViewModel());