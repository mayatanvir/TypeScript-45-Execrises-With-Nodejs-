// Define a function with a rest parameter that accept iteams argments representing our sandwish
function makeSandwish(...items: string[]){
     console.log(" Making a sandwish with the following items : \n");

     items.forEach(singleitem => console.log("-" + singleitem));
     console.log("\nNow Enjoy sandwish");
}


//Call the function 3 times with 3 different number of arguments
makeSandwish("Chicken","Cheese","Mayo","egg");

makeSandwish("Brown Bread","Butter");

makeSandwish("Bread","mayo","egg","chicken","cheese","butter");
