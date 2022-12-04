///<reference types="cypress"/>
"use strict";

describe('Resizable',function(){

it('Resizable Case 1', ()=>{

    cy.visit('https://jqueryui.com/resizable/');

    cy.wait(3000);

    cy.get('.demo-frame').then(($iframe)=>{

        const srcObj = $iframe.contents().find('#resizable');

        for(let i=170; i<=300; i=i+10){
        cy.wrap(srcObj).invoke('attr','style','height: '+i+'px; width: '+i+'px;');
        cy.wait(1000)}

        for(let i=300; i>=150; i=i-10){
            cy.wrap(srcObj).invoke('attr','style','height: '+i+'px; width: '+i+'px;');
            cy.wait(1000)}

    })

    cy.wait(2000);
})
})