var data = {
    meetings: ko.observableArray([
        new Meeting("9/10 MadJS", "STUDYBLUE"),
        new Meeting("10/8 MadJS", "STUDYBLUE"),
        new Meeting("11/12 MadJS", "TBD")
    ]),
    addMeeting: function() {
        this.meetings.push(new Meeting("New", "TBD"));
    },
    removeMeeting: function(meeting) {
        data.meetings.remove(meeting);
    }
};

ko.applyBindings(data);