class Employee {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.id = Employee.id;
        Employee.id++;
    }
}

Employee.id = 1;

module.exports = Employee;