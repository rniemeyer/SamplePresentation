var user = {
    name: ko.observable("Tyson"),
    role: ko.observable("JavaScript Engineer")
};

ko.applyBindings(user);

$("#name").tooltip({ title: user.role() });
