let guestList = ["Ali", "Tanvir", "omer", "heena", "sara"];

let dontCome = guestList[0];

console.log(dontCome, "I am not come to your dinner");

guestList.splice(0, 1, "Amir"); 

guestList.forEach(guest => console.log(`salam ${guest},would you like dinner with me?`));