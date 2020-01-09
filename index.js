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

// need render function to accept array of team members with their own render fn
// which returns html to append
(() => {
    main().then(console.log);
})();
// recursive function to gather team info
async function ask(quests) {
    // Confirm: add more employees?
    let result = await inquirer.prompt(quests).then(response => {
        console.log('-----')
        if (!response.moreEmp) answers.push(response);
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
    return result;
}

async function main() {
    // code goes here
    return ask(Manager.getQuestions());
}

let en = new Engineer("Cready", "cc1", "cc2", "cc3");
// en.render().then(console.log);