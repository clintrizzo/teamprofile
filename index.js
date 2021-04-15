const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const html = require("./src/htmlTemp");


let teamArray = [];
let teamString = "";

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);
async function team() {
    try {
        await prompt()

        for (let i = 0; i < teamArray.length; i++) {
            teamString = teamString + html.generateCard(teamArray[i]);
        }

        let finalHtml = html.generateHTML(teamString)

        console.clear();
        console.log("Generating index.html file....");

        console.clear();
        console.log("index.html file created successfully");

    } catch (err) {
        return console.log(err);
    }
}

async function prompt() {
    let responseDone = "";

    do {
        try {
            console.log("---------------------------------------------");
            let response = await inquirer.prompt([{
                    type: "input",
                    name: "name",
                    message: "What is the employee's name?: ",
                    validate: function validateName(name) {
                        return name !== '';
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter the employee's ID: ",
                    validate: function validateName(name) {
                        return name !== '';
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter the employee's email address: ",
                    validate: function validateName(name) {
                        return name !== '';
                    }
                },
                {
                    type: "list",
                    name: "role",
                    message: "What what is the employee's role:",
                    choices: [
                        "Engineer",
                        "Intern",
                        "Manager"
                    ]
                }
            ]);

            let response2 = ""

            if (response.role === "Engineer") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "What is the employee's github username?:",
                    validate: function validateName(name) {
                        return name !== '';
                    }
                }, ]);
                const engineer = new engineer(response.name, response.id, response.email, response2.x);
                teamArray.push(engineer);

            } else if (response.role === "Intern") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "What school is the employee attending?:",
                    validate: function validateName(name) {
                        return name !== '';
                    }
                }, ]);
                const intern = new intern(response.name, response.id, response.email, response2.x);
                teamArray.push(intern);

            } else if (response.role === "Manager") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "What is the employee's office number?:",
                    validate: function validateName(name) {
                        return name !== '';
                    }
                }, ]);
                const manager = new manager(response.name, response.id, response.email, response2.x);
                teamArray.push(manager);
            }

        } catch (err) {
            return console.log(err);
        }

        responseDone = await inquirer.prompt([{
            type: "list",
            name: "finish",
            message: "Do you want to continue?: ",
            choices: [
                "Yes",
                "No"
            ]
        }, ]);

    } while (responseDone.finish === "Yes");
}
team();