var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array of Countries and Print its orginal order
var countriesToVisit = ["Afghanistan", "Canada", "France", "Brazil"];
console.log("orginal order:", countriesToVisit);
// print the Array in Alphabetiacl order without modifying the actual Arrau List
console.log("Alphabetiacl order:", __spreadArray([], countriesToVisit, true).sort());
//show that the array is still in its orgianl order
console.log("still in orginal order:", countriesToVisit);
//print the Array in Reversed order without modifying the  Actual Array List
console.log("Reverse order:", __spreadArray([], countriesToVisit, true).reverse());
//show that the array is still in its orgianl order
console.log("still in orginal order:", countriesToVisit);
// we have changed the orgainal array order now
console.log("orginal array Reversed:", countriesToVisit.reverse());
//print the array to show that its back to its orginal order
console.log("back to orgianl order:", countriesToVisit.reverse());
//print the array to show that its order has been changed in Alphabetical order now
console.log("sorted in Alphabetical order:", countriesToVisit.sort());
// we have changed again the orgainal array order now in reserse order again
console.log("orginal array Reversed Again:", countriesToVisit.reverse());
