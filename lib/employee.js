class Employee {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.id = Employee.id;
        this.role = this.getRole();
        Employee.id++;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

Employee.id = 1;

module.exports = Employee;