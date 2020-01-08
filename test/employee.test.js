const Employee = require('../lib/employee');

describe("Employee class", () => {
    it("should create a new object", () => {
        const e = new Employee();
        expect(typeof e).toBe("object");
    });

    it("should have parameter id", () => {
        const id = 1;
        const e = new Employee("Name", id);
        expect(e.id).toBe(id);
    });

    it("should have parameter name", () => {
        const name = "Christopher";
        const e = new Employee(name, 2);
        expect(e.name).toBe(name);
    });

    it("should have parameter email", () => {
        const email = "contact@email.com";
        const e = new Employee("Name", 3, email);
        expect(e.email).toBe(email);
    });


});