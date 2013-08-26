var ViewModel = function() {
    this.users = ko.observableArray([
        { name: ko.observable("Bob") },
        { name: ko.observable("Ted") },
        { name: ko.observable("Jordan") }
    ]);
};

ViewModel.prototype.removeItem = function(item) {
    this.users.remove(item);
};

ko.applyBindings(new ViewModel());

$(".list").on("click", ".remove", function() {
    var context = ko.contextFor(this);
    context.$parent.removeItem(context.$data);
});