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
        expect(Manager.getQuestions().length).toBeGreaterThan(0);
    });

    it("should have specific office id in questions array", () => {
        expect(Manager.getQuestions()[2].name).toBe("manager_office");
    });
});