///<reference types="cypress"/>


beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html#');
 })


describe('Work with basic elements', () => {
    it('Text', () => {
        cy.get('body').should('contain','Cuidado');
        //cy.get('div').should('contain','Cuidado');
        cy.get('span').should('contain','Cuidado');
        cy.get('.facilAchar').should('contain','Cuidado')
        cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...');
    })

    it('Links', () => {
        cy.get('a').eq(0).click();
        cy.get('#resultado').should('have.text','Voltou!');

        cy.reload();
        cy.get('#resultado').should('have.not.text','Voltou!');
        cy.contains('Voltar').click();
        cy.get('#resultado').should('have.text','Voltou!');
    })


})