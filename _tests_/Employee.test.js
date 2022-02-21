// Employee constructor
const Employee = require ('../lib/Employee.js');
// import { test } from 'picomatch'

// Create employee object
test('creates object for employee', () => {
    const employee = new Employee('Brian', 55, 'brian.w.meenan@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

