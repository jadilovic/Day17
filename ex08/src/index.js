// Lodash
const _ = require("lodash");

// only change code below this line
// users nested array with four objects starts here
var users = [
    {firstName: "John", lastName: "Doe", age: 24, gender: "male"},
    {firstName: "Jane", lastName: "Doe", age: 5, gender: "female"},
    {firstName: "Jim", lastName: "Carrey", age: 54, gender: "male"},
    {firstName: "Kate", lastName: "Winslet", age: 40, gender: "female"}
]
// users nested array with four object ends here

// getUsers function - list of users starts here
function getUsers(){
    var output = "";
    for(var i = 0; i < users.length; i++){
        output += `${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}\n`;
        // console.log(users[i]);
    }
    return output;
}

// getUsers function - list of users ends here

// findUser(lastName, gender) function starts here
function findUser(lastName, gender){
    try {
        // add appropriate code here
        var user = _.find(users, function(user){
            if(user.lastName == lastName && user.gender == gender){
                return user;
            }
        })
        // console.log(user);
        var iFindUser = `${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;
        // console.log(iFindUser);
        return iFindUser;
    } catch(error){
        // console.log(error); // Change this line
        return "Cannot read property 'firstName' of undefined"; // Change this line
    }
}
// findUser(lastName, gender) function ends here
// only chage code above this line
getUsers();
findUser("Doe", "male"); // Change this line
console.log(getUsers());
console.log(findUser("Doe", "female"));
console.log(findUser("John", "male"));

module.exports = findUser;