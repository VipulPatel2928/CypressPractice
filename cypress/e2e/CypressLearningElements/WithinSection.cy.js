///<reference types ="cypress"/>
"use strict";

const log = cy.log

describe('Verify With in Section', function () {

    it('With in Section', () => {
        //Open URL
        cy.visit('https://testautomationpractice.blogspot.com/');

        cy.get('#HTML10').within((section) => {

            cy.get('input').its('length').then((length) => {
                log('Number of Elements', length)
            })
            cy.get('input').first().type('Vipulkumar')
            cy.get('input').last().type('Patel')
            cy.wait(5000)
            cy.get('input').first().clear().type('Cypress Automation')
            cy.get('input').last().clear().type('By VPTechie')
        })

    })//end of it

})//end of describe 