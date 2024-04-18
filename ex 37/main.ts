
// Making a Function

function make_shirt (size: string = "Large", printMessage: string = "I Love TypeScript"){
     console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`)
} 

// Calling a function with by defualt values
make_shirt();

//Calling a function now with Medium size and default message
make_shirt("Medium")

//Calling a function now small size and  also Different print message
make_shirt("Small", "I love JavaScript")