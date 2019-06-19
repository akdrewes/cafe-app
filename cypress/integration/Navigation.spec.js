describe('The footer button', () => {
    it('directs to create page and back', () => {
        cy.visit('http://localhost:3000')
        cy.get('footer a').click()
        cy.url().should('include', '/create')
        cy.get('footer a').click()
        cy.url().should('include', '/')
    })
})