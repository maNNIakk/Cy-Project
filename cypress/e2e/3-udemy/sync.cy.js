///<reference types="cypress"/>

describe('Esperas', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html#');
     })
    
    beforeEach(() => {
        cy.reload();
    })

    it('Deve aguardar elemento estar disponível', () => {
        cy.get('#novoCampo').should('not.exist');
        cy.get('#buttonDelay').click();
        cy.get('#novoCampo').should('not.exist');
        cy.get('#novoCampo').should('exist');
        cy.get('#novoCampo').type('Funcionou');
    })

    it('Deve fazer retrys', () => {
        cy.get('#novoCampo').should('not.exist');
        cy.get('#buttonDelay').click();
        cy.get('#novoCampo').should('not.exist');
        cy.get('#novoCampo')
           .should('exist')
            .type('Funciona')
        //.should('not.exist')
    })

    it('Pegar itens com delay 1', () => {
        cy.get('#lista').should('not.exist');
        cy.get('#buttonList').click();
        cy.get('#lista').should('exist');
        cy.contains('span','Item 1').should('exist');
        cy.contains('span','Item 2').should('exist');
    })

    it('Pegar itens com delay 2', () => {
        cy.get('#buttonListDOM').click();
        cy.get('#lista li')
           .find('span')
            .should('contain','Item 1')
        // cy.get('#lista li')
        //    .find('span')
        //     .should('contain','Item 2')
        cy.get('#lista li span')
            .should('contain','Item 2')
    })

    it('Timeout and Retry', () => {
        //cy.get('#novoCampo').should('exist');
        //cy.get('#buttonListDOM').click();
        //cy.get('#lista li span', {timeout:30000})
        //    .should('contain','Item 2');
        cy.get('#buttonListDOM').click();
        cy.get('#lista li span', {timeout:30000})
           .should('have.length',1)
        // cy.get('#lista li span')
            .should('have.length',2)


    })

    it.only('Should vs Then', () =>{
        cy.get('#buttonListDOM').click();
        cy.get('#lista li span').then($el => {
           expect($el).to.have.length(1)
        })
    })

})