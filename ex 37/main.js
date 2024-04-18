// Making a Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " print on shirt"));
}
// Calling a function with by defualt values
make_shirt();
//Calling a function now with Medium size and default message
make_shirt("Medium");
//Calling a function now small size and  also Different print message
make_shirt("Small", "I love JavaScript");
