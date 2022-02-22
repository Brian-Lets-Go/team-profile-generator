// link to intern.js
const Intern = require ('../lib/Intern.js');

// test create intern object
test('creates object for intern', () => {
    const intern = new Intern('Brian Meenan Engineer', 1111, 'brian.w.meenan@gmail.com', 'Boston College');

    expect(intern.school).toEqual(expect.any(String));

});

// test getRole()
test('test getRole', () => {
    const intern = new Intern('Brian Meenan Manager', 1111, 'brian.w.meenan@gmail.com', 'Boston College');

    expect(intern.getRole()).toEqual("Intern");
}); 