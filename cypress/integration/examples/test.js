describe('Use navigation', () => {

    it('Go to page then click all navbar items', () => {
        cy.visit('http://127.0.0.1:5500/index.html')
        for (let i = 0; i < 100; i++) {
            cy.wait(500)
            cy.get('#charcreate').click()
            cy.wait(500)
            cy.get('#playlists').click()
            cy.wait(500)
            cy.get('#resources').click()
            cy.wait(500)
            cy.get('#home').click()
        }
    })
})