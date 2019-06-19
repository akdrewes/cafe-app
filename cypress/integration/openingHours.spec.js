describe('The opening hours', () => {
    it('can be toggled', () => {
        cy.visit('http://localhost:3000')
        cy.get('main > section:first').within(() => {
            cy.get('> div:nth-child(5) > div').click({force: true})
        })
        cy.get('main > section:first').within(() => {
            cy.get('> div:nth-child(5) > div').click({force: true})
        })
    })
})