const intern = require("./intern");

class intern extends employee {
    constructor(name, id, email, github, school) {
        super(name, id, email, github);
        this.school = school;
        this.title = "Intern";
    }
    getSchool() {
        return this.school
    }
}

module.exports = intern;