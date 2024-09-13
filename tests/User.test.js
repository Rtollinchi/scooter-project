/* eslint-disable */

const User = require("../src/User");

describe("User property tests", () => {
  test("username should be a string", () => {
    const user = new User("Joe Bloggs", "test123", 21);

    expect(typeof user.username).toBe("string");
  });

  test("login user if password is correct", () => {
    const user = new User("Crew", "monsterjam", 4);

    user.login("monsterjam");

    expect(user.loggedIn).toBe(true);
  });

  test("should throw an error when logging in with incorrect password", () => {
    const user = new User("Nash", "basketball", 2);

    expect(() => user.login("baseball")).toThrow("Incorrect password");
  });
  // test age
});

test("Should login a user", () => {
  const user = new User("Martha", "crewnash", 71);

  user.login("crewnash");

  expect(user.loggedIn).toBe(true);
});

test("Should logout a user", () => {
  const user = new User("Nicole", "Pasta", 34);

  user.logout();

  expect(user.loggedIn).toBe(false);
});
