///<reference types ="cypress"/>
"use strict";
describe('Use of Text Field and Button', function () {
   
    it("Text field and button use in the script", () => {
        var messageOnPage;
        //Open url in the browser
        cy.visit('https://parabank.parasoft.com/parabank/admin.htm');
        //Static wait for 2 seconds
        cy.wait(2000);
        //Enter Username and Password into login fields.
        //Enter the Username and Also Verified the Entered Username
        cy.get('.input[name="username"]').type("Temporary Username").should("have.value", "Temporary Username");
        //Enter the Password and Also Verified the Entered Password
        cy.get('.input[name="password"]').type("Temporary Password").should("have.value", "Temporary Password");
        //Click Login Button
        cy.get('[value="Log In"]').click();

        cy.get('[value="Log In"]').invoke('text').then(($text) => {
            cy.log($text);})
        //Static wait for 1 seconds
        cy.wait(10000);
        // Assertion, Validating the display text is "Error" after incorrect Username and Password
        cy.get('.title').should("contain.text", "Error!");
        // Here in this we have used the technics to Read the text value of the element and can store in the variable 
        cy.get('.error').invoke('text').then(($text) => {
            cy.log($text);
            messageOnPage=$text;
            cy.log(messageOnPage);
            if($text=='The username and password could not be verified.'){
                cy.log("The username and password could not be verified., This text display on the page.");
            }
            expect(messageOnPage).to.equal('The username and password could not be verified.');
        })
        cy.log(messageOnPage);
    })
})
