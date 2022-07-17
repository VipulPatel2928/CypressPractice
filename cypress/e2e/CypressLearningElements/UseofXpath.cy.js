///<reference types ="cypress"/>

describe('Google Search Page', function () {

    // Test case
    it('Click Search button to find the Result 1', () => {
        // test step for URL launching
        cy.visit("https://www.google.com/");
        
        cy.xpath('//input[@title="Search"]').type('Hello This is use of xpath');
    });
})