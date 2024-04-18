//Defin the function to show magician names
function show_magicians(magician: string[]){
    magician.forEach(name => console.log(name));
}
 
// Function to make magicians great through . mop() it will modify array
function make_great(magicians: string[]){
   return magicians.map(name => ` The Great ${name} `);
}


//Define an array of magician names
let magician_names = ["Teller","Albus","Blaine","Harry"];

// call make_great funation to modify magicians names
let great_magicians = make_great(magician_names);

console.log(great_magicians)
// call show_magicians that show modified list of magicians
show_magicians(great_magicians)