/* eslint-disable */

const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp {
  constructor() {
    this.stations = {
      'Dumbo': [],
      'Brooklyn Bridge': [],
      'Williamsburg': [],
    };
    this.registeredUsers = {};
  };

  registerUser(username, password, age) {
    if (this.registeredUsers[username]) {
      throw new Error("User already registered");
    }
    if (age < 18) {
      throw new Error("Must be over the age of 18 to ride");
    }
    const newUser = new User(username, password, age);

    this.registeredUsers[username] = newUser;
    return newUser;
  };

  loginUser(username, password) {
   const user = this.registeredUsers[username];

   if (!user) {
    throw new Error('Incorrect username or password');
   } if (user.password !== password) {
    throw new Error('Incorrect username or password');
   }

   user.login(password)
    console.log('user has been logged in');
  }
}

const scooter = new ScooterApp()

scooter.registerUser('Crew', 'Monsterjam', 22);

scooter.loginUser('Crew', 'Monsterjam');

console.log(scooter.registeredUsers['Crew'])
console.log(this.registeredUsers)
module.exports = ScooterApp;
