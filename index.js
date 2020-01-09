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

main();