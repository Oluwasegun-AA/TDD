/// <reference types="Cypress" />
context('Landing page elements', () => {
  before(() => {
    cy.visit(Cypress.env('WEBSITE_URL'));
  });

  it('should be visible(navbar)', () => {
    cy.get('.navBar').should('be.visible');
  });
  it('should be visible (place order button)', () => {
    cy.get('.button.landing-page-botton').should('be.visible')
    .should('contain', 'Place an Order');
  });
  it('should be visible (login button)', () => {
    cy.get('.login').should('be.visible')
    .should('contain', 'Login');
  });
  it('should be visible (signup button)', () => {
    cy.get('.signup').should('be.visible')
    .should('contain', 'Signup')
    ;
  });
  it('should be visible (landing page text)', () => {
    cy.get('.landing-page-text').should('be.visible')
    .should('contain', 'An Incredible Taste You can Trust');
  });
  it('should be visible (footer)', () => {
    cy.get('.footer').should('be.visible');
  });
  it('should be visible (license)', () => {
    cy.get('.license').should('be.visible')
    .should('contain', '© 2018 Fast Food Fast. All Rights Reserved');
  });
});
