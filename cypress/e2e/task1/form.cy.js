describe('Form Test', () => {

  beforeEach(() => {

    cy.visit('https://www.saucedemo.com')

    cy.get('#user-name').type('standard_user')

    cy.get('#password').type('secret_sauce')

    cy.get('#login-button').click()

  })

  it('Add Item To Cart', () => {

    cy.get('#add-to-cart-sauce-labs-backpack')
      .click()

    cy.get('.shopping_cart_badge')
      .should('have.text', '1')

  })

})