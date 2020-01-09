const Employee = require('./employee');


class Manager extends Employee {
    constructor(name, email, officeNumber) {
        super(name, email, Manager.getRole());
        this.officeNumber = officeNumber;
    }

    static getQuestions() {
        return Manager.managerQuestions;
    }

    static getRole() {
        return "Manager";
    }
}

Manager.managerQuestions = [
    {
        type: 'input',
        message: 'Let us form your team. Who is the manager?',
        name: 'manager'
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'manageremail'
    },
    {
        type: 'input',
        message: "Office number?",
        name: "officeNumber"
    }
];
module.exports = Manager;