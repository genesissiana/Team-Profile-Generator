const Engineer = require('..lib/Engineer.js');
jest.mock('..lib/Employee.js');

test('gets engineer name', () => {
    const engineer = new Engineer('Gen', 30, 'gen@genmail.com', 'Employee');

    expect(engineer.getName()).toBe('Gen');
}); 

test('gets engineer id', () => {
    const engineer = new Engineer('Gen');
    employee.id = 21;

    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.getId()).toHaveProperty('id');

});

test('gets engineer email', () => {
    const engineer = new Engineer('Gen');
    engineer.email = "gen@genmail.com"

    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.getEmail()).toHaveProperty('email');
}); 

test('gets engineer role', () => {
    const engineer = new Engineer('Gen');

    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getRole()).toHaveProperty('role');
}); 

test('gets engineer github', () => {
    const engineer = new Engineer('Gen');
    engineer.github = "genesissiana";

    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.getGithub()).toHaveProperty('github');
});