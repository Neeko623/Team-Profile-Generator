const Employee = require("/Users/neekotang/Bootcamp/Team-Profile-Generator/lib/Employee.js");

class Intern extends Employee {
    constructor(name,id,email,github) {
        const role = 'Intern';
        super(name,id,email,role);
        this.github = github;
    }
    getRole() {
        return this.role;
    }
    getSchool() {
        return this.schoolname;
      }
}
        

module.exports = Intern;