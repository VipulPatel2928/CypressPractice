///<reference types ="cypress"/>
"use strict";

const log = cy.log

describe('Verify Element Text, Value and other Property', function(){

it('Verify Element Text, Value and other Property', ()=>{
//Open URL
cy.visit('https://testautomationpractice.blogspot.com/');

cy.get('#Wikipedia1>h2').then((label)=>{

    log(label.text())
    log("log is easy function to use instead of cy.log")
})

cy.get('[onclick="myFunction()"]').then((buttonlabel)=>{
    log(buttonlabel.text())
})

cy.get('#field1').then((textvalue)=>{
    log(textvalue.val())

    log('Text Field',textvalue.text())
})

})//end of it

})//end of describe 