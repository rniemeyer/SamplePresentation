define(["knockout"], function(ko) {
    var ViewModel = function() {
        var self = this;
        this.showFns = ko.observable(false);

        this.points= [
            "ko.subscribable.fn",
            "ko.observable.fn",
            "ko.computed.fn",
            "ko.observableArray.fn"
        ];

        this.next = function() {
            if (!self.showFns()) {
                self.showFns(true);
                return true;
            }

            return false;
        };

        this.previous = function() {
            if (self.showFns()) {
                self.showFns(false);
                return true;
            }

            return false;
        };
    };

    return new ViewModel();
});

