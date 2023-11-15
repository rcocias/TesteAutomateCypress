it('selectez folosind un atribut',() =>{
        cy.visit('https://www.google.com');

        cy.get('#L2AGLb > .QS5gu').click();

        cy.get('[alt="Google"]').should('be.visible');


})