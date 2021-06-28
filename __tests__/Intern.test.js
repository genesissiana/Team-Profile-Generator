const Intern = require('..lib/Intern.js');
jest.mock('..lib/Intern.js');

test('gets intern name', () => {
    const intern = new Intern('Gen');

    expect(intern.name()).toBe('Gen');
    expect(intern.getName()).toHaveProperty('name');
}); 

test('gets intern id', () => {
    const intern = new Intern('Gen');
    intern.id = 21;

    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.getId()).toHaveProperty('id');

});

test('gets intern email', () => {
    const intern = new Intern('Gen');
    intern.email = "gen@genmail.com"

    expect(intern.email).toEqual(expect.any(String));
    expect(intern.getEmail()).toHaveProperty('email');
}); 

test('gets intern role', () => {
    const intern = new Engineer('Gen');

    expect(intern.getRole()).toBe('Intern');
    expect(intern.getRole()).toHaveProperty('role');
}); 

test('gets intern school', () => {
    const intern = new Intern('Gen');
    intern.school = "UCLA Boot";

    expect(intern.github).toEqual(expect.any(String));
    expect(intern.getSchool()).toHaveProperty('school');
});