const Manager = require('../lib/manager');

describe("Manager class", () => {
    it("should create a new object", () => {
        const e = new Manager();
        expect(typeof e).toBe("object");
    });
});