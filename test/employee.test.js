const Employee = require('../lib/employee');
describe("Employee class", () => {
    beforeEach(() => {
        Employee.id = 1;
    });

    it("should have parameter id", () => {
        const id = 1;
        const e = new Employee("Name", "email@email.com");
        expect(e.id).toBe(id);
    });

    it("should have autoincrementing id", () => {
        const e1 = new Employee("Dick", "email@email.com");
        expect(e1.id).toBe(1);
        const e2 = new Employee("Harry", "email@email.com");
        expect(e2.id).toBe(2);
    });

    it("should have parameter name", () => {
        const name = "Christopher";
        const e = new Employee(name, "email@email.com");
        expect(e.name).toBe(name);
    });

    it("should have parameter email", () => {
        const email = "contact@email.com";
        const e = new Employee("Name", email);
        expect(e.email).toBe(email);
    });

    it("should have parameter title", () => {
        const title = "The boss";
        const e = new Employee("Carl Sagan", "cosmoscarl@gmail.com", title);
        expect(e.title).toBe(title);
    });

});