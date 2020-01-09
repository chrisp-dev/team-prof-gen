const Employee = require('./employee');
const { readFileAsync, path } = require('./util');

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

    async render() {
        let el = await readFileAsync(path.join(__dirname, "../views/engineer.html"), 'utf-8');

        // fake input name
        const member = { name: "Christopher Paradeise", role: "Engineer", email: "cparadise@gmail.com", github: "chrisp-dev" };
        el = el.replace('{name}', this.name || member.name)
            .replace('{role}', Engineer.getRole() || member.role)
            .replace('{github}', this.github || member.github)
            .replace('{email}', this.email || member.email);

        // console.log(el);
        return el;
    }
}

Engineer.engineerQuestions = [
    {
        type: 'input',
        message: 'Employee name?',
        name: `emp_name`
    },
    {
        type: 'input',
        message: 'Employee email?',
        name: `emp_email`
    },
    {
        type: 'input',
        message: 'Employee Github username?',
        name: `emp_github`
    }
];

module.exports = Engineer;