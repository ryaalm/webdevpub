describe('Use dropdown menus in playlist tab', () => {

    it('Go to page then click all dropdown menus', () => {
        cy.visit('http://127.0.0.1:5500/playlists.html')
            for (let i = 0; i < 100; i++){
                cy.wait(500);
                cy.get(".drop-button").click({multiple: true});
            }
    })
})