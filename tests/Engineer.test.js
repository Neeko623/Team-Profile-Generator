const Engineer = require("lib/Engineer.js");

test("creates an engineer object", () => {
  const employee = new Engineer("Neeko", 100, "neeko_tvxq@hotmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toStrictEqual(expect.any(String));
  expect(employee.github).toEqual(expect.any(String));
});

test("get the employee's role", () => {
  const employee = new Engineer("Neeko", 100, "neeko_tvxq@hotmail.com");

  expect(employee.getRole()).toEqual("Engineer");
});
