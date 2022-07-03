///<reference types = "cypress"/>
"Use strict";

describe('Check box sceanrios',function(){
    it('Checkbox1', function(){
        //Open url
        cy.visit('https://accounts.google.com/signup');
        // Checking that checkbox is checked or not
        cy.get('[type="checkbox"]').check().should('be.checked');
        cy.get('[type="checkbox"]').check().should('be.checked');

        cy.get('[type="checkbox"]').uncheck().should('not.be.checked');
        cy.get('[type="checkbox"]').uncheck().should('not.be.checked');

        cy.get('#selectioni1').should('have.text','Show password');

        cy.wait(2000);
    })
})

describe('Check box sceanrios',function(){
    it('Checkbox2', function(){
        //Open url
        cy.visit('https://designsystem.digital.gov/components/checkbox/');
        cy.wait(2000);
        cy.get('input[type="checkbox"]').check('frederick-douglass',{force:true}).should('be.checked');
        cy.wait(2000);
        cy.get('input[type="checkbox"]').check('booker-t-washington',{force:true}).should('be.checked');  
        cy.wait(2000);
        cy.get('input[type="checkbox"]').uncheck(['frederick-douglass','booker-t-washington'],{force:true}).should('not.be.checked');
    })
})

describe('Check box sceanrios',function(){
it('Checkbox3', function(){
    //Open url
    cy.visit('https://jqueryui.com/checkboxradio/');
    cy.wait(2000)
    // How to work with iframe
    cy.get('.demo-frame')
   .then(($iframe) => {
        const $body = $iframe.contents().find('body');
        // Click the check box inside in the frame with Span tag
            cy.wrap($body)
                .find('input[type="checkbox"]')
                .check({force:true}).should('be.checked');
                cy.wait(2000)
            cy.wrap($body)
                .find('input[type="checkbox"]')
                .uncheck({force:true}).should('not.be.checked');
        });
})
})
