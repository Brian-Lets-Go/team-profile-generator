const fs = require('fs'); 
const inquirer = require('inquirer');

// libraries
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// render HTML
const renderHTML = require('./src/renderHTML.js');

// team profiles
const teamProfiles = [];

// begin with manager prompt
const generateManager = () => {

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the manager's name", 
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log ("Please enter the manager's name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID",
            validate: idInput => {
                if  (idInput) {
                    
                    return true; 
                } else {
                    console.log ("Please enter the manager's ID")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log ("Please enter the manager's email")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'phone',
            message: "Please enter the manager's phone number",
            validate: phone => {
                if  (isNaN(phone)) {
                    console.log ("Please enter the manager's phone number (only numbers)")
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(pushManager => {

        let  { name, id, email, phone } = pushManager;
        let manager = new Manager (name, id, email, phone);

        teamProfiles.push(manager);
        console.log(manager);
        console.log(teamProfiles);

    })
}

const generateEmployee = () => {

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'type',
            message: "Please choose what type of employee to add",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter employee name", 
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log ("Please enter employee name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: idInput => {
                if  (idInput) {
                    return true; 
                } else {
                    return false;
                    console.log ("Please enter the employee's ID");
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.type === "Engineer",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.type === "Intern",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school")
                }
            }
        },
        {
            type: 'confirm',
            name: 'addMoreEmployees',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(pushEmployee => {

        let { type, name, id, email, github, school, addMoreEmployees } = pushEmployee;
        let employee;

        if (type === "Engineer") {

            employee = new Engineer (name, id, email, github);

        } else if (type === "Intern") {

            employee = new Intern (name, id, email, school);

        }

        teamProfiles.push(employee)
        console.log(employee);
        console.log(teamProfiles);

        if (addMoreEmployees) {
            return generateEmployee();
        } else {
            return teamProfiles;
        }

    })
}

generateManager()
.then(generateEmployee)
