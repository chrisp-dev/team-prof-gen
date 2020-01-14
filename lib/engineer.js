const Employee = require('./employee');
const { readFileAsync, path } = require('./util');
const fs = require('fs');

class Engineer extends Employee {
    constructor(name, email, github) {
        super(name, email, Engineer.getRole());
        this.github = github;
        this.id = Engineer.id;
        Engineer.id++;
    }

    getGithub() {
        return this.github;
    }

    static getRole() {
        return "Engineer";
    }

    static getQuestions() {
        return Engineer.engineerQuestions;
    }

    render(cb) {
        const self = this;
        return fs.readFile(path.join(__dirname, "../views/engineer.html"), 'utf-8', function (err, data) {
            if (err) throw err;
            // fake input name
            const member = { name: "Christopher Paradeise", role: "Engineer", email: "cparadise@gmail.com", github: "chrisp-dev" };
            data = data.replace('{name}', self.name || member.name)
                .replace('{role}', Engineer.getRole() || member.role)
                .replace('{github}', self.github || member.github)
                .replace('{email}', self.email || member.email);

            // console.log(el);
            cb(null, data);
        });

    }
}

Engineer.id = 1;

Engineer.engineerQuestions = [
    {
        type: 'input',
        message: 'Engineer name?',
        name: `engineer_name`
    },
    {
        type: 'input',
        message: 'Engineer email?',
        name: `engineer_email`
    },
    {
        type: 'input',
        message: 'Engineer Github username?',
        name: `engineer_github`
    }
];

module.exports = Engineer;