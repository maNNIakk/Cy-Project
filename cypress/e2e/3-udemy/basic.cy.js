/// <reference types="cypress"/>

describe('Cypress basics', () => {
    
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html#');
    })
    it.only('Assert title', () =>{


        cy.pause();

        cy.title()
           .should('be.equal', 'Campo de Treinamento');

        cy.title()
           .should('contain', 'Campo');


        cy.title()
           .should('be.equal', 'Campo de Treinamento')
            .should('contain', 'Campo')
            .then(console.log);
        //TODO Escrever o title em um campo de texto

    })

    it('Should find and interact with an element', () => {
        cy.get('#buttonSimple').click().should('have.value','Obrigado!');
    })
})