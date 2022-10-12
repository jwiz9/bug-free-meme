const Engineer = require("../lib/Engineer");

test("Creates an manager object", () => {
    const engineer = new Engineer("Bernie", 50, "bernie123@gmail.com", "Bernie Waiters");

    expect(engineer.name).toBe("Bernie");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining("bernie123@gmail.com"));
    expect(engineer.github).toBe("Bernie Waiters");
})

test("returns manager name, email, id, and role", () => {
    const engineer = new Engineer("Bernie", 50, "bernie123@gmail.com", "Bernie Waiters");

    expect(engineer.getName()).toBe("Bernie");
    expect(engineer.getId()).toBe(50);
    expect(engineer.getEmail()).toBe("bernie123@gmail.com");
    expect(engineer.getGithub()).toBe("Bernie Waiters");
    expect(engineer.getRole()).toBe("Engineer");
})