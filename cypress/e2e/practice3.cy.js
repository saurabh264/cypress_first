/// <reference types = 'cypress' />


describe('automation', function(){
    it('script', function(){
        cy.visit('http://tutorialsninja.com/demo/index.php?route=common/home')
        cy.get(':nth-child(6) > a').click()
        cy.get(`[onclick="wishlist.add('28');"]`).click()
        cy.get('.alert > [href="http://tutorialsninja.com/demo/index.php?route=account/login"]').click()
        cy.get('#input-email').type('saurabhgurjar3761@gmail.com')
        cy.get('#input-password').type('Saurabh@14')
        cy.get('form > .btn').click()
        cy.get(':nth-child(3) > .dropdown-toggle').trigger('mouseover')
        cy.contains('Monitors (2)').click({ force: true })
        cy.get(`[onclick="wishlist.add('42');"]`).click()
        cy.get('.alert').should('include.text','Success: You have added Apple Cinema 30" to your wish list!')
        cy.get('.alert > [href="http://tutorialsninja.com/demo/index.php?route=account/wishlist"]').click()
        cy.get('tbody > :nth-child(1) > :nth-child(2) > a').should('have.text','HTC Touch HD')
        cy.get('tbody > :nth-child(2) > :nth-child(2) > a').should('have.text','iPhone')
        cy.get('tbody > :nth-child(3) > :nth-child(2) > a').should('have.text',`Apple Cinema 30"`)
        cy.get('tbody > :nth-child(4) > :nth-child(2) > a').should('have.text','MacBook')
        cy.get('.pull-right > .btn').click()
    })
})    