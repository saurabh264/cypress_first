/// <reference types = 'cypress' />



describe('automation', function(){
    it('script', function(){
        cy.visit('http://tutorialsninja.com/demo/index.php?route=common/home')
        cy.get(':nth-child(6) > a').click()
        cy.get(`[onclick="wishlist.add('28');"]`).click()
        
    })
})