///<reference types ="cypress"/>
"use strict";

const log = cy.log

describe('Verify Next Prev', function () {

    it('Verify Next Prev', () => {
        //Open URL
        cy.visit('https://testautomationpractice.blogspot.com/');

       cy.get('#age').prev().then((label)=>{
        log(label.text())
       })

       cy.get('[for="age"]').next().then((textfield)=>{
        log('Before Entering the value :'+textfield.val())
        cy.wrap(textfield).type('40').wait(2000)
       })

       cy.get('[for="age"]').next().then((textfield)=>{
        log('After Entering the value :'+textfield.val())
       })

    })//end of it

})//end of describe 