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

// Intern.id = 1;

Intern.internQuestions = [
    {
        type: 'input',
        message: 'What school did you go to?',
        name: `school`
    }
]
module.exports = Intern;