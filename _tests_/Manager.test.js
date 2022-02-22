// link to manager.js
const Manager = require ('../lib/Manager.js');

// test create manager object
test('creates object for manager', () => {
    const manager = new Manager('Brian Meenan Manager', 77777, 'brian.w.meenan@gmail.com', 1234567890);

    expect(manager.number).toEqual(expect.any(Number));

});

// test getRole()
test('test getRole', () => {
    const manager = new Manager('Brian Meenan Manager', 77777, 'brian.w.meenan@gmail.com', 1234567890);

    expect(manager.getRole()).toEqual("Manager");
}); 