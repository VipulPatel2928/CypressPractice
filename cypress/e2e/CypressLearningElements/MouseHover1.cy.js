///<reference types = "cypress"/>
"Use strict";

describe('Mouse Hover Suite', function () {
    it('Mouse Hover Test Case 1', function () {
        //Open url
        cy.visit('https://www.jiomart.com/');

        cy.contains("Groceries").trigger('mouseover');

        cy.wait(3000);

        cy.contains("Pets").click({ force: true });

        cy.contains('Home & Kitchen').trigger('mouseover',{force: true})

        cy.wait(5000);

        cy.contains('Furniture').click({force: true});

    })
})