/// <reference types="Cypress" />
context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081')
        cy.screenshot()
    })

    describe('tripple-byte h1 content', () => {
        it('check that the inner text is tripple-byte', () => {
            cy.shadowGet('tripple-byte')
                .shadowFind('h1')
                .should(e => {
                    expect(e[0].innerText).to.equal("tripple-byte")
                })
        })

    })





})
