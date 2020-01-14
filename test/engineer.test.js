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

    it("should get role", () => {
        const e = new Engineer();
        expect(Engineer.getRole()).toBe("Engineer");
    });

    it("should get/set email", () => {
        const e = new Engineer("Iggy", "iggy@zal.ia", "iggaz22");
        expect(e.getEmail()).toBe("iggy@zal.ia");
    });

    it("should get/set github", () => {
        const e = new Engineer("Iggy", "iggy@zal.ia", "iggaz22");
        expect(e.getGithub()).toBe("iggaz22");
    });

    it('should get/set name', () => {
        const e = new Engineer("Iggy");
        expect(e.getName()).toBe("Iggy");
    });

    describe('render fn', () => {
        it('should render html with name, email, github', () => {
            const engData = { name: "Chris", email: "chris@gmail.com", github: "chrisp-dev" };
            const e = new Engineer(engData.name, engData.email, engData.github);
            expect(e.getName()).toBe(engData.name);
            expect(e.getEmail()).toBe(engData.email);
            expect(e.getGithub()).toBe(engData.github);

            const htmlOutput = '<h2>' + engData.name + '</h2>\r\n' +
                '<ul>\r\n' +
                '    <li>role: ' + Engineer.getRole() + '</li>\r\n' +
                '    <li>email: ' + engData.email + '</li>\r\n' +
                '    <li>github: ' + engData.github + '</li>\r\n' +
                '</ul>'
            e.render((err, data) => {
                expect(data).toBe(htmlOutput);
            });
        });
    });
});