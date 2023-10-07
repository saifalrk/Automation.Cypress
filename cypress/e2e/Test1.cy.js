/// <reference types="cypress"/>

it('Google Search', function(){

    cy.visit('https://google.com')
    cy.get('#APjFqb').type('Cypress Automation{Enter}')

    //cy.contains('Google Search').click()

    //cy.contains('Videos').click()

    cy.contains('Videos', {timeout: 10000}).should('be.visible').click()

    
})