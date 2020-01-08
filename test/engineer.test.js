const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

describe("Engineer class", () => {
    it("should return new object", () => {
        const e = new Engineer();
        expect(typeof e).toBe("object");
    });
});