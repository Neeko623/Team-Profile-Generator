const Employee = require("/Users/neekotang/Bootcamp/Team-Profile-Generator/lib/Employee.js");

class Manager extends Employee {
    constructor(name,id,email,github) {
        const role = 'Manager';
        super(name,id,email,role);
        this.github = github;
    }
    getRole() {
        return this.role;
    }
    getOfficeNumber() {
        return this.officeNumber;
      }
}

module.exports = Manager;