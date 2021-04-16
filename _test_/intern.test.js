const Intern = require("../lib/intern");

test("Set School via the constructor argument", () => {
    const testValue = "Trilogy";
    const emp = new Intern("Danny", 1, "test@valormm.com", testValue);
    expect(emp.school).toBe(testValue);
});

test("getRole() functions correctly", () => {
    const testValue = "intern";
    const emp = new Intern("Danny", 1, "test@valormm.com", "Trilogy");
    expect(emp.getRole()).toBe(testValue);
});

test("Get School via getSchool()", () => {
    const testValue = "Trilogy";
    const emp = new Intern("Danny", 1, "test@valormm.com", testValue);
    expect(emp.getSchool()).toBe(testValue);
});