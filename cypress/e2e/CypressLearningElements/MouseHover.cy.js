///<reference types = "cypress"/>
"Use strict";

describe('Mouse Hover Suite', function () {
    it('Mouse Hover Test Case 1', function () {
        //Open url
        cy.visit('https://www.jiomart.com/');

        cy.contains("Groceries").realHover('mouse');

        cy.wait(3000);

        cy.contains("Pets").click({ force: true });

    })
})