const Engineer = require('../lib/engineer');

describe("Engineer class", () => {
    beforeEach(() => {
        Engineer.id = 1;
    });

    it("should return new object", () => {
        const e = new Engineer();
        expect(typeof e).toBe("object");
    });

    it("should get/set id", () => {
        const e = new Engineer();
        expect(e.getId()).toBe(1);
    });
});