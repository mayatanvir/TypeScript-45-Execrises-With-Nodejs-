// Making a Array of Countries and Print its orginal order
let countriesToVisit: string[] = ["Afghanistan","Canada","France","Brazil"];
console.log("orginal order:", countriesToVisit);

// print the Array in Alphabetiacl order without modifying the actual Arrau List
console.log("Alphabetiacl order:", [...countriesToVisit].sort());

//show that the array is still in its orgianl order
console.log("still in orginal order:",countriesToVisit);

//print the Array in Reversed order without modifying the  Actual Array List
console.log("Reverse order:", [...countriesToVisit].reverse());

//show that the array is still in its orgianl order
console.log("still in orginal order:",countriesToVisit);

// we have changed the orgainal array order now
console.log("orginal array Reversed:", countriesToVisit. reverse());
//print the array to show that its back to its orginal order
console.log("back to orgianl order:", countriesToVisit. reverse());
//print the array to show that its order has been changed in Alphabetical order now
console.log("sorted in Alphabetical order:", countriesToVisit.sort());

// we have changed again the orgainal array order now in reserse order again
console.log("orginal array Reversed Again:", countriesToVisit. reverse());