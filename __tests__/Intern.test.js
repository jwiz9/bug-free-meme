const Intern = require("../lib/Intern");

it("Creates an Intern object", () => {
    const intern = new Intern("Daniel", 41, "daniel@gmail.com", "Cal");

    expect(intern.name).toBe("Daniel");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining("daniel@gmail.com"));
    expect(intern.school).toBe("Cal");
})

it("Returns Intern name, email, id, school and role", () => {
    const intern = new Intern("Daniel", 41, "daniel@gmail.com", "Cal");

    expect(intern.getName()).toBe("Daniel");
    expect(intern.getId()).toBe(41);
    expect(intern.getEmail()).toBe("daniel@gmail.com");
    expect(intern.getSchool()).toBe("Cal");
    expect(intern.getRole()).toBe("Intern");
})