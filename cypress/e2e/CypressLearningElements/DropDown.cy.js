///<reference types = "cypress"/>
"Use strict";

describe('Drop Down',function(){
    it('DropDown1', function(){
        //Open url
        cy.visit('https://www.monsterindia.com/seeker/registration');
        //Select the county Code
        cy.get('.countryCodes:nth-child(2)').select('1242',{force:true}).should('have.value','1242');
        cy.wait(1000);
        cy.get('.countryCodes:nth-child(2)').select('91',{force:true}).should('have.value','91');
        cy.wait(1000);
       // cy.get('#industryInput').type('Customer Service',{force:true},'{enter}');

        cy.get('#industryInput').type('E-Learning',{force:true});
        cy.get('.full.modal-ref-class').find('span').contains('E-Learning').click();
        cy.wait(1000);

        cy.get('#industryInput').type('Education',{force:true});
        cy.get('.full.modal-ref-class').find('span').contains('Education').click();
        cy.wait(1000);

        cy.get(' input[placeholder="Experience in years"]').type('14 Years',{force:true});
        cy.get('.full.modal-ref-class').find('span').contains('4 Years').click();
       
        //cy.get('.full.modal-ref-class').click().contains('Customer Service');
    })

    it('DropDown2', function(){
        //Open url
        cy.visit('http://en-gb.facebook.com/');
        cy.get('[data-testid="open-registration-form-button"]').click().should('have.text','Create New Account');

        cy.get('#month').select('10').should('have.value','10');

        cy.get('#year').select('2000').should('have.value','2000');
       
       
    })
})

