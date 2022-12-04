///<reference types="cypress"/>
"use strict";

describe('Page Reload',function(){

it('Page Reload Case 1', ()=>{

    cy.visit('https://www.jiomart.com/');
    cy.wait(5000);
    cy.reload();
    cy.wait(5000);
})
})