///<reference types ="cypress"/>
"user strict";
var day,month,year;
var depDay,retDay, depMonth,retMonth,tempYear;

describe('Datepicket Test Cases', () => {

    it('Datepicket1', function () {

        cy.visit('https://www.southalltravel.co.uk/');

        //Used require function to get the corrent date
        const dayjs = require('dayjs');
        // Date printed with DD/MM/YYYY format
        cy.log(dayjs().format('DD/MM/YYYY'))  //Prints todays date 
        // Below statements are used to separate Day, Month and Year from the Date
        cy.log('Day:',dayjs().format('DD'));
        cy.log('Month:',dayjs().format('MM'));
        cy.log('Year:',dayjs().format('YYYY'));
        // Performed operation on string 
        cy.log('Arithmetic Operation On String:',dayjs().format('DD')+1);
        // Convert DD, Month and Year from String to int
        day = Number.parseInt(dayjs().format('DD'))+1;
        month =  Number.parseInt(dayjs().format('MM'));
        year =  Number.parseInt(dayjs().format('YYYY'));
        // Performed operation on number
        cy.log('Arithmetic Operation On number:',day+1);

        if(day<=9){
            depDay = '0'+day.toString();
            cy.log('Dep Date:',depDay)
        }

        if(month==12){
            year = year+1;
        }
        else
        cy.log('This is not December');

        if(month<=9){
            depMonth = '0'+month.toString();
            cy.log('Dep Month:',depMonth)
        }

        
        if(day<=9){
            retDay = '0'+(day).toString();
            cy.log('Ret Date:',retDay)
        }


        if(month<=9){
            if(month<=11)
            retMonth = '0'+(month+1).toString();
            else
            retMonth = '0'+(month-month+1).toString();
            cy.log('ret Month:',retMonth)
        }
        
       
        cy.window().then((win) => {
            const newDate = new Date(win.Date());
           cy.log(day = newDate.getDate());
           cy.log(month = newDate.getMonth()+1);
           cy.log(year = newDate.getFullYear());

           cy.log(day);
           cy.log(month);
           cy.log(year);
          })

        cy.get('#depdateit').click();
        cy.wait(1000);
        cy.get('.ui-state-default').contains(day.toString()).click();
        cy.get('#depdateit').should('have.value',depDay+'/'+depMonth+'/'+year.toString())
        cy.get('.ui-datepicker-next.ui-corner-all').click();
        cy.get('.ui-state-default').contains(day.toString()).click();
        cy.get('#retdateit').should('have.value',retDay+'/'+retMonth+'/'+year.toString())

        // cy.get('#retdateit').clear().type('03/08/2022',{force: true}).should('have.value','03/08/2022');;
    })

    it('DatePicker2', function(){

        const dayjs = require('dayjs');
        // Date printed with DD/MM/YYYY format
        cy.log(dayjs().format('DD/MM/YYYY'))  //Prints todays date 

        cy.visit('https://jqueryui.com/datepicker/');

        cy.get('.demo-frame')
        .then(($iframe) => {
             const $body = $iframe.contents().find('body');
             // Click the check box inside in the frame with Span tag
                 cy.wrap($body)
                     .find('input#datepicker')
                     .type(dayjs().format('DD/MM/YYYY')).should('have.value',dayjs().format('DD/MM/YYYY'));
             });
    })
})