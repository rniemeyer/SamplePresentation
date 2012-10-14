var data = {
	meetings: ko.observableArray([
        new Meeting("9/10 MadJS", "STUDYBLUE"),
        new Meeting("10/8 MadJS", "STUDYBLUE"),
        new Meeting("11/12 MadJS", "TBD")
    ])
};

ko.applyBindings(data);

data.meetings.push(new Meeting("12/10 MadJS", "TBD"));