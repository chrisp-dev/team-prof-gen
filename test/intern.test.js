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
        expect(e.getSchool()).toBe(school);
    });

    it("should have autoincrementing id", () => {
        const e1 = new Intern("Ingred", "ingsie@gmail.com", "UW");
        const e2 = new Intern("Ragnar", "kingrag@geocites.com", "UW");
        expect(e1.getId()).toBe(1);
        expect(e2.getId()).toBe(2);
    });

    it("should have specific school id in questions array", () => {
        expect(Intern.getQuestions()[2].name).toBe("intern_school");
    });
});