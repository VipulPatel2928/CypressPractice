///<reference types="cypress"/>
"use strict";

describe('BACK FORWARD',function(){

it('BACK FORWARD Case 1', ()=>{

    cy.visit('https://demo.nopcommerce.com/');
    cy.wait(1000);
    cy.contains('Register').click();
    cy.wait(1000);
    cy.reload();
    cy.wait(1000);
    cy.contains('Log in').click();
    cy.wait(1000);
    cy.get('.wishlist-label').click();
    cy.wait(1000);
    cy.get('.cart-label').click();
    cy.go('back');
    cy.wait(1000);
    cy.title().should('include','Wishlist')
    cy.go('back');
    cy.wait(1000);
    cy.title().should('include','Login')
    cy.go('back');
    cy.wait(1000);
    cy.title().should('include','Register')
    cy.go('forward');
    cy.wait(1000);
    cy.title().should('include','Login')
    cy.go('forward');
    cy.wait(1000);
    cy.title().should('include','Wishlist')
    cy.go(-1);
    cy.wait(1000);
    cy.title().should('include','Login')
    cy.go(-1);
    cy.wait(1000);
    cy.title().should('include','Register')
    cy.go(1);
    cy.wait(1000);
    cy.title().should('include','Login')
    cy.go(1);
    cy.wait(1000);
    cy.title().should('include','Wishlist')
})
})