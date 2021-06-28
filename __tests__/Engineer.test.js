const Engineer = require('..lib/Engineer.js');

test("creates an engineer object", () => {
    const engineer = new Engineer("Gen", 21, "gen@genmail.com");

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.role).toEqual(expect.any(String));
})

test("gets engineer name", () => {
    const engineer = new Engineer('Gen', 21, 'gen@genmail.com',);

    expect(engineer.getName()).toBe("John");
});

test("gets engineer id", () => {
    const engineer = new Engineer('Gen', 21, 'gen@genmail.com',);

    expect(engineer.getId()).toBe(21);
});

test("gets engineer email", () => {
    const engineer = new Engineer('Gen', 21, 'gen@genmail.com',);

    expect(engineer.getEmail()).toBe("John@gmail.com");
});

test("gets engineer role", () => {
    const engineer = new Engineer('Gen', 21, 'gen@genmail.com',);

    expect(engineer.getRole()).toBe('Employee');
});

test("gets engineer github", () => {
    const engineer = new Engineer('Gen', 21, 'gen@genmail.com',);

    expect(engineer.getGithub()).toBe("genesissiana");
})