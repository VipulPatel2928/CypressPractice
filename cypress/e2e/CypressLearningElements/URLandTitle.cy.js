///<reference types="cypress"/>
"use strict";

describe('Use of url and title function',function(){

it('Use of url', ()=>{

    cy.visit('https://www.jiomart.com/');

    cy.url().should('eq','https://www.jiomart.com/');

    cy.contains("Groceries").realHover('mouse');

    cy.wait(3000);

    cy.contains("Pets").click({ force: true });

    cy.url().should('eq','https://www.jiomart.com/c/groceries/pets/3346');

})

it('Use of Title', ()=>{

    cy.visit('https://www.jiomart.com/');

    cy.title().should('eq','Buy Grocery Online | Daily Needs Supermarket - JioMart');

    cy.contains("Groceries").realHover('mouse');

    cy.wait(3000);

    cy.contains("Pets").click({ force: true });

    cy.title().should('eq','Pets - JioMart');
})

})