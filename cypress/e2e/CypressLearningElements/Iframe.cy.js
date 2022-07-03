///<reference types = "cypress"/>
"Use strict";
describe('iFrame sceanrios 1',function(){
    it('iFrame 1', function(){
        //Open url
        cy.visit('https://jqueryui.com/checkboxradio/');
        cy.wait(2000)
        // How to work with iframe
        cy.get('.demo-frame')
       .then(($iframe) => {
            const $body = $iframe.contents().find('body');
            // Click the check box inside in the frame with Span tag
                cy.wrap($body)
                    .find('[for="checkbox-1"] span:nth-child(1)')
                    .click();
                    
                cy.wrap($body)
                .find('[for="checkbox-1"]')
                .should('have.text',' 2 Star');
            cy.wait(2000)
             // Click the check box inside in the frame with input tag and type is Checkbox
                cy.wrap($body)
                    .find('#checkbox-2')
                    .check({force:true});
                cy.wrap($body)
                .find('[for="checkbox-2"]')
                .should('have.text',' 3 Star');
            cy.wait(2000)
            // Click the radio button inside in the frame with Span tag
            cy.wrap($body)
            .find('[for="radio-1"] span:nth-child(1)')
            .click();
            cy.wait(2000)
             // Click the radio inside in the frame with input tag and type is Checkbox
             cy.wrap($body)
             .find('#radio-2')
             .check({force:true});
             cy.wait(2000)
             
            });
    })
})