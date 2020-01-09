const Employee = require('./employee');
const { path, readFileAsync } = require('./util');

class Intern extends Employee {
    constructor(name, email, school) {
        super(name, email, Intern.getRole());
        this.school = school;
        this.id = Intern.id;
        Intern.id++;
    }

    static getRole() {
        return "Intern";
    }

    static getQuestions() {
        return Intern.internQuestions;
    }

    async render() {
        let el = await readFileAsync(path.join(__dirname, "../views/intern.html"), 'utf-8');

        // fake input name
        const member = { name: "Daryl Dixon", role: "Intern", email: "cparadise@gmail.com", school: "UW" };
        el = el.replace('{name}', this.name || member.name)
            .replace('{role}', Intern.getRole() || member.role)
            .replace('{school}', this.school || member.school)
            .replace('{email}', this.email || member.email);

        // console.log(el);
        return el;
    }
}

Intern.id = 1;

Intern.internQuestions = [
    {
        type: 'input',
        message: 'Intern name?',
        name: 'intern_name'
    },
    {
        type: 'input',
        message: 'Intern email?',
        name: 'intern_email'
    },
    {
        type: 'input',
        message: 'What school are they attending?',
        name: `intern_school`
    }
];

module.exports = Intern;