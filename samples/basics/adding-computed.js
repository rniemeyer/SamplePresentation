var meeting = {
    name: ko.observable("10/8 MadJS"),
    location: "STUDYBLUE"
};

meeting.formatted = ko.computed(function() {
    return meeting.name() + " (" + meeting.location + ")";
});

ko.applyBindings(meeting);