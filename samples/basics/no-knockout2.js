var meeting = {
    name: "10/8 MadJS",
    location: "STUDYBLUE"
};

$("#name").text(meeting.name);

$("#nameEdit").val(meeting.name).change(function() {
    meeting.name = this.value;
    $("#name").text(this.value);
});