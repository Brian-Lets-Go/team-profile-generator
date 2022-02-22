// link to engineer.js
const Engineer = require ('../lib/Engineer.js');

// test create engineer object
test('creates object for engineer', () => {
    const engineer = new Engineer('Brian Meenan Engineer', 3333, 'brian.w.meenan@gmail.com', 'brian-lets-go');

    expect(engineer.github).toEqual(expect.any(String));

});

// test getRole()
test('test getRole', () => {
    const engineer = new Engineer('Brian Meenan Manager', 3333, 'brian.w.meenan@gmail.com', 'brian-lets-go');

    expect(engineer.getRole()).toEqual("Engineer");
}); 