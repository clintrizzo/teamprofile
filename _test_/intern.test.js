const intern = require("../lib/intern");

test("Set School via the constructor argument", () => {
    const testValue = "Trilogy";
    const emp = new intern("Danny", 1, "test@valormm.com", testValue);
    expect(emp.school).toBe(testValue);
});

test("getRole() functions correctly", () => {
    const testValue = "Trilogy";
    const emp = new intern("Danny", 1, "test@valormm.com", "name");
    expect(emp.getRole()).toBe(testValue);
});

test("Get School via getSchool()", () => {
    const testValue = "intern";
    const emp = new Intern("Danny", 1, "test@valormm.com", testValue);
    expect(emp.getSchool()).toBe(testValue);
});