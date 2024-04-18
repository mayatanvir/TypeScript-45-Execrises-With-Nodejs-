// Define a function to creat a car object with optional options.......
function creat_car(manufacturer, model) {
    // Initialize a car object with manufacturer and model
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), Key = _a[0], value = _a[1];
        car[Key.trim()] = value.trim();
    });
    return car;
}
// Call the function to create a car object
var my_car = creat_car("Toyota", "Corrolla", "Colour: Grey", "Sunroof: True", "Year:2023");
//Print the variable to ensure all the information is  stored correctly in the car object
console.log(my_car);
