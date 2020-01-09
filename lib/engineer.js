const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, email, github) {
        super(name, email, Engineer.getRole());
        this.github = github;
    }

    static getRole() {
        return "Engineer";
    }

    static getQuestions() {
        return Engineer.engineerQuestions;
    }
}

Engineer.engineerQuestions = [
    {
        type: 'input',
        message: 'What is your github username?',
        name: `github`
    }
];

module.exports = Engineer;