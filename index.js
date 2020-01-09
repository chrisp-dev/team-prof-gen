const Manager = require('./lib/manager');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');

const continuityQuestion = {
    type: 'list',
    message: 'Anymore employees to add?',
    choices: ['Engineer', 'Intern', 'No'],
    name: `moreEmp`
}

// contains team info
const answers = [];

// recursive function to gather team info
async function ask(quests) {
    // Confirm: add more employees?
    let result = await inquirer.prompt(quests).then(response => {
        answers.push(response);
        return response;
    });

    switch (result.moreEmp) {
        case 'Engineer':
            return ask(Engineer.getQuestions());

        case 'Intern':
            return ask(Intern.getQuestions());

        case 'No':
            return answers;

        default:
            return ask(continuityQuestion);
    }

}

function main() {
    // code goes here
    ask(Manager.getQuestions());
}

// main();
const path = require('path');
const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);

async function ru() {
    let el = await readFileAsync(path.join(__dirname, "views", "engineer.html"), 'utf-8');

    // fake input name
    const member = { name: "Christopher Paradeise", role: "Engineer", email: "cparadise@gmail.com", github: "chrisp-dev" };
    el = el.replace('{name}', member.name)
        .replace('{role}', member.role)
        .replace('{github}', member.github)
        .replace('{email}', member.email);

    console.log(el);
}

ru();