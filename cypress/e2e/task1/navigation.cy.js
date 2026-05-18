describe('Navigation Tests', () => {

  beforeEach(() => {

    cy.visit('https://www.saucedemo.com')

    cy.get('#user-name').type('standard_user')

    cy.get('#password').type('secret_sauce')

    cy.get('#login-button').click()

  })

  // Navigation Test 1
  it('Open Menu', () => {

    cy.get('#react-burger-menu-btn').click()

    cy.get('.bm-menu')
      .should('be.visible')

  })

  // Navigation Test 2
  it('Visit Different Pages', () => {

    cy.get('#item_4_title_link').click()

    cy.get('.inventory_details_name')
      .should('be.visible')

    cy.go('back')

    cy.url().should('include', 'inventory')

  })

})