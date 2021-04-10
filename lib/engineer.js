const employee = require('../lib/employee');

class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = role;
    }
    getGitHub() {
        return this.github;
    }
    getRole() {
        return "engineer";
    }
}

module.exports = engineer;