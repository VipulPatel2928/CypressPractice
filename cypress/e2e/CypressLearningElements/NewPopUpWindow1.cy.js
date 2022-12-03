///<reference types = "cypress"/>
"Use strict";
describe('Window Ppoup scenarios 1',function(){
    it('Window popup 1', function(){
        //Open url
        cy.visit('https://www.convertflow.com/campaigns/popup-examples-templates');

        cy.window().then((win)=>{

            cy.stub(win,'open',()=>{
              win.location.href = 'https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Ftitle%3D6%2520Website%2520Popup%2520Examples%2520%28%252B%2520Templates%2520to%2520Launch%2520Now%29%26url%3Dhttps%253A%252F%252Fwww.convertflow.com%252Fcampaigns%252Fpopup-examples-templates';
            }).as('popup')
  
          })
        cy.wait(2000)

        cy.get('[alt="linkedin sharing button"]').click({force: true});
       
        cy.get('@popup');

        cy.get('#username').type("vipulkumar.patel").should('have.value','vipulkumar.patel');
    })
})