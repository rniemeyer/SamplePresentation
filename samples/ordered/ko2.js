var ko = ko2;

ko.applyBindings({
    items: [
        "one",
        "two",
        "three"
    ],

    selectedItems: ko.observableArray(["one", "three"])
});