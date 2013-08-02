var CampRouter = Backbone.Router.extend({
    routes: {
        "about": "about",
        "camper/:id": "camper"
    },

    about: function() {
        //load "about" information
    },

    camper: function(id) {
        //load appropriate camper
    }
});

var router = new CampRouter();

Backbone.history.start({ pushState: true });