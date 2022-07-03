
///<reference types ="cypress"/>

// test suite name
describe('Google Search Page', function () {

    // Test case
    it('Click Search button to find the Result', () => {
        // test step for URL launching
        cy.visit("https://vspqa.gyrusaim.net/auth/login");
        // How to deal with multiple elements when scc selector is not able to find uniqe element atfer all try
        cy.wait(1000);

        cy.log("Test for  Print to console");
        cy.log("Test for  Print to console");
        cy.log("Test for  Print to console");

        cy.get("[name='UserName'],[name='password']").each((item, index, list) => {
            if (index == 0) {
               //cy.wrap(item).type('usernameafterchange')
               cy.wrap(item).type('usernameafterchange').screenshot();
            }
            if (index == 1) {
                cy.wrap(item).type('password')
             }
        })
        cy.wait(1000);
        cy.screenshot("testScreenshot")
    });
});

