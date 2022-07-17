///<reference types = "cypress"/>
"Use strict";

describe('Service Food SCenario 1', function () {
    it('Service Food Test Case 1', function () {

        cy.visit('https://sfb2bvue-jmbdsowty-sfecom-ui.vercel.app/').wait(2000);
        cy.get('input[aria-label="Email"]').type('dishant.mehta@easternts.com').wait(2000);
        cy.get('input[aria-label="Password"]').type('password').wait(2000);
        cy.get('i[class="q-icon notranslate material-icons cursor-pointer"]').click();
        cy.get('button[type="submit"]').click().wait(2000);
        cy.get('input[aria-label="Search"]').type('ALLY & SID','{enter}');
        cy.wait(3000);
        cy.contains('ALLY & SID').click();
        cy.wait(3000);
        cy.contains("Categories").realHover('mouse');
        cy.wait(3000);
        cy.contains("Alcohol").click({force: true});
        cy.wait(5000);
      
    })
})