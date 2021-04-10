const manager = require("../lib/manager");

test("can set officeNumber via constructor", () => {
    const testValue = "1";

    const a = new manager("Nick", 1, "example@test.com", testValue);
    expect(a.officeNumber).toBe(testValue);
});


test("getofficeNumber should return \"officeNumber\"", () => {
    const testValue = "2";
    const a = new manager("Nick", 1, "example@test.com", testValue);
    expect(a.getOfficeNumber()).toBe(testValue);
});


test("getRole should return \"manager\"", () => {
    const testValue = "manager";
    const a = new manager("Nick", 1, "example@test.com", testValue);
    expect(a.getRole()).toBe(testValue);
});