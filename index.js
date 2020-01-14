const Manager = require('./lib/manager');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { continuityQuestion } = require('./lib');
const inquirer = require('inquirer');
const fs = require('fs');

// contains team info
const answers = [];

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

// need render function to accept array of team members with their own render fn
// which returns html to append
(() => {
    main().then(team => {
        team.forEach(member => {
            console.log(member);
            if (member.manager_name) {
                let manager = new Manager(member);

                manager.render().then(html => {

                    fs.appendFile("index.html", html, function () {

                    });
                })

            } else if (member.intern_name) {
                let intern = new Intern(member);
                fs.appendFile("index.html", intern.render(), function () {

                });
            } else if (member.engineer_name) {
                let engineer = new Engineer(member);
                fs.appendFile("index.html", engineer.render(), function () {

                });
            }
        });
    });
})();