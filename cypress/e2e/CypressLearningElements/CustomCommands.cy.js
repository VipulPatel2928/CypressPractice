///<reference types = "cypress"/>
"Use strict";
describe('Use of Custom Commands',function(){
    it('Custom Commands Test Case 1', function(){

        cy.personalinfo();
        cy.addition(15,25);
        cy.openpage('www.techivp.com')
        cy.waitforsecs(2)
       
    })
})