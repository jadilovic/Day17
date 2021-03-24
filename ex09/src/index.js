// Lodash
const _ = require("lodash");

// only change code below this line
// users nested array with four objects starts here
var users = [
    {id: 1, firstName: "John", lastName: "Doe", age: 24, gender: "male"},
    {id: 2, firstName: "Jane", lastName: "Doe", age: 5, gender: "female"},
    {id: 3, firstName: "Jim", lastName: "Carrey", age: 54, gender: "male"},
    {id: 4, firstName: "Kate", lastName: "Winslet", age: 40, gender: "female"}
]
// users nested array with four object ends here

// getUsers function - list of users starts here
function getUsers(){
    var output = "";
    for(var i = 0; i < users.length; i++){
        output += `${users[i].id} - ${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}\n`;
        // console.log(users[i]);
    }
    return output;
}

// getUsers function - list of users ends here

// findUserById(id) function starts here
function findUserById(id){
    try {
        // add appropriate code here
        var user = _.find(users, function(user){
            if(user.id == id){
                return user;
            }
        })
        // console.log(user);
        var iFindUser = `${user.id} - ${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;
        // console.log(iFindUser);
        return iFindUser;
    } catch(error){
        // console.log(error); // Change this line
        return "Cannot read property 'id'"; // Change this line
    }
}
// findUserById(id) function ends here
// only chage code above this line
getUsers();
findUserById(2); // Change this line
console.log(getUsers());
console.log(findUserById(2));
console.log(findUserById(4));
console.log(findUserById(6));
module.exports = findUserById;