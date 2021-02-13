const Intern = require('lib/Intern.js');

test('creates an intern object', () => {
    const employee = new Intern('Neeko', 100, 'neeko_tvxq@hotmail.com', 'University of Toronto');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toStrictEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
});

test("get the employee's role", () => {
    const employee = new Intern('Neeko', 100, 'neeko_tvxq@hotmail.com', 'University of Toronto');

    expect(employee.getRole()).toEqual('Intern');
});