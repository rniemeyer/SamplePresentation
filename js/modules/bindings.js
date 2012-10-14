define(["knockout", "sample"], function(ko) {
    return function() {
        this.title = "Built-in Bindings"

        this.allTypes = [
            { title: "Appearance", bindings: [
                { title: "visible", sample: "\n<div data-bind=\"visible: showDetails\"></div>\n" },
                { title: "text", sample: "\n<div data-bind=\"text: name\"></div>\n" },
                { title: "html", sample: "\n<div data-bind=\"html: details\"></div>\n" },
                { title: "css", sample: "\n<div data-bind=\"css: { active: selected }\"></div>\n" },
                { title: "style", sample: "\n<div data-bind=\"style: { color: textColor }\"></div>\n" },
                { title: "attr", sample: "\n<a data-bind=\"attr: { href: url }\">Home</a>\n" }
            ]},
            { title: "Form fields", bindings: [
                { title: "click", sample: "\n<button data-bind=\"click: addItem\">Add Item</button>\n" },
                { title: "event", sample: "\n<div data-bind=\"event: { dblclick: showDetails }\"></div>\n" },
                { title: "submit", sample: "\n<form data-bind=\"submit: saveData\"></form>\n" },
                { title: "enable", sample: "\n<input data-bind=\"enable: editable\"/>\n" },
                { title: "disable", sample: "\n<input data-bind=\"disable: readyOnly\" />\n" },
                { title: "value", sample: "\n<input data-bind=\"value: firstName\" />\n" },
                { title: "hasfocus", sample: "\n<input data-bind=\"hasfocus: focused\" />\n" },
                { title: "checked", sample: "\n<input type=\"checkbox\" data-bind=\"checked: allowUpdates\" />\n" },
                { title: "options", sample: "\n<select data-bind=\"options: choices, value: selected\"></select>\n" },
                { title: "selectedOptions", sample: "\n<select data-bind=\"options: choices, selectedOptions: selected\" multiple=\"true\" size=\"10\"></select>\n" }
            ]},
            { title: "Control-flow / templating", bindings: [
                { title: "foreach", sample: "\n<ul data-bind=\"foreach: items\">\n    <li data-bind=\"text: name\"></li>\n</ul>\n" },
                { title: "if", sample: "\n<div data-bind=\"if: showDetails\"></div>\n" },
                { title: "ifnot", sample: "\n<div data-bind=\"ifnot: hideDetails\"></div>\n" },
                { title: "with", sample: "\n<div data-bind=\"with: selected\">\n    <div data-bind=\"text: name\"></div>\n</div>\n" },
                { title: "template", sample: "\n<ul data-bind=\"template: { name: 'itemTmpl', foreach: items }\"></ul>\n\n<script id=\"itemTmpl\" type=\"text/html\">\n    <li data-bind=\"text: name\"></li>\n</script>" }
            ]}
        ];

        this.activeType = ko.observable();
        this.activeBinding = ko.observable();
        this.activeBindingName = ko.computed(function() {
            var active = this.activeBinding();
            return active ? active.title : "none";
        }, this);

        this.selectBinding = function(binding) {
            this.activeBinding(binding);
            this.activeType(ko.utils.arrayFirst(this.allTypes, function(type) {
                return ko.utils.arrayIndexOf(type.bindings, binding) > -1;
            }));
        }.bind(this);

        //add the top point to the list of displayed points
        this.next = function() {
            var activeType, typeIndex, activeBinding, bindingIndex, newType;

            activeType = this.activeType();

            //no type shown yet
            if (!activeType) {
                this.activeType(this.allTypes[0]);
                this.activeBinding(this.allTypes[0].bindings[0]);
                return true;
            }

            activeBinding = this.activeBinding();

            //type shown, but no binding yet
            if (!activeBinding) {
                this.activeBinding(activeType.bindings[0]);
                return true;
            }

            typeIndex = ko.utils.arrayIndexOf(this.allTypes, activeType);
            bindingIndex =  ko.utils.arrayIndexOf(activeType.bindings, activeBinding);

            //more bindings of this type to show
            if (bindingIndex < (activeType.bindings.length - 1)) {
                this.activeBinding(activeType.bindings[bindingIndex + 1]);
                return true;
            }

            //more types to show
            if (typeIndex < (this.allTypes.length - 1)) {
                newType = this.allTypes[typeIndex + 1];
                this.activeType(newType);
                this.activeBinding(newType.bindings[0]);

                return true;
            }

            return false;
        };

        //step back
        this.previous = function() {
            var activeType, typeIndex, activeBinding, bindingIndex, newType;

            activeType = this.activeType();

            //no type shown yet, nowhere back to go
            if (!activeType) {
                return false;
            }

            activeBinding = this.activeBinding();
            typeIndex = ko.utils.arrayIndexOf(this.allTypes, activeType);
            bindingIndex =  ko.utils.arrayIndexOf(activeType.bindings, activeBinding);

            //more bindings of this type to show
            if (bindingIndex > 0) {
                this.activeBinding(activeType.bindings[bindingIndex - 1]);
                return true;
            }

            //there is a type, but no bindings to go back to
            if (typeIndex > 0) {
                newType = this.allTypes[typeIndex - 1];
                this.activeType(newType);
                this.activeBinding(newType.bindings[newType.bindings.length - 1]);
                return true;
            }

            return false;
        };
    };
});