var ViewModel = function() {
   this.campers = [
        new Camper({ name: "Bob Smith", room: 515 }),
        new Camper({ name: "Sue Jones", room: 110 })
   ];
};

var vm = new ViewModel();

ko.applyBindings(vm);