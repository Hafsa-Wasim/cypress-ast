describe('Custom Command Test', () => {

  beforeEach(() => {

    cy.visit('https://www.saucedemo.com')

  })

  it('Login Using Custom Command', () => {

    cy.login()

    cy.url().should('include', 'inventory')

  })

})