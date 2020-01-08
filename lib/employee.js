class Employee {
    constructor(name, email, title) {
        this.name = name;
        this.email = email;
        this.title = title;
        this.id = Employee.id;
        Employee.id++;
    }
}

Employee.id = 1;

module.exports = Employee;