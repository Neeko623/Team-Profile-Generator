const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("/Users/neekotang/Bootcamp/Team-Profile-Generator/lib/Manager.js");
const Engineer = require("/Users/neekotang/Bootcamp/Team-Profile-Generator/lib/Engineer.js");
const Intern = require("/Users/neekotang/Bootcamp/Team-Profile-Generator/lib/Intern.js");

// Array of questions for user
const generateInfo = async (inputs = []) => {
    const prompts = [
        {
            type: 'input',
            name: 'name',
            message: 'Please enter a name!(Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter a name!');
                return false;
              }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "Please Select the Employee Role",
            choices: ['Manager','Engineer','Intern']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your GitHub username!');
                return false;
              }
            }
          },
        {
            name: 'id',
            message: 'What is the ID of the employee? ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter an email address (Required)',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter an email address!');
                return false;
              }
            }
          },
          {
            type: 'confirm',
            name: 'more',
            message: 'Would you like to enter more employees?'
        }
    ]

const {more, ...answers} = await inquirer.prompt(prompts);
const newInputs = [...inputs, answers];
return more ? generateInfo(newInputs) : newInputs;
}

const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("/Users/neekotang/Bootcamp/Team-Profile-Generator/lib/Renderer.js");

const index = async () => {
    const inputs = await generateInfo();

    let employee = [];
    for (let i in inputs) {
        if (inputs[i].role==='Manager') {
            let M = new Manager(inputs[i].name, inputs[i].id, inputs[i].email, inputs[i].github)
            employee.push(M);    
        } else if (inputs[i].role==='Engineer') {
            let E = new Engineer(inputs[i].name, inputs[i].id, inputs[i].email, inputs[i].github)
            employee.push(E);    
        } else {
            let I = new Intern(inputs[i].name, inputs[i].id, inputs[i].email, inputs[i].github)
            employee.push(I);
        }
    }    

    fs.writeFile(outputPath, render(employee), err => {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      })
  };

index();