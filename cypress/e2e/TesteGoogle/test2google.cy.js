it ('asteapta 15 secunde', () => {

    cy.visit( 'https://www.google.com');

    cy.get('#L2AGLb > .QS5gu').click();

    cy.wait(15000); // 15 secunde

    cy.get('.SDkEP').type('au trecut 15 secunde')







})