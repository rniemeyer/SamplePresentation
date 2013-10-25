var ko = ko2;

ko.applyBindings({
    items: [
        { id: 1, name: "one" },
        { id: 2, name: "two" }
    ],

    selectedItems: ko.observableArray()
});