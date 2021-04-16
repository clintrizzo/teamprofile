const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("Set Office Number via constructor argument", () => {
    const testValue = 50;
    const emp = new Manager("Nick", 1, "test@valormm.com", testValue);
    expect(emp.officeNumber).toBe(testValue);
});


test("getRole() functions correctly", () => {
    const testValue = "manager";
    const emp = new Manager("Nick", 1, "test@valormm.com");
    expect(emp.getRole()).toBe(testValue);
});


test("Get Office Number via getOffice()", () => {
    const testValue = 50;
    const emp = new Manager("Nick", 1, "test@valormm.com", testValue);
    expect(emp.getOfficeNumber()).toBe(testValue);
});