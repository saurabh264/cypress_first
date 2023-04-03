/// <reference types = 'cypress' />



describe('automation', function(){
    it('script', function(){
        cy.visit('http://tutorialsninja.com/demo/index.php?route=common/home')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover')
        cy.contains('Mac (1)').click({ force: true })
        cy.contains('Add to Cart').click({ force: true })
        cy.contains('Tablets (1)').click()
        cy.contains('Add to Cart').click()
        cy.get('.list-group > [href="http://tutorialsninja.com/demo/index.php?route=product/category&path=24"]').click()
        cy.contains('Add to Cart').click()
        cy.get('.btn-inverse').click()
        cy.get(':nth-child(1) > .text-left > a').should('have.text','HTC Touch HD')
        cy.get(':nth-child(2) > .text-left > a').should('have.text','iMac')
        cy.get(':nth-child(3) > .text-left > a').should('have.text','Samsung Galaxy Tab 10.1')
        cy.get('[href="http://tutorialsninja.com/demo/index.php?route=checkout/cart"] > strong').click()
        cy.get(':nth-child(1) > :nth-child(4) > .input-group > .form-control').clear().type('2')
        cy.get(':nth-child(1) > :nth-child(4) > .input-group > .input-group-btn > .btn-primary').click()
       // expect( cy.get('.alert-danger')).to.contain('Products marked with *** are not available in the desired quantity or not in stock!')
    //     cy.contains('automation, practice',(e) =>{
            
    //         expect(e).to.include('Products marked with *** are not available in the desired quantity or not in stock!')

    //  })
    cy.contains('.alert-danger','Products marked with *** are not available in the desired quantity or not in stock!').should('be.visible')
    })
})