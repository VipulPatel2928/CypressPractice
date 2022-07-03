///<reference types = "cypress"/>
"Use strict";
describe('Radio sceanrios',function(){
    it('Radio1', function(){
        //Open url
        cy.visit('https://bulma.io/documentation/form/radio/');
        // Checking that checkbox is checked or not
        cy.wait(2000)
        cy.get('.control label:nth-child(2) [name="answer"]').check().should('be.checked');
        cy.wait(2000)
        cy.get('.control label:nth-child(1) [name="foobar"]').check().should('be.checked');
    })
})

describe('Radio sceanrios',function(){
    it('Radio2', function(){
        //Open url
        cy.visit('https://jqueryui.com/checkboxradio/#product-selector');
        cy.wait(2000)
        // How to work with iframe
        cy.get('.demo-frame')
       .then(($iframe) => {
            const $body = $iframe.contents().find('body');
            // Click the check box inside in the frame with Span tag
                cy.wrap($body)
                    .find('input[type="radio"]')
                    .check({force:true}).should('be.checked');
                    cy.wait(2000);
            });
    })
    })
