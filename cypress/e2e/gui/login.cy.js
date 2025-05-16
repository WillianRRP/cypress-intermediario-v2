describe('login', () => {
  it('succeso', () => {
    cy.visit('/users/sign_in')
    cy.get("[data-qa-selector='login_field']").type('pimto')
    cy.get("[data-qa-selector='password_field']").type('pimto')
  })
})