// Define a function to creat a car object with optional options.......

function creat_car(manufacturer, model, ...options){
      
    // Initialize a car object with manufacturer and model

    let car = {
        manufacturer: manufacturer,
        model: model
    };

    // Add additional options to the car object
    options.forEach(option => {
        let [ Key, value ] = option.split(":");
        car[Key.trim()] = value.trim();
    });

    return car;
}
// Call the function to create a car object

let my_car = creat_car("Toyota","Corrolla","Colour: Grey", "Sunroof: True","Year:2023");

//Print the variable to ensure all the information is  stored correctly in the car object
console.log(my_car);