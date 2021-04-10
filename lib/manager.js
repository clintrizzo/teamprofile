const employee = require("./employee");

class manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.title = "Manager";
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        console.log(`Role: ${this.role}`);
        return "manager";
    }
}

module.exports = manager