const Employee = require('lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Neeko', 100, 'neeko_tvxq@hotmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toStrictEqual(expect.any(String));
});

test("get the employee's role", () => {
    const employee = new Employee('Neeko', 100, 'neeko_tvxq@hotmail.com');

    expect(employee.getRole()).toEqual('Employee');
});