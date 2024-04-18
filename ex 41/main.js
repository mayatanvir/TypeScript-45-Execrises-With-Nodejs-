//defin a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Define an array containing magician name
var magician_name = ["Teller", "Albus", "Blaine", "Harry"];
//call the function to print each magician name
show_magicians(magician_name);
