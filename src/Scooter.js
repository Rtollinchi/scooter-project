/* eslint-disable */

class Scooter {
  static nextSerial = 1;

  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }
  rent(user) {
    if (this.charge > 20 && !this.isBroken) {
      if (this.station) {
        this.station = null;
        this.user = user;
      } else {
        throw new Error("Scooter is already rented");
      }
    } else if (this.charge <= 20) {
      throw new Error("Scooter needs to charge");
    } else {
      throw new Error("Scooter needs repair");
    }
  };
  dock(station) {
    if (this.station = station) {
      this.user = null;
    }
  }
}

module.exports = Scooter;
