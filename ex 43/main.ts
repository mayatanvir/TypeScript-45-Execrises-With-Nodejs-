
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

//making a copy of orignal array through .slice() funation

let copy_magician_names = magician_names.slice();

//Modify the copied array to includ " The great" with their names
let copy_great_magicians = make_great(copy_magician_names);

//show both arrays original and copied

// original
 console.log("Orginal Array\n")
show_magicians(magician_names);

//copied
 console.log("\nCopied Array\n")
 show_magicians(copy_great_magicians);




