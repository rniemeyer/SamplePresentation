var viewModel = {
    first: ko.observable("Bob"),
    last: ko.observable("Smith"),
    fullName: ko.computed(function() {
        return viewModel.first() + " " + viewModel.last();
    })
};

ko.applyBindings(viewModel);