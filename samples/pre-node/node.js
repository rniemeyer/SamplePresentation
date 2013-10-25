ko.bindingProvider.instance.preprocessNode = function(node) {
    if (node.nodeType !== 1) {
        return;
    }

    var name = node.tagName.toLowerCase(),
        template = document.getElementById(name);

    if (template) {
        var newNode = document.createElement("div");
        newNode.setAttribute("data-bind", "template: '" + name + "'");

        node.parentNode.insertBefore(newNode, node);
        node.parentNode.removeChild(node);
    }
};

ko.applyBindings({
    first: ko.observable("Ryan")
});