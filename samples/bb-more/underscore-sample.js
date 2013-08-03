var campers = [
    { name : "Bob Smith", room : 515 },
    { name : "Sue Jones", room : 475 },
    { name : "Ron Greene", room : 242 }
];

_.pluck(campers, 'name');

//returns ["Bob Smith", "Sue Jones", "Ron Greene"]