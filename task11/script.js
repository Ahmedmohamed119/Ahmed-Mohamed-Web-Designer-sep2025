var users = [];
var num = prompt("enter number of users");

function numberofuser() {
  for (var i = 0; i < num; i++) {
    adduser();
  }
}
numberofuser();

function adduser() {
  var id = prompt("enter user id");
  var name = prompt("enter user name");
  var balance = prompt("enter user balance");
  users.push({ id: id, name: name, balance: balance });
  console.log(users);
}

function edituserbalancebyid() {
  var id = prompt("enter user id to edit balance");
  var newbalance = prompt("enter new balance");
  var user = users.findIndex(function (user) {
    return user.id == id;
  });
  user !== -1
    ? (users[user].balance = newbalance, console.log("Balance updated:", users))
    : console.log("User not found!");
}

function deleteuserbyid() {
  var id = prompt("enter user id to delete");
  var index = users.findIndex(function (user) {
    return user.id == id;
  });
  index !== -1 
    ? (users.splice(index, 1), console.log("User deleted:", users)) 
    : console.log("User not found!");
}

