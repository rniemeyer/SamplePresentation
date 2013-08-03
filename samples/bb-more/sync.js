var Campers = Backbone.Collection.extend({
    url: "/campers"
});
var campers = new Campers();

campers.fetch({
    success: function(){
        alert('Recovered ' + campers.length + ' campers');
    }
});