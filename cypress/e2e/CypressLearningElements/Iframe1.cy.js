///<reference types = "cypress"/>
"Use strict";
describe('iFrame sceanrios 1',function(){
    it('iFrame 1', function(){
        //Open url
        cy.visit('https://jqueryui.com/selectmenu/');
        cy.wait(2000)
        // How to work with iframe
        cy.get('.demo-frame').then(($iframe) => {
            const element = $iframe.contents().find('#speed-button');
            cy.wrap(element).click();
            cy.get('.demo-frame').then(($iframe) => {
                const element = $iframe.contents().find('#ui-id-5');
                cy.wrap(element).click();
                cy.wait(2000);
                });
            });
    })
})