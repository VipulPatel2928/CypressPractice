///<reference types ="cypress"/>
"use strict";

const log = cy.log

describe('Verify Element Attributes', function(){

it('Verify Element Attributes', ()=>{
//Open URL
cy.visit('https://testautomationpractice.blogspot.com/');

cy.get('#field1').invoke('attr','type').should('contain','text')

cy.get('#field1').invoke('attr','id').should('contain','field1')

cy.get('#field1').invoke('attr','value').should('contain','Hello World!')


cy.get('#field1').invoke('attr','type').should('contain','text').then((type)=>{
    log(type)
})

cy.get('#field1').invoke('attr','id').should('contain','field1').then((id)=>{
    log(id)
})

cy.get('#field1').invoke('attr','value').should('contain','Hello World!').then((value)=>{
    log(value)
})

})//end of it

})//end of describe 