///<reference types ="cypress"/>

describe('jio Mart Page', function () {

    // Test case
    it('jio Mart page', () => {
        // test step for URL launching
        cy.visit("https://www.jiomart.com/");
        
        cy.xpath("//a[text()=' Sign in / Sign up ']").click()

        cy.wait(3000)
    });
})