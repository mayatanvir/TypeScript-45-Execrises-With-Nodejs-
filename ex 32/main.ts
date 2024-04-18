// List Array of Users
let current_users = ["Sana","Imran","Heena","Amir","Ali"]
//array of new users
let new_users = ["Sana","Ayesha","Heena","Maha","Ali"]

//Loop through new_users to check for usersnames avaibility
new_users.forEach(new_one_user=> {

    // Making a Condition for username already exist and save in our_condition variable 
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    //print Different message using if-Else statements
    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken!`)
    }else
    {

        console.log(`This Username ${new_one_user} is available`)
    }
}) 

