/// <reference types="Cypress" />
context('Landing page elements', () => {
  before(() => {
    cy.visit(Cypress.env('WEBSITE_URL'));
  });

  it('switches to signup url', () => {
    cy.get('.signup').should('be.visible')
    .click()
    .wait(1000);
    cy.location().should((location: any) => {
      expect(location.href).to.eq('https://swift-foods.herokuapp.com/signup');
      expect(location.host).to.eq('swift-foods.herokuapp.com');
      expect(location.hostname).to.eq('swift-foods.herokuapp.com');
      expect(location.origin).to.eq('https://swift-foods.herokuapp.com');
      expect(location.pathname).to.eq('/signup');
      expect(location.port).to.eq('');
      expect(location.protocol).to.eq('https:');
      expect(location.search).to.be.empty;
    });
  });

  it('should be attempt login', () => {
    cy.get('#username').should('be.visible')
    .type('username', { force: true });
    cy.get('#email').should('be.visible')
    .type('user@email.com',  { force: true });
    cy.get('#password').should('be.visible')
    .type('password',  { force: true });
    cy.get('#confirmPassword').should('be.visible')
    .type('password',  { force: true });
    cy.get('#showPassword').should('be.visible')
    .click().wait(1000);
    cy.get('.button.loginBtn').should('be.visible')
    .click();
  });
});
