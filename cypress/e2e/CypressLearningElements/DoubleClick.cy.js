///<reference types="cypress"/>
"use strict";

describe('Double Click',function(){

it('Double Click Test Case 1', ()=>{
     // Below code is used to catch exception 
     Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

      cy.on('window:alert',(alertMessage)=>{

        expect(alertMessage).to.be.equal('You double clicked me!!!, You got to be kidding me');

    })
    cy.visit('https://chercher.tech/practice/popups');

    cy.get('input[id="double-click"]').dblclick();
})
})