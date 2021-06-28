const Manager = require("../lib/Manager.js");
// jest.mock("../lib/Manager.js");

test("creates an manager object", () => {
    const manager = new Manager('Gen', 21, 'gen@genmail.com', 16);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.role).toEqual(expect.any(String));
})

test("gets manager name", () => {
    const manager = new Manager('Gen', 21, 'gen@genmail.com', 16);

    expect(manager.getName()).toBe('Gen');
});

test("gets manager id", () => {
    const manager = new Manager('Gen', 21, 'gen@genmail.com', 16);

    expect(manager.getId()).toBe(21);
});

test("gets manager email", () => {
    const manager = new Manager('Gen', 21, 'gen@genmail.com', 16);

    expect(manager.getEmail()).toBe('gen@genmail.com');
});

test("gets manager role", () => {
    const manager = new Manager('Gen', 21, 'gen@genmail.com', 16);

    expect(manager.getRole()).toBe("Manager");
    console.log(manager);
});