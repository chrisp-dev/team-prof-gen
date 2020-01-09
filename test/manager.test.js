const Manager = require('../lib/manager');

describe("Manager class", () => {
    beforeEach(() => {
        Manager.id = 1;
    });

    it("should create a new object", () => {
        const e = new Manager();
        expect(typeof e).toBe("object");
    });

    it("should have managerQuestions", () => {
        const e = new Manager();
        expect(e.getQuestions().length).toBeGreaterThan(0);
    });

    it("should have specific office id in questions array", () => {
        const e = new Manager("Ragnar", "kingrag@gmail.com");
        expect(e.getQuestions()[2].name).toBe("officeNumber");
    });
});