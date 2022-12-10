///<reference types = "cypress"/>
"Use strict";
describe('Web Table',function(){
    it('Web Table Row Test Case 1', function(){
        //Open url
        cy.visit('https://qavbox.github.io/demo/webtable/');
        cy.wait(2000)
        
        // Total Row, Find total rows using code
        // Include Head and Body rows
    
        cy.get('[id="table02"] tr').its('length').then((lenght)=>{
            cy.log('Total Row in table are :'+lenght)
        })

        //Total Row validation, if you know the total row then use the validation straight and no need to find numbers of rows
        cy.get('[id="table02"] tr').its('length').then((lenght)=>{
            cy.log('Total Row in table are :'+lenght)
            cy.get('[id="table02"] tr').should('have.length',lenght)
        })
    })

    it('Web Table Row Test Case 2', function(){
        //Open url
        cy.visit('https://qavbox.github.io/demo/webtable/');
        cy.wait(2000)
        
        // Total Row, Find total rows using code
        // Include Body row only
    
        cy.get('table#table02 > tbody > tr').its('length').then((lenght)=>{
            cy.log('Total Row in table are :'+lenght)
        })

        //Total Row validation, if you know the total row then use the validation straight and no need to find numbers of rows
        cy.get('table#table02 > tbody > tr').its('length').then((lenght)=>{
            cy.log('Total Row in table are :'+lenght)
            cy.get('table#table02 > tbody > tr').should('have.length',lenght)
        })
    })
    
    it('Web Table Row  Test Case 3', function(){
        //Open url
        cy.visit('https://qavbox.github.io/demo/webtable/');
        cy.wait(2000)
        // Single Row data, row index 0
        // Validating row data using array
        cy.get('table#table02 > tbody > tr').eq(0).within(()=>{
        const arry = ['Tiger Nixon','System Architect','Edinburgh','61','2011/04/25','$320,800']
        var i = 0;
           cy.get('td').each((element)=>{
            cy.log(element.text())
            expect(element.text()).eq(arry[i])
            i++;
           })
        })

    })

    it('Web Table Row Test Case 4', function(){
        //Open url
        cy.visit('https://qavbox.github.io/demo/webtable/');
        cy.wait(2000)
        // Validatiing data using cell value, here finding the data value that contains "Ashton Cox" and then validating the data
        cy.get('#cont>#table02').contains('Ashton Cox').parent().within(()=>{
            const arry = ['Ashton Cox','Junior Technical Author', 'San Francisco','66','2009/01/12','$86,000']
            var i = 0;
               cy.get('td').each((element)=>{
                cy.log(element.text())
                expect(element.text()).eq(arry[i])
                i++;
               })
        })
        
    })

    it('Web Table Row  Test Case 5', function(){
        //Open url
        cy.visit('https://qavbox.github.io/demo/webtable/');
        cy.wait(2000)
        // Single Row data, row index 0
        // Validating row data using array
        cy.get('table#table02 > tbody > tr').each((row)=>{
        cy.get(row).within(()=>{
            cy.get('td').each((element)=>{
                cy.log(element.text())
               })
        })
        })
    })

    it('Web Table Col Test Case 1', function(){
        //Open url
        cy.visit('https://qavbox.github.io/demo/webtable/');
        cy.wait(2000)
       
        //Total Columns verificaion
        cy.get('table#table02 > tbody > tr:first-child td').should('have.length',6)

        // Finding the length 
        cy.get('table#table02 > tbody > tr:first-child td').should('have.length',6).its('length').then((length)=>{

            cy.log('Total Cols in Table :'+length);
        })
        
    })

    it('Web Table Col Test Case 2', function(){
        //Open url
        cy.visit('https://qavbox.github.io/demo/webtable/');
        cy.wait(2000)
       // Column Data verification
        cy.get('table#table02 > tbody > tr').eq(0).within(()=>{
            
            cy.get('td').eq(5).should('have.text','$320,800')

            })
    })
})