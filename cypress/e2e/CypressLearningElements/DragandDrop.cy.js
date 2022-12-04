///<reference types="cypress"/>
"use strict";

describe('Drag and Drop',function(){

it('Drag and Drop Case 1', ()=>{

    cy.visit('https://jqueryui.com/droppable/');

    cy.get('.demo-frame').then(($iframe)=>{

        const srcObj = $iframe.contents().find('#draggable');
        const dstObj = $iframe.contents().find('#droppable');
        cy.wait(2000);
        cy.wrap(srcObj).drag(dstObj,{force: true});

    })

    cy.wait(2000);
})
})