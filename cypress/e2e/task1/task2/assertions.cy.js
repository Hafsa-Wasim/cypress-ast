describe('Assertion Practice', () => {

  beforeEach(() => {

    cy.visit('https://www.saucedemo.com')

  })

  it('Visible Assertion', () => {

    cy.get('#login-button')
      .should('be.visible')

  })

  it('Text Assertion', () => {

    cy.get('.login_logo')
      .should('have.text', 'Swag Labs')

  })

  it('Attribute Assertion', () => {

    cy.get('#login-button')
      .should('have.attr', 'type', 'submit')

  })

  it('Negative Assertion', () => {

    cy.get('.fake-element')
      .should('not.exist')

  })

})