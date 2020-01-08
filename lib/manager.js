const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, email, title, officeNumber) {
        super(name, email, title);
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;