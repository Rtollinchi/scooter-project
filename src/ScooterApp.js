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
  }

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
  }
}

// const scooterApp = new ScooterApp()
// const newUser = scooterApp.registerUser("Crew", "Monsterjam", 4);

// console.log(newUser);
module.exports = ScooterApp;
