// List Array of Users
var current_users = ["Sana", "Imran", "Heena", "Amir", "Ali"];
//array of new users
var new_users = ["Sana", "Ayesha", "Heena", "Maha", "Ali"];
//Loop through new_users to check for usersnames avaibility
new_users.forEach(function (new_one_user) {
    // Making a Condition for username already exist and save in our_condition variable 
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //print Different message using if-Else statements
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
