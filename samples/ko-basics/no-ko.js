var camper = {
    name: "Bob Smith",
    room: 515
};

$("#name").text(camper.name);

$("#nameEdit").val(camper.name).change(function() {
    camper.name = this.value;
    $("#name").text(this.value);
});