const Employee = require('..lib/Employee.js');
jest.mock('..lib/Employee.js');

// gets employee name

test('gets employee name', () => {
    const employee = new Employee('Gen', 30, 'gen@genmail.com', 'Employee');

    expect(employee.getName()).toBe('Gen');
}); 

// gets employee ID

test('gets employee id', () => {
    const Employee = new Employee('Gen');
    employee.id = 21;

    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.getId()).toHaveProperty('id');

});

// gets employee email

test('gets employee email', () => {
    const employee = new Employee('Gen');
    employee.email = "gen@genmail.com"

    expect(employee.id).toEqual(expect.any(String));
    expect(employee.getId()).toHaveProperty('email');
}); 

// gets employee role

test('gets employee role', () => {
    const employee = new Employee('Gen');

    expect(employee.getRole()).toBe('Employee');
    expect(employee.getRole()).toHaveProperty('role');
}); 




