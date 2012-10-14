var meeting = {
    name: "10/8 MadJS",
    location: "STUDYBLUE",
    showName: function() {
        alert(meeting.name);
    }
};

ko.applyBindings(meeting);