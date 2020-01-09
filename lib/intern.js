const Employee = require('./employee');


class Intern extends Employee {
    constructor(name, email, school) {
        super(name, email, "Intern");
        this.school = school;
        this.id = Intern.id;
        Intern.id++;
    }

    static getQuestions() {
        return Intern.internQuestions;
    }
}

Intern.id = 1;

Intern.internQuestions = [
    {
        type: 'input',
        message: 'Intern name?',
        name: 'int_name'
    },
    {
        type: 'input',
        message: 'Intern email?',
        name: 'int_email'
    },
    {
        type: 'input',
        message: 'What school are they attending?',
        name: `school`
    }
];

module.exports = Intern;