/// <reference types = 'cypress' />



describe('automation', function(){
    it('script', function(){
        cy.visit('http://tutorialsninja.com/demo/index.php?route=common/home')
        cy.get(':nth-child(6) > a').click()
        cy.get(`[onclick="wishlist.add('28');"]`).click()
        cy.get('.alert > [href="http://tutorialsninja.com/demo/index.php?route=account/register"]').click()
        cy.get('#input-firstname').type('saurabh')
        cy.get('#input-lastname').type('Gujjar')
        cy.get('#input-email').type('saurabhgurjar3761@gmail.com')
        cy.get('#input-telephone').type('8572019630')
        cy.get('#input-password').type('Saurabh@14')
        cy.get('#input-confirm').type('Saurabh@14')
        cy.get('.col-sm-10 > :nth-child(1) > input').first().check()
        cy.get('.col-sm-10 > :nth-child(2) > input').check()
        cy.get('[type="checkbox"]').check()
        cy.get('.pull-right > .btn').click()
        cy.get('#content > :nth-child(2)').invoke('text').then(str => {

            expect(str).to.equal('Congratulations! Your new account has been successfully created!')

        }) 
        cy.get('.pull-right > .btn').click()
            
        
    
        

        
        
    
    })
})