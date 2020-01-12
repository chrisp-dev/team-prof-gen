const Employee = require('../lib/employee');
describe("Employee class", () => {
    beforeEach(() => {
        Employee.id = 1;
    });

    it("should have parameter id", () => {
        const id = 1;
        const e = new Employee("Name", "email@email.com");
        expect(e.getId()).toBe(id);
    });

    it("should have autoincrementing id", () => {
        const e1 = new Employee("Dick", "email@email.com");
        expect(e1.getId()).toBe(1);
        const e2 = new Employee("Harry", "email@email.com");
        expect(e2.getId()).toBe(2);
    });

    it("should have parameter name", () => {
        const name = "Christopher";
        const e = new Employee(name, "email@email.com");
        expect(e.getName()).toBe(name);
    });

    it("should have parameter email", () => {
        const email = "contact@email.com";
        const e = new Employee("Name", email);
        expect(e.getEmail()).toBe(email);
    });

    it("should have parameter title", () => {
        const e = new Employee("Carl Sagan", "cosmoscarl@gmail.com");
        expect(e.getRole()).toBe("Employee");
    });

});