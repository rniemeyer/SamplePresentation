var yourBindingProvider = {
    preProcessNode: function(node) {
        //available in KO 3.0
    },

    nodeHasBindings: function(node) {
        //return true/false
    },

    getBindingAccessors: function(node, bindingContext) {
        //return a binding object
    },

    getBindings: function(node, bindingContext) {
        //deprecated in 3.0
    }
};