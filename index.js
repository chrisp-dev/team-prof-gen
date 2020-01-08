const Manager = require('./lib/manager');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');

const main = () => {
    // code goes here
    const questions = [
        {
            type: 'input',
            message: 'bladebahblah',
            name: 'bb'
        }
    ];

    inquirer.prompt(questions).then(function (answers) {
        console.log(answers);
        // after we have answers, we can do things ya?
    });
}

main();