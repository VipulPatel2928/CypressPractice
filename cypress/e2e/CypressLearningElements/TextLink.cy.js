///<reference types = "cypress"/>
"Use strict";

describe('Text Link',function(){
    it('TextLink1', function(){
        //Open url
        cy.visit('https://www.jiomart.com/');
        // Checking that checkbox is checked or not
        cy.get('[href="https://www.jiomart.com/customer/account/login"]:nth-child(1)').click().should('have.text',' Sign in / Sign up ');

    })
})
