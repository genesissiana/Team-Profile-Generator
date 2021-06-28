const Employee = require('..lib/Employee.js');

test("creates an employee object", () => {
    const employee = new Employee("Gen", 21, "gen@genmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('gets employee name', () => {
    const employee = new Employee('Gen', 21, 'gen@genmail.com',);

    expect(employee.getName()).toBe('Gen');
}); 

test('gets employee id', () => {
    const employee = new Employee('Gen', 21, 'gen@genmail.com',);

    expect(employee.getId()).toBe(21);

});

test('gets employee email', () => {
    const employee = new Employee('Gen', 21, 'gen@genmail.com',);

    expect(employee.getEmail()).toBe("gen@genmail.com")
}); 

test('gets employee role', () => {
    const employee = new Employee('Gen', 21, 'gen@genmail.com',);

    expect(employee.getRole()).toBe('Employee');
    console.log(employee);

}); 




