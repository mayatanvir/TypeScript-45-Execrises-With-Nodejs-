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
// inform that only two guests can be invited for dinner 
console.log("unfortunately, a new dinner table wont arrive on time, so I can only invite two Guests to dinner with me ");
// using whlie -loop to remove guest from the array until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry,".concat(removedGuest, " I cant invite to dinner"));
}
//sending a invitations to the two guest on the list
console.log("Invitations to the last 2 Guests");
guestList.forEach(function (lasttwo) { return console.log(" Luckly ".concat(lasttwo, ",you are still invited to dinner")); });
//removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
