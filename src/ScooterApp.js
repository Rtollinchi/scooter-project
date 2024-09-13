/* eslint-disable */

const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp {
  constructor() {
    this.stations = {
      Dumbo: [],
      "Brooklyn Bridge": [],
      Williamsburg: [],
    };
    this.registeredUsers = {};
  }
}
module.exports = ScooterApp;
