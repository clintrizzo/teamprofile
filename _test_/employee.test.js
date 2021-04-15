const employee = require("../lib/employee");

test("New Employee created", () => {
    const emp = new employee();
    expect(typeof(emp)).toBe("object");
});

test("Set Employee Name via constructor argument", () => {
    const name = "Clint";
    const emp = new employee(name);
    expect(emp.name).toBe(name);
});

test("Set ID via constructor argument", () => {
    const testValue = 100;
    const emp = new employee("Clint", testValue);
    expect(emp.id).toBe(testValue);
});

test("Set Email via constructor argument", () => {
    const testValue = "test@valormm.com";
    const emp = new employee("Clint", 1, testValue);
    expect(emp.email).toBe(testValue);
});

test("Get name via getName()", () => {
    const testValue = "Clint";
    const emp = new employee(testValue);
    expect(emp.getName()).toBe(testValue);
});

test("Get ID via getId()", () => {
    const testValue = 61;
    const emp = new employee("Clint", testValue);
    expect(emp.getId()).toBe(testValue);
});

test("Get Email via getEmail()", () => {
    const testValue = "test@valormm.com";
    const emp = new employee("Clint", 1, testValue);
    expect(emp.getEmail()).toBe(testValue);
});

test("getRole() functions correctly", () => {
    const testValue = "Employee";
    const emp = new employee("Clint", 1, "test@valormm.com");
    expect(emp.getRole()).toBe(testValue);
});