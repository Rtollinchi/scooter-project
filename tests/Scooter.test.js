/* eslint-disable */
const Scooter = require("../src/Scooter");

describe("scooter object", () => {
  const scooter = new Scooter("Brookly Bridge");

  test("Scooter class should create Scooter instance", () => {
    expect(scooter).toBeInstanceOf(Scooter);
  });

  test("Rent scooter if is charged above 20% and not broken", () => {
    const scooter = new Scooter("DUMBO");
    const user = "Crew";

    scooter.rent(user);

    expect(scooter.station).toBe(null);
    expect(scooter.user).toBe(user);
  });

  test("Scooter is not charged over 20%", () => {
    const scooter = new Scooter("Dumbo");
    scooter.charge = 19;
    const user = "Nash";

    expect(() => scooter.rent(user)).toThrow("Scooter needs to charge");
  });

  test("Scooter needs repair", () => {
    const scooter = new Scooter("Dumbo");
    scooter.isBroken = true;
    const user = "Nicole";

    expect(() => scooter.rent(user)).toThrow("Scooter needs repair");
  });

  test("Return scooter to a station and clear out user ", () => {
    const scooter = new Scooter("Dumbo");
    const user = "Martha";

    scooter.rent(user);

    scooter.dock("Brooklyn Bridge");

    expect(scooter.station).toBe("Brooklyn Bridge");
    expect(scooter.user).toBe(null);
  });
});
