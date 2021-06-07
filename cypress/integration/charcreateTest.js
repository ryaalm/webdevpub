describe('Use slideshows in charcreate tab', () => {

    it('Go to page then click through all slideshows', () => {
        cy.visit('http://127.0.0.1:5500/charcreate.html')
            for (let i = 0; i < 100; i++){
                cy.wait(500);
                cy.get(".next").click({multiple: true});
                cy.wait(500);
                cy.get(".next").click({multiple: true});
                cy.wait(500);
                cy.get(".next").click({multiple: true});
                cy.wait(500);
                cy.get(".prev").click({multiple: true});
                cy.wait(500);
                cy.get(".prev").click({multiple: true});
                cy.wait(500);
                cy.get(".prev").click({multiple: true});
            }
    })
})