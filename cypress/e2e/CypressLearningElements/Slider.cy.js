///<reference types="cypress"/>
"use strict";

describe('Drag and Drop',function(){

it('Drag and Drop Case 1', ()=>{

    cy.visit('https://jqueryui.com/slider/');

    cy.wait(3000);

    cy.get('.demo-frame').then(($iframe)=>{

        const srcObj = $iframe.contents().find('#slider > span');

        for(let i=1; i<=20; i++){
        cy.wrap(srcObj).invoke('attr','style','left: '+i+'%;');
        cy.wait(1000)}

        for(let i=20; i>=1; i--){
            cy.wrap(srcObj).invoke('attr','style','left: '+i+'%;');
            cy.wait(1000)}

    })

    cy.wait(2000);
})
})