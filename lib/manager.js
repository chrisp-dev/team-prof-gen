const Employee = require('./employee');
const { path, readFileAsync } = require('./util');

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

    async render() {
        let el = await readFileAsync(path.join(__dirname, "../views/manager.html"), 'utf-8');

        // fake input name
        const member = { name: "Sam Champion", role: "Manager", email: "cparadise@gmail.com", office: 22 };
        el = el.replace('{name}', this.name || member.name)
            .replace('{role}', Manager.getRole() || member.role)
            .replace('{office}', this.office || member.office)
            .replace('{email}', this.email || member.email);

        // console.log(el);
        return el;
    }
}

Manager.managerQuestions = [
    {
        type: 'input',
        message: 'Let us form your team. Who is the manager?',
        name: 'manager_name'
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'manager_email'
    },
    {
        type: 'input',
        message: "Office number?",
        name: "manager_office"
    }
];
module.exports = Manager;