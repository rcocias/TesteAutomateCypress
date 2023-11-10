describe('On Linkedin', () => {



it('I log in', () => {

    cy.visit ( 'https://linkedin.com');

    cy.get('.nav__button-secondary').click();
    cy.get('#username').type('rcocias@gmail.com');
    cy.get('#password').type('qweasd123456')
    cy.get('.btn__primary--large').click();
})



 })           