///<reference types="cypress"/>
"use strict";

describe('Right Click',function(){

it('Right Click Case 1', ()=>{

    cy.visit('https://deluxe-menu.com/popup-mode-sample.html');

    cy.wait(3000);

    cy.get('.contentTd>p>img').eq(1).rightclick();

    cy.wait(2000);

    cy.contains('Purchase').click({force: true});

    cy.wait(2000);
})
})