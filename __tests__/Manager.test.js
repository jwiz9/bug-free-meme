const Manager = require("../lib/Manager");

it("Creates an Manager object", () => {
    const manager = new Manager("Heather", 40, "heather@gmail.com", 501);

    expect(manager.name).toBe("Heather");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining("heather@gmail.com"));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

it("Returns Manager name, email, id, and role", () => {
    const manager = new Manager("Heather", 40, "heather@gmail.com", 501);

    expect(manager.getName()).toBe("Heather");
    expect(manager.getId()).toBe(40);
    expect(manager.getEmail()).toBe("heather@gmail.com");
    expect(manager.getOfficeNumber()).toBe(501);
    expect(manager.getRole()).toBe("Manager");
})