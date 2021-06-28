const Manager = require('..lib/Manager.js');
jest.mock('..lib/Manager.js');

test('gets manager name', () => {
    const manager = new Manager('Gen');

    expect(manager.name()).toBe('Gen');
    expect(manager.getName()).toHaveProperty('name');
}); 

test('gets manager id', () => {
    const manager = new Manager('Gen');
    manager.id = 21;

    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.getId()).toHaveProperty('id');

});

test('gets manager email', () => {
    const manager = new Manager('Gen');
    intern.email = "gen@genmail.com"

    expect(manager.email).toEqual(expect.any(String));
    expect(manager.getEmail()).toHaveProperty('email');
}); 

test('gets manager role', () => {
    const manager = new Manager('Gen');

    expect(manager.getRole()).toBe('Manager');
    expect(manager.getRole()).toHaveProperty('role');
}); 

test('gets manager office number', () => {
    const intern = new Manager('Gen');
    manager.officeNumber = 16;

    expect(manager.officeNumber).toEqual(expect.any(Number));
});