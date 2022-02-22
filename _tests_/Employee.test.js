// link to employee.js
const Employee = require ('../lib/Employee.js');

// test create employee object
test('creates object for employee', () => {
    const employee = new Employee('Brian Meenan', 55555, 'brian.w.meenan@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// test getName() 
test('test getName', () => {
    const employee = new Employee('Brian Meenan', 55555, 'brian.w.meenan@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// test getId() 
test('test getId', () => {
    const employee = new Employee('Brian Meenan', 55555, 'brian.w.meenan@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// test getEmail()
test('test getEmail', () => {
    const employee = new Employee('Brian Meenan', 55555, 'brian.w.meenan@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

// test getRole()
test('test getRole', () => {
    const employee = new Employee('Brian Meenan', 55555, 'brian.w.meenan@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 

