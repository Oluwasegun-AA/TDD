/// <reference types="Cypress" />
context('Landing page elements', () => {
  before(() => {
    cy.visit(Cypress.env('WEBSITE_URL'));
  });

  it('switches to login url', () => {
    cy.get('.login').should('be.visible')
    .click()
    .wait(1000);
    cy.location().should((location: any) => {
      expect(location.href).to.eq('https://swift-foods.herokuapp.com/login');
      expect(location.host).to.eq('swift-foods.herokuapp.com');
      expect(location.hostname).to.eq('swift-foods.herokuapp.com');
      expect(location.origin).to.eq('https://swift-foods.herokuapp.com');
      expect(location.pathname).to.eq('/login');
      expect(location.port).to.eq('');
      expect(location.protocol).to.eq('https:');
      expect(location.search).to.be.empty;
    });
  });

  it('should be attempt login', () => {
    cy.get('.username').should('be.visible')
    .type('username');
    cy.get('.password').should('be.visible')
    .type('password');
    cy.get('#showPassword').should('be.visible')
    .click();
    cy.get('.button.loginBtn').should('be.visible')
    .click();
  });
});
