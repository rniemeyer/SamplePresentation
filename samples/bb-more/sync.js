var User = Backbone.Collection.extend({
    url: '/users'
});
var users = new Users();

users.fetch({
    success: function(){
        alert('Recovered ' + users.length + ' users');
    }
});