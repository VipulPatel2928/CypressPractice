///<reference types="cypress"/>
"use strict";

describe('File Upload', function () {

    it('File Upload Case 1', () => {

        cy.visit('https://www.monsterindia.com/seeker/registration');
        const fileName = "Test.txt"
        cy.get('#file-upload').attachFile(fileName);
        cy.get('p[class^="file-return ellips"]').should('contain.text','Test.txt')
        cy.contains('Remove').should('be.visible');
        cy.wait(2000);
    })
})