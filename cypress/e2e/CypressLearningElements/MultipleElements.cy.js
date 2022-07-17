
///<reference types ="cypress"/>

// test suite name
describe('Google Search Page', function () {

    // Test case
    it('Click Search button to find the Result 1', () => {
        // test step for URL launching
        cy.visit("https://www.google.com/");
        cy.get('input[name=q]').type("Surat")

        // How to deal with multiple elements when scc selector is not able to find unique element after all try

        cy.get("[value='Google Search']").each((item, index, list) => {
            if (index == 1) {
                cy.wrap(item).should('have.value','Google Search');
                cy.wrap(item).click({ force: true });
            }
        })
        cy.wait(1000);
    });


    // Test case
    it('Click Search button to find the Result 2', () => {
        // test step for URL launching
        cy.visit("https://www.google.com/");
        cy.get('input[name=q]').type("London")

        // How to deal with multiple elements when scc selector is not able to find unique element after all try

        cy.get("[value='Google Search']").eq(1).click({ force: true });
        cy.wait(1000);
    });
});

