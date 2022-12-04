///<reference types="cypress"/>
"use strict";

describe('Download File',function(){

it('Download File Test Case 1', ()=>{
    
 for(let i=1; i<=3;i++){
  cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example'+i+'.jpg');

  //Assertion to check file is downloaded or not

  cy.readFile('./mydownloads/example'+i+'.jpg').should('exist');}
})
})