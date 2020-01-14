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

    describe('render fn', () => {
        it('should render html with name, email, office', () => {
            const engData = { name: "Chris", email: "chris@gmail.com", office: "chrisp-dev" };
            const e = new Manager(engData.name, engData.email, engData.office);
            expect(e.getName()).toBe(engData.name);
            expect(e.getEmail()).toBe(engData.email);
            expect(e.getOffice()).toBe(engData.office);

            const htmlOutput = '<h2>' + engData.name + '</h2>\r\n' +
                '<ul>\r\n' +
                '    <li>role: ' + Manager.getRole() + '</li>\r\n' +
                '    <li>email: ' + engData.email + '</li>\r\n' +
                '    <li>office: ' + engData.office + '</li>\r\n' +
                '</ul>'
            e.render((err, data) => {
                expect(data).toBe(htmlOutput);
            });
        });
    });
});