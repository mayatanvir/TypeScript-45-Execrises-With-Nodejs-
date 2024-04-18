//Defin the function to show magician names
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return " The Great ".concat(name, " "); });
}
//Define an array of magician names
var magician_names = ["Teller", "Albus", "Blaine", "Harry"];
var great_magicians = make_great(magician_names);
console.log(great_magicians);
show_magicians(great_magicians);
