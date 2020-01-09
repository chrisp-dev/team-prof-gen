const Intern = require('../lib/intern');

describe("Intern class", () => {
    beforeEach(() => {
        Intern.id = 1;
    });

    it("should create a new object", () => {
        const e = new Intern();
        expect(typeof e).toBe("object");
    });

    it("should have parameter school", () => {
        const school = "UW";
        const e = new Intern("Ingred", "ingsie@email.gom", school);
        expect(e.school).toBe(school);
    });

    it("should have autoincrementing id", () => {
        const e1 = new Intern("Ingred", "ingsie@gmail.com", "UW");
        const e2 = new Intern("Ragnar", "kingrag@geocites.com", "UW");
    });

    it("should have specific school id in questions array", () => {
        const e = new Intern("Ragnar", "kingrag@gmail.com", "UW");
        expect(e.getQuestions()[0].name).toBe("school1");
    });
});