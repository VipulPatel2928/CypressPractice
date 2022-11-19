///<reference types ="cypress"/>
"use strict";

const log = cy.log

describe('Verify Element Attributes', function(){

it('Verify Element Attributes', ()=>{
//Open URL
cy.visit('https://testautomationpractice.blogspot.com/');

cy.get('[class=title]').its('length').then((length)=>{
    log('Number of Elements',length)
   
    for(var i = 0; i<Number.parseInt(length); i++){
    cy.get('[class=title]').eq(i).then((textvalue)=>{

        log(textvalue.text())
    
        if(textvalue.text()=='Text Labels'){
            log('Match')
        }
    
    })}
})

cy.get('[name="BookTable"]').find('tr').its('length').then((length)=>{
    log('Rows in tables',length)
})

cy.get('[name="BookTable"]').find('th').its('length').then((length)=>{
    log('Columns in tables',length)
})

cy.get('[class="widget HTML"]').find('input').its('length').then((length)=>{
    log('Total input tags',length)
})


cy.get('[class="widget HTML"]').find('input').then((inputtag)=>{
    cy.wrap(inputtag).then((entervalue)=>{
        cy.wrap(entervalue).eq(0).type("Hello1")
        cy.wrap(entervalue).eq(1).type("Hello2")
        cy.wrap(entervalue).eq(2).type("Hello3")
        cy.wrap(entervalue).eq(3).type("Hello4")
    })
})


cy.get('[class="widget HTML"]').find('input').its('length').then((length)=>{
    log('Total input tags Length',length)

    
    cy.get('[class="widget HTML"]').find('input').then((inputtag)=>{
        cy.wrap(inputtag).then((entervalue)=>{
            for(var i = 0; i<Number.parseInt(length); i++){
            cy.wrap(entervalue).eq(i).invoke('attr','id').then((tempid)=>{
                log('tempid',tempid)
                if(tempid=='field2'){
                   log('Id is field2')
                }
            })
           }
        })
    })
    

})

})//end of it

})//end of describe 