describe('Alias Practice', () => {

  beforeEach(() => {

    cy.visit('https://www.saucedemo.com')

  })

  it('Using Alias', () => {

    cy.get('#user-name')
      .as('usernameField')

    cy.get('@usernameField')
      .type('standard_user')

  })

})