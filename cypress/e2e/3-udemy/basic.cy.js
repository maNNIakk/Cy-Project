/// <reference types="cypress"/>

describe('Cypress basics', () => {
    it('Should visit a page and assert title', () =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html#');

        //const title = cy.title();
        //console.log(title);

        cy.title().should('be.equal', 'Campo de Treinamento');
        cy.title().should('contain', 'Campo');


        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contain', 'Campo');
        //TODO Imprimir o title no consolelog
        //TODO Escrever o title em um campo de texto

    })
})