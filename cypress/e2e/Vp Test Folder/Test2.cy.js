///<reference types ="cypress"/>

// test suite name
describe('Test Cases Run Practice', function () {

    // Test case
    it('Test1', () => {
        // test step for URL launching
        cy.log("This test case should Run");
        cy.visit("https://www.google.com");
    });

     // Test case
     it('Test2', () => {
        cy.log("This test case is skipped");
        // test step for URL launching
        cy.visit("https://www.jiomart.com");
    });

    // Test case
    it('Test3', () => {
        cy.log("This test case should Run");
        // test step for URL launching
        cy.visit("https://www.amazon.com");
    });

    // Test case
    it('Test4', () => {
        cy.log("This test case is skipped");
        // test step for URL launching
        cy.visit("https://www.flipkart.com/");
    });
});