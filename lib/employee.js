class employee {
    constructor(name, ID, email, gitgub) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.title = "employee"
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.ID;
    }
    getEmail() {
        return this.email;
    }
    getPosition() {
        return this.title;
    }
}

module.exports = employee