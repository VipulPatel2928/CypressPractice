///<reference types = "cypress"/>
"Use strict";
describe('Use of Custom Commands',function(){
    // Use Global Configuration for Test Retries
    it('Custom Commands Test Case 1', function(){

        cy.openpage('www.techivp.com')
        cy.waitforsecs(2)
        cy.url().should('eq','https://www.techivp1.com/')
       
    })

    // Use Individual Test Configuration for Test Retries
    it('Custom Commands Test Case 2',{
        retries: {
          runMode: 4,
          openMode: 4,
        },
      },
   function(){

        cy.openpage('www.techivp.com')
        cy.waitforsecs(2)
        cy.url().should('eq','https://www.techivp1.com/')
       
    })
})

describe('Use of Custom Commands',{
    retries: {
      runMode: 1,
      openMode: 1,
    }
  },function(){
    // Use Suite Configuration for Test Retries
    it('Custom Commands Test Case 3', function(){

        cy.openpage('www.techivp.com')
        cy.waitforsecs(2)
        cy.url().should('eq','https://www.techivp1.com/')
       
    })
    it('Custom Commands Test Case 4', function(){

        cy.openpage('www.techivp.com')
        cy.waitforsecs(2)
        cy.url().should('eq','https://www.techivp1.com/')
       
    })
})