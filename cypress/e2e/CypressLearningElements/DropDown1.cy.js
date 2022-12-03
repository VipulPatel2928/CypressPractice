///<reference types = "cypress"/>
"Use strict";

describe('Drop Down',function(){
    it('DropDown1', function(){
        //Open url
        cy.visit('https://www.wikipedia.org/');
        cy.get('#searchInput').type('surat');
        cy.contains('Customs airport in Surat, India').click()
        cy.wait(2000) 
    })

    it('DropDown1', function(){
        //Open url
        cy.visit('http://en-gb.facebook.com/');
        cy.get('[data-testid="open-registration-form-button"]').click().should('have.text','Create New Account');
        cy.get('#month').select('Dec').should('contain','Dec');
        cy.get('#month').should('have.value','12');
        cy.wait(2000) 
    })
})

