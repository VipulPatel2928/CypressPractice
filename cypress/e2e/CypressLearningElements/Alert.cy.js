///<reference types="cypress"/>
"use strict";

describe('Alert',function(){

it('Alert Test Case 1', ()=>{

    cy.visit('https://selenium08.blogspot.com/2019/07/alert-test.html');

    cy.on('window:alert',(alertMessage)=>{

        expect(alertMessage).to.be.equal('Hello! I am a simple alert box!');

    })

    cy.get('#simple').click({force:true});

    cy.wait(1000);
})

it('Alert Test Case 2', ()=>{

    cy.visit('https://selenium08.blogspot.com/2019/07/alert-test.html');

    cy.wait(1000);

    cy.on('window:confirm',(alertMessage)=>{

        expect(alertMessage).to.be.equal('This is a confirm alert. Do you want to accept or cancel?');
        
    })

    cy.get('#confirm').click({force:true});

    cy.get('#demo').should('have.text','You Accepted Alert!')
})

it('Alert Test Case 3', ()=>{

    cy.visit('https://selenium08.blogspot.com/2019/07/alert-test.html');

    cy.wait(1000);

    cy.on('window:confirm',(alertMessage)=>{

        expect(alertMessage).to.be.equal('This is a confirm alert. Do you want to accept or cancel?');
        return false;
        
    })

    cy.get('#confirm').click({force:true});

    cy.get('#demo').should('have.text','You Dismissed Alert!')
    
})

it('Alert Test Case 4', ()=>{

    cy.visit('https://selenium08.blogspot.com/2019/07/alert-test.html');

    cy.wait(1000);

    cy.window().then(function(promptelement){
        cy.stub(promptelement, "prompt").returns("Vipulkumar");
        cy.get('#prompt').click({force:true});
      });

    cy.get('#prompt_demo').should('have.text','Hello Vipulkumar! How are you today?')
    cy.wait(1000);
})
})