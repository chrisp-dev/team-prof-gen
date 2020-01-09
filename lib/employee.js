class Employee {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.id = Employee.id;
        this.title = this.getRole();
        Employee.id++;
    }

    getRole() {
        return "Employee";
    }
}

Employee.id = 1;

module.exports = Employee;