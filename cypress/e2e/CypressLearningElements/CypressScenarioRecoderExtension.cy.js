///<reference types = "cypress"/>
"Use strict";
describe('test_name', function() {

    it('what_it_does', function() {
   
       //cy.viewport(1536, 746)
    
       cy.visit('http://www.tizag.com/htmlT/htmlpassword.php')
    
       //cy.get('body > .outter > tbody > tr > td:nth-child(3)').click()
    
       //cy.get('tr > .mainIn > .display:nth-child(9) > form > input:nth-child(1)').click()
    
       cy.get('tr > .mainIn > .display:nth-child(9) > form > input:nth-child(1)').type('vipulkumar')
    
       cy.get('tr > .mainIn > .display > form > #first').click()
    
       cy.get('tr > .mainIn > .display > form > #first').type('vipulkumar')
    
       cy.get('tr > .mainIn > .display > form > #last').type('Patel')
    
       cy.get('tr > .mainIn > .display > form > input:nth-child(4)').type('hello')
    
       cy.get('tr > .mainIn > #nav > .cont > a').click()
    
       cy.visit('http://www.tizag.com/htmlT/htmlreset.php')
    
    })
   
   })