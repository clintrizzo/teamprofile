const Engineer = require("../lib/engineer");

test("Set GitHub Account via constructor argument", () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("Cameron", 1, "test@valormm.com", testValue);
    expect(emp.github).toBe(testValue);
});

test("getRole() functions correctly", () => {
    const testValue = "engineer";
    const emp = new Engineer("Cameron", 1, "test@valormm.com", "GitHubUser");
    expect(emp.getRole()).toBe(testValue);
});

test("Get GitHub UN via getGitHub()", () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("Cameron", 1, "test@valormm.com", testValue);
    expect(emp.getGitHub()).toBe(testValue);
});