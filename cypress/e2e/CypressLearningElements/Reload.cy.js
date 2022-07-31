///<reference types="cypress"/>
"use strict";

describe('BACK FORWARD',function(){

it('BACK FORWARD Case 1', ()=>{

    cy.visit('https://www.jiomart.com/');
    cy.wait(5000);
    cy.reload();
    cy.wait(5000);
})
})