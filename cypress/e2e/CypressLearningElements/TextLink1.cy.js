///<reference types ="cypress"/>
"use strict";

const log = cy.log

describe('Verify Text Link', function () {

    it('Verify Text Link', () => {
        //Open URL
        cy.visit('https://www.wikipedia.org/');

        cy.get('a').its('length').then((ancherlength)=>{
          log('Total links on the Page :'+ancherlength)
        })

        cy.get('a').then((linktitle)=>{
            log('All Link names/Link Title  :'+linktitle.text())
          })

        cy.get('a').should('contain','Wikibooks')

        cy.get('a').should('contain','Creative Commons Attribution-ShareAlike License')

        cy.get('a').contains('English').click()

        cy.get('#Welcome_to_Wikipedia').should('be.visible')

        cy.wait(2000)

        cy.go("back")
       
    
    })//end of it

})//end of describe 