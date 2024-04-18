var guestList = ["Ali", "Tanvir", "omer", "heena", "sara"];
var dontCome = guestList[0];
console.log(dontCome, "I am not come to your dinner");
guestList.splice(0, 1, "Amir");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ",would you like dinner with me?")); });
