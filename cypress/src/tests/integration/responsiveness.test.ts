/// <reference types="Cypress" />

context('Viewport', () => {
  before(() => {
    cy.visit(Cypress.env('WEBSITE_URL'));
  });

  it('set the viewport size and dimension', () => {
    cy.get('.navBar').should('be.visible');
    cy.viewport(320, 480);
    cy.get('.navBar').should('be.visible');
    cy.viewport(2999, 2999);
    cy.get('.navBar').should('be.visible');
    cy.viewport('macbook-15');
    cy.get('.navBar').should('be.visible');
    cy.viewport('macbook-13');
    cy.get('.navBar').should('be.visible');
    cy.viewport('macbook-11');
    cy.get('.navBar').should('be.visible');
    cy.viewport('ipad-2');
    cy.get('.navBar').should('be.visible');
    cy.viewport('ipad-mini');
    cy.get('.navBar').should('be.visible');
    cy.viewport('iphone-6+');
    cy.get('.navBar').should('be.visible');
    cy.viewport('iphone-6');
    cy.get('.navBar').should('be.visible');
    cy.viewport('iphone-5');
    cy.get('.navBar').should('be.visible');
    cy.viewport('iphone-4');
    cy.get('.navBar').should('be.visible');
    cy.viewport('iphone-3');
    cy.get('.navBar').should('be.visible');
    cy.viewport('ipad-2', 'portrait');
    cy.get('.navBar').should('be.visible');
    cy.viewport('iphone-4', 'landscape');
    cy.get('.navBar').should('be.visible');
  });
});
