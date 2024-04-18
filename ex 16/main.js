// creating a Guest List Array
var guestList = ["Ali", "Tanvir", "omer", "heena", "sara"];
// making variable for those guest who cant come 
var dontCome = guestList[0];
// print the name of guest who cant come
console.log(dontCome, " I am not come to your dinner");
// Add or Remove Values from guest List array
guestList.splice(0, 1, "Amir");
// Message Print for Bigger Table
console.log("Good News ! we have found a Bigger Table for dinner.");
// Adding a new guest value at starting index of array
guestList.unshift("Ali");
//Adding a new guest value at ending  index of array
guestList.push("zain");
// Get a middle index of our guest List array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, " osama");
// Print Message of updated List
console.log(" Updated List of our guests");
// Sending a invitation message to our guests one by one with their names 
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like a dinner with me?")); });
