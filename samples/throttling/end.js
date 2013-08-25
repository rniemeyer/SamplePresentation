var ViewModel = function() {
    this.users = [
        { name: "Bob", selected: ko.observable(false) },
        { name: "Deanna", selected: ko.observable(false) },
        { name: "Kent", selected: ko.observable(false) }
    ];

    this.counter = ko.observable(0);
    this.selectedUsers = ko.computed(function() {
        this.counter(this.counter.peek() + 1);
        return ko.utils.arrayFilter(this.users, function(user) {
            return user.selected();
        });
    }, this).extend({ throttle: 1 });

    this.checkAll = function() {
        ko.utils.arrayForEach(this.users, function(user) {
            user.selected(true);
        });
    };
};

ko.applyBindings(new ViewModel());