$(".load").on("click", function(e) {
    var editor = $(e.target).next().html($(".editor").clone());
    ko.applyBindings(new Item(), editor[0]);
});
