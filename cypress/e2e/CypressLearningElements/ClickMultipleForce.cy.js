///<reference types ="cypress"/>

describe('Google Page', function () {

    // Test case
    it('Use of Multiple and force for hidden and multiple elements', () => {
        // test step for URL launching
        cy.visit("https://www.google.com/");

        cy.get('[name="q"]').type('https://TechiVp.com')
        
        // Remove the comment to see the run time error
        //cy.get('[value="Google Search"]').click()

         // Remove the comment to see the run time error
        //cy.get('[value="Google Search"]').click({ multiple: true })

        cy.get('[value="Google Search"]').click({ multiple: true , force : true})

        // Above statement ' multiple: true , force : true' is used to manage hidden element 

        cy.wait(3000)
    });
})