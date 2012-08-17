define(["knockout", "jquery"], function (ko, $) {
    ko.bindingHandlers.keys = {
        init: function (element, valueAccessor, allBindings, vm) {
            var actions = ko.utils.unwrapObservable(valueAccessor()) || {},
                handler = function (event) {
                    var action = actions['key' + event.keyCode],
                        modifier = ko.utils.unwrapObservable(allBindings().modifier),
                        result;

                    if (action) {
                        if (modifier && !event[modifier]) {
                            return true;
                        }

                        result = action.call(vm, vm, event);

                        return result === undefined ? false : result;
                    }
                };

            ko.utils.registerEventHandler(element, 'keyup', handler);
        }
    };

    ko.bindingHandlers.hidden = {
        update: function(element, valueAccessor) {
            var newValueAccessor = function() {
                return !ko.utils.unwrapObservable(valueAccessor());
            };

            ko.bindingHandlers.visible.update(element, newValueAccessor);
        }
    };

    ko.bindingHandlers.fadeText = {
        update: function (element, valueAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor());
            if (value !== $(element).text()) {
                $(element).hide().text(value).fadeIn();
            }
        }
    };

    ko.bindingHandlers.focusBody = {
        init: function(element) {
            $(element).focus(function() {
               $("body a").first().focus();
            });
        }
    };
});
