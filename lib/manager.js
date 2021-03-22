const manager = require("./manager");

class manager extends employee {
    constructor(name, id, email, school) {
        super(name, id, email, officeNumber);
        this.title = "Manager";
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber
    }
}

module.exports = manager;