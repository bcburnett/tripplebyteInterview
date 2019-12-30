/* jshint esversion:9*/
/// <reference types="Cypress" />
context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081');
        cy.screenshot();
    });

    describe('tripple-byte h1 content', () => {
        it('check that the inner text is tripple-byte', () => {
            cy.shadowGet('tripple-byte')
                .shadowFind('h1')
                .should(e => {
                    expect(e[0].innerText).to.equal("tripple-byte");
                });
        });

    });


    describe('tripple-byte button click', () => {
        it('check that the back ground color is red', () => {
            cy.window().then((win) => {
                expect((win.store.getState().app.click), 'compare clicked states').equal(false);
            });

            cy.shadowGet('tripple-byte')
                .shadowFind('button')
                .shadowClick();

                cy.window().then((win) => {
                    expect((win.store.getState().app.click), 'compare clicked states').equal(true);
                });

            cy.shadowGet('tripple-byte')
                .shadowFind('h1')
                .should(e => {
                    expect(e[0].classList.contains('clicked'),'<h1> classList.contains(clicked)').to.equal(true);
                });
        });

    });





});
