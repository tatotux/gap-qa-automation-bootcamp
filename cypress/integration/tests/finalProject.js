/// <reference types="Cypress" />

context('Testing Playground',() =>{
    describe('The Challenge - Final Project',()=>{
        let couponCode = `cuponOff${Math.floor(Math.random() * 10000)}`;
        let couponId;
        before(()=>{
            
            cy.createCoupon('automation','automation',couponCode).then((id)=>{ 
                couponId = id 
                cy.getCoupon('automation','automation',couponId)
            })          
                            
            //cy.visit("");           
        })

        it('E2E - Verify a full order process',()=>{
            cy.getAllProducts('automation','automation').then((productsList)=>{
                cy.createOrder('automation','automation',productsList[0].id,couponCode)
            })

        })       
        /*it('E2E - Verify a full order process',()=>{
            const item = "Belt"
            cy.get(homePage.elements.search).should('be.visible').type(`${item} {enter}`);
            cy.get(productDetailsPage.elements.add_to_cart_button).should('be.visible').click();
            cy.get(productDetailsPage.elements.success_message).should('be.visible')
                .invoke('text')
                .should('contain',`“${item}” has been added to your cart.`);
            cy.visit(cartPage.elements.url);
            cy.get(cartPage.elements.checkout_button).should('be.visible').click();
            cy.fixture("/userData.json").then(data => checkoutPage.fill_billing_info(data));
            cy.get(checkoutPage.elements.ship_to_different_address).should('be.visible').uncheck();
            cy.get(checkoutPage.elements.terms_checkbox).should('be.visible').click({force:true});
            cy.get(checkoutPage.elements.place_order_button).should('be.visible').click({force:true});
            cy.url().should('contain', '/checkout/order-received/');
            cy.get(checkoutPage.elements.title).should('be.visible').contains("Order received");            
        })*/

        after(()=>{              
            cy.deleteCoupon('automation','automation',couponId)        
        })

    })

})