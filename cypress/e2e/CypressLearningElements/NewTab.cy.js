///<reference types = "cypress"/>
"Use strict";
describe('New Tab Window',function(){
    it('New Tab Window Test Case 1', function(){
        //Open url
        cy.visit('http://en-gb.facebook.com/');
        cy.wait(2000)
        cy.get('[data-testid="open-registration-form-button"]').click();
        cy.get('#terms-link').click();

        cy.get('#email').type('test@gmail.com');
        cy.get('#pass').type('vipul');
    })
})