//Module Imports
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("/Users/neekotang/Bootcamp/Team-Profile-Generator/lib/Manager.js");
const Engineer = require("/Users/neekotang/Bootcamp/Team-Profile-Generator/lib/Engineer.js");
const Intern = require("/Users/neekotang/Bootcamp/Team-Profile-Generator/lib/Intern.js");
const render = require("./utils/Render.js");

// Array to hold employee's information to HTML page
const employees = [];

const questions = {

	//=======MANAGER========//
	manager: [{
			type: "input",
			name: "name",
			message: "What is the name of the team manager? \n",
			validate: (nameInput) => {
				if (nameInput) {
					return true;
				} else {
					console.log("You must enter a name.");
					return false;
				}
			},
		},
		{
			type: "number",
			name: "id",
			message: "What is the employee's ID number? \n",
			validate: (idInput) => {
				if (idInput) {
					return true;
				} else {
					console.log("You must enter a 4-digit ID number.");
					return false;
				}
			},
		},
		{
			type: "input",
			name: "email",
			message: "What is the employee's email address? \n",
			validate: (emailInput) => {
				if (emailInput.includes("@") && emailInput.includes(".com")) {
					return true;
				} else {
					console.log("\n You must enter a valid email address.");
					return false;
				}
			},
		},
		{
			type: "input",
			name: "officeNumber",
			message: "\n What is the Manager's office number?",
			validate: function (value) {
				let valid = !isNaN(parseFloat(value));
				return valid || "Please enter an office number.";
			},
			filter: Number,
		},
	],
	//=======INTERN========//
	intern: [{
			type: "input",
			name: "name",
			message: "What is the name of the employee? \n",
			validate: (nameInput) => {
				if (nameInput) {
					return true;
				} else {
					console.log("You must enter a name.");
					return false;
				}
			},
		},
		{
			type: "number",
			name: "id",
			message: "What is the employee's ID number? \n",
			validate: (idInput) => {
				if (idInput) {
					return true;
				} else {
					console.log("You must enter a 4-digit ID number.");
					return false;
				}
			},
		},
		{
			type: "input",
			name: "email",
			message: "What is the employee's email address? \n",
			validate: (emailInput) => {
				if (emailInput.includes("@") && emailInput.includes(".com")) {
					return true;
				} else {
					console.log("\n You must enter a valid email address.");
					return false;
				}
			},
		},
		{
			type: "input",
			name: "schoolName",
			message: "\n What is the name of the Intern's school?",
			validate: function (value) {
				if (value) {
					return true;
				} else {
					console.log("Please provide the name of this employee's school.");
				}
			},
		},
	],

	//=======ENGINEER========//

	engineer: [{
			type: "input",
			name: "name",
			message: "What is the name of the employee? \n",
			validate: (nameInput) => {
				if (nameInput) {
					return true;
				} else {
					console.log("You must enter a name.");
					return false;
				}
			},
		},
		{
			type: "number",
			name: "id",
			message: "What is the employee's ID number? \n",
			validate: (idInput) => {
				if (idInput) {
					return true;
				} else {
					console.log("You must enter a 4-digit ID number.");
					return false;
				}
			},
		},
		{
			type: "input",
			name: "email",
			message: "What is the employee's email address? \n",
			validate: (emailInput) => {
				if (emailInput.includes("@") && emailInput.includes(".com")) {
					return true;
				} else {
					console.log("\n You must enter a valid email address.");
					return false;
				}
			},
		},
		{
			type: "input",
			name: "github",
			message: "\n What is the Engineer's GitHub username?",
			validate: function (value) {
				if (value) {
					return true;
				} else {
					console.log("Please provide the GitHub username for this employee.");
				}
			},
		},
	],
};

// Manager Function
const newManager = () => {
	return inquirer.prompt(questions.manager).then((answers) => {
		const manager = new Manager(
			answers.name,
			answers.id,
			answers.email,
			answers.officeNumber
		);
		employees.push(manager);
		newEmployee();
	});
};

// Engineer Function
const newEngineer = () => {
	return inquirer.prompt(questions.engineer).then((answers) => {
		const engineer = new Engineer(
			answers.name,
			answers.id,
			answers.email,
			answers.github
		);
		employees.push(engineer);
		newEmployee();
	});
};

// Intern Function
const newIntern = () => {
	return inquirer.prompt(questions.intern).then((answers) => {
		const intern = new Intern(
			answers.name,
			answers.id,
			answers.email,
			answers.schoolName
		);
		employees.push(intern);
		newEmployee();
	});
};
// Add more employee Function
const newEmployee = () => {
	return inquirer
		.prompt({
			type: "list",
			name: "newEmployee",
			message: "Do you want to add another Employee?",
			choices: ["Engineer", "Intern", "Complete Team Profile"],
		})
		.then((answers) => {
			switch (answers.newEmployee) {
				case "Engineer":
					newEngineer();
					break;
				case "Intern":
					newIntern();
					break;
				case "Complete Team Profile":
					renderPage();
					break;
			}
		});
};
// Write output HTML
const renderPage = (fileName) => {
	fileName = fs.writeFile("/Users/neekotang/Bootcamp/Team-Profile-Generator/output/team.html", render(employees), (err) => {
		if (err) {
			console.log("Error: " + err);
		} else {
			console.log("\n Team Profile.html is successfully generated!");
		}
	});
};

newManager();