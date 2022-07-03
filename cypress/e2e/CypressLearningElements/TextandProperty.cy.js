///<reference types ="cypress"/>
"use strict";
//const { describe } = require("mocha");

describe('Verify Element Text, Value and other Property', function(){
let tempVarialbe = "Hello";
it('Verify Element Text, Value and other Property', ()=>{
//Open URL
cy.visit('https://www.jiomart.com/');
// Click on Sign In/Sign UP
cy.wait(3000);

// Here Checking the text of the button
// invoke('text') is use because we are dealing with contextText Property
cy.get('.logged a:nth-child(1)').invoke('text');

cy.get('.logged a:nth-child(1)').invoke('text').then((Contenttext)=>{
    cy.log(Contenttext);
    cy.log('inside before', tempVarialbe)
    //Assertion, Manual Logic and Test Cases wouldn't get fail because this is only logic to check.
    if(Contenttext==" Sign in / Sign up "){
        cy.log('Button title is correct');
    }
    tempVarialbe = Contenttext;
    cy.log('inside after', tempVarialbe);
    //Use expect for the assertion
    expect(Contenttext).to.be.equal(' Sign in / Sign up ');
   // return Contenttext;
})

cy.log(tempVarialbe);
// invoke('prop', 'href') is use because we are dealing with href Property
cy.get('.logged a:nth-child(1)').invoke('prop','href').then((Contenttext)=>{
    cy.log('Href: ', Contenttext);
})

// invoke('prop', 'innerText') is use because we are dealing with innerText Property
cy.get('.logged a:nth-child(1)').invoke('prop','innerText').then((Contenttext)=>{
    cy.log('innerText: ', Contenttext);
})

// invoke('prop', 'namesspaceURI') is use because we are dealing with namesspaceURI Property
cy.get('.logged a:nth-child(1)').invoke('prop','namespaceURI').then((Contenttext)=>{
    cy.log('namespaceURI: ', Contenttext);
})


// Use should and have.text to check for the Assertion
cy.get('.logged a:nth-child(1)').should('have.text',' Sign in / Sign up ').click();
cy.wait(2000);

// Enter Mobile No
cy.get('#loginfirst_mobileno').type("123456789");
// Get the value of the mobile field
// Reading the value of the mobile text field
cy.get('#loginfirst_mobileno').invoke('val').then((Valuetext)=>{
    cy.log('value of Mobile Text Field', Valuetext)
})

//Click the Arrow button
cy.get('button.btn-signpass.arrowbtn').click();
cy.get('.md-form.phinput.position-relative div').should('have.text','Please enter valid Mobile Number!');

})//end of it

})