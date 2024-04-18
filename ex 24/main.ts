
//Define Varibles
let apple = "apple";
let uppercaseApple = " APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "pineapple", "orange"];

//test for equality and inequality with strings
console.log(" Is apple is Equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not Equal to apple?");
console.log(apple != "apple");

//test using Lowercase funtion
console.log("\nIs APPLE is equal to apple after converting to Lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting to Lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

//Numerical tests
//Equal
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
 // not Equal
console.log("is ten is not equal to twenty?");
console.log(ten != twenty);
// Greater than 
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);
// Less than
console.log("\nIs twenty is less than 10");
console.log(twenty < 10);

//Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

//less than or equal to
console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10);
// tests using "and" & "or" operators
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
//using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);

//using || (or)
console.log("\n 20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is greaten than 50 or 20 is not equal 20");
console.log(20 > 50 || 20 != 20);

//test whether an item is include in Array
console.log("\n Is orange include in my fruits array");
console.log(fruits.includes("orange"));
//Not Include
console.log("\nIs orange not include in my fruits array");
console.log(!fruits.includes("orange"));






