it('verific o valoare din input',() =>{

    cy.visit('https://google.com');

    cy.get('#L2AGLb > .QS5gu').click();
    const googleSearch = cy.get('#APjFqb');
    
    googleSearch.type('123');
    googleSearch.should('have.value','123')





})