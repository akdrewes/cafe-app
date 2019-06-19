describe('A café suggestion', () => {
    it('can be added to the current café list', () => {
        cy.visit('http://localhost:3000')
        cy.get('footer a').click()
        cy.url().should('include', '/create')
        cy.get('form').within(($form) => {
            cy.get('input[name="title"]').type('Café name')
            cy.get('input[name="street"]').type('Street and No.')
            cy.get('input[name="district"]').type('Postal Code and city')
            cy.get('label:nth-child(4) div').within(() => {
                cy.get('div:first div img:nth-child(3)').click()
                cy.get('div:nth-child(2) div img:nth-child(2)').click()
                cy.get('div:nth-child(3) div img:nth-child(4)').click()
            })
            cy.root().submit()
        })
        cy.url().should('include', '/')
    })
})