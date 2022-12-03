///<reference types = "cypress"/>
"Use strict";

describe('Check box sceanrios',function(){
    it('Checkbox1', function(){
        //Open url
        cy.visit('http://www.tizag.com/htmlT/htmlcheckboxes.php');
        cy.get('input[type="checkbox"]').its('length').then((length)=>{
            cy.log('Length :'+length)
        })
       
        cy.get('input[type="checkbox"]').check().should('be.checked');

        cy.wait(2000);

        cy.get('input[type="checkbox"]').uncheck().should('not.be.checked');

        cy.wait(2000);

        // Now let check the specific checkboxes

        cy.get('input[type="checkbox"]').check(['soccer','football']).should('be.checked');

        cy.wait(2000);

        // Now let uncheck the specific checkboxes

        cy.get('input[type="checkbox"]').uncheck(['soccer','football']).should('not.be.checked');

        // work with within the section
        cy.get('.display').eq(0).within((section)=>{

            cy.get('input[type="checkbox"]').check(['soccer','football']).should('be.checked');

            cy.wait(2000);
        })
    })
})

