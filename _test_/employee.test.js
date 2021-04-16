const Employee = require("../lib/employee");

test("New Employee created", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});

test("Set Employee Name via constructor argument", () => {
    const name = "Clint";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

test("Set ID via constructor argument", () => {
    const testValue = 100;
    const emp = new Employee("Clint", testValue);
    expect(emp.id).toBe(testValue);
});

test("Set Email via constructor argument", () => {
    const testValue = "test@valormm.com";
    const emp = new Employee("Clint", 1, testValue);
    expect(emp.email).toBe(testValue);
});

test("Get name via getName()", () => {
    const testValue = "Clint";
    const emp = new Employee(testValue);
    expect(emp.getName()).toBe(testValue);
});

test("Get ID via getId()", () => {
    const testValue = 50;
    const emp = new Employee("Clint", testValue);
    expect(emp.getId()).toBe(testValue);
});

test("Get Email via getEmail()", () => {
    const testValue = "test@valormm.com";
    const emp = new Employee("Clint", 1, testValue);
    expect(emp.getEmail()).toBe(testValue);
});

test("getRole() functions correctly", () => {
    const testValue = "employee";
    const emp = new Employee("Clint", 1, "test@valormm.com");
    expect(emp.getRole()).toBe(testValue);
});