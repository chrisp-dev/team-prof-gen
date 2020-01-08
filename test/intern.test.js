const Intern = require('../lib/intern');

describe("Intern class", () => {
    it("should create a new object", () => {
        const e = new Intern();
        expect(typeof e).toBe("object");
    });
});