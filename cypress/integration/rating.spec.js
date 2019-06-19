describe('A review', () => {
    it('can be given', () => {
        cy.visit('http://localhost:3000')
        cy.get('main').scrollTo('bottom')
            .get('main > section:last-child').within(() => {
                cy.get('div').contains('Add rating').click({force: true})
                cy.get('> div:nth-child(4) div').within(() => {
                    cy.get('div:first div img:nth-child(2)').click()
                    cy.get('div:nth-child(2) div img:nth-child(4)').click()
                    cy.get('div:nth-child(3) div img:nth-child(1)').click()
                })
                cy.get('div').contains('Submit').click({force: true})
            })
    })
})