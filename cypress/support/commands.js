// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('forceVisit', url => {
//     cy.window().then(win => {
//         return win.open(url, '_self'); 
//       });
// });

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-downloadfile/lib/downloadFileCommand')

Cypress.Commands.add('personalinfo', () => {

    cy.log('You have called the personal info function')
})

Cypress.Commands.add('addition', (a, b) => {

    cy.log('Adding two numbers :' + (a + b))
})


Cypress.Commands.add('openpage', (url) => {

    cy.visit(url)
})

Cypress.Commands.add('waitforsecs', (varsec) => {

    cy.wait(varsec*1000)
})