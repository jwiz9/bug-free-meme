const Employee = require("../lib/Employee");

it("Creates an Employee object", () => {
    const employee = new Employee("Jordan", 26, "jordanheath945@gmail.com");

    expect(employee.name).toBe("Jordan");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining("jordanheath945@gmail.com"));
})

it("Returns Employee name, email, id, and role", () => {
    const employee = new Employee("Jordan", 26, "jordanheath945@gmail.com");

    expect(employee.getName()).toBe("Jordan");
    expect(employee.getId()).toBe(26);
    expect(employee.getEmail()).toBe("jordanheath945@gmail.com");
    expect(employee.getRole()).toBe("Employee");
})