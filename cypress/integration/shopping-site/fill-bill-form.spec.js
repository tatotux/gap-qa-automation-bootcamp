import { onCart } from "../../support/page-objects/cart"
import { onHome } from "../../support/page-objects/home"
import { onItem } from "../../support/page-objects/item"
import { onCheckout } from "../../support/page-objects/checkout"


describe('As a user I go the Shopping Site', function() {

    beforeEach('Open Testing Playground and Add a Product to the Cart', function() {

            cy.openHomePage()
            onHome.searchProduct('Hoodie with Pocket{enter}')
            onItem.cartProcess()
            onCart.ProceedToCheckout()
            cy.fixture('info').then(function (data){ this.data = data})
    })

    it('And I am able to fill out the Billing Information', function() {

        onCheckout.fillCheckoutFields(this.data.firstname,this.data.lastname,this.data.country,this.data.address,this.data.city,this.data.state,this.data.phone,this.data.email)
        onCheckout.completeProcess()
        cy.contains('Order received').should('be.visible')
    
    })
})