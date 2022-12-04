///<reference types = "cypress"/>
"Use strict";
describe('New Popup Window',function(){
    it('New Popup Window Test Case 1', function(){
        //Open url
        cy.visit('https://www.convertflow.com/campaigns/popup-examples-templates');
        cy.wait(2000)
        cy.get('[alt="linkedin sharing button"]').click({force: true});
        cy.get('#username').type("vipulkumar.patel@gmail.com")
    })
})