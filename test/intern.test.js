const Intern = require("../lib/Intern");

test("Set School via the constructor argument", () => {
    const testValue = "Intern";
    const emp = new Intern("Danny", 1, "test@valormm.com", testValue);
    expect(emp.school).toBe(testValue);
});

test("getRole() functions correctly", () => {
    const testValue = "Intern";
    const emp = new Intern("Joseph", 1, "test@valormm.com", "Intern");
    expect(emp.getRole()).toBe(testValue);
});

test("Get School via getSchool()", () => {
    const testValue = "Intern";
    const emp = new Intern("Danny", 1, "test@valormm.com", testValue);
    expect(emp.getSchool()).toBe(testValue);
});