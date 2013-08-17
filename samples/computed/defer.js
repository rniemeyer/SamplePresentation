var viewModel = {
    first: ko.observable("Bob"),
    last: ko.observable("Smith"),
    fullName: ko.computed({
        read: function() {
            return viewModel.first() + " " + viewModel.last();
        },
        deferEvaluation: true
    })
};

ko.applyBindings(viewModel);