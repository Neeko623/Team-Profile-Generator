const Employee = require("/Users/neekotang/Bootcamp/Team-Profile-Generator/lib/Employee.js");

class Engineer extends Employee {
    constructor(name,id,email,github) {
        const role = 'Engineer';
        super(name,id,email,role);
        this.github = github;
    }
    getRole() {
        return this.role;
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;