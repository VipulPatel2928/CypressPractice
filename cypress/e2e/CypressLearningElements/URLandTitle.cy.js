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


it('Use of url1', ()=>{

    cy.visit('https://www.jiomart.com/');

    cy.url().should('include','jiomart');

    cy.contains("Groceries").realHover('mouse');

    cy.wait(3000);

    cy.contains("Pets").click({ force: true });

    cy.url().should('include','groceries');

})

it('Use of Title', ()=>{

    cy.visit('https://www.jiomart.com/');

    cy.title().should('eq','Buy Grocery Online | Daily Needs Supermarket - JioMart');

    cy.contains("Groceries").realHover('mouse');

    cy.wait(3000);

    cy.contains("Pets").click({ force: true });

    cy.title().should('eq','Pets - JioMart');
})

it('Use of Title1', ()=>{

    cy.visit('https://www.jiomart.com/');

    cy.title().should('include','Buy Grocery Online');

    cy.contains("Groceries").realHover('mouse');

    cy.wait(3000);

    cy.contains("Pets").click({ force: true });

    cy.title().should('include','Pets');
})

})