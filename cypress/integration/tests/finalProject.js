/// <reference types="Cypress" />


context('Testing Playground', () => {
    describe('The Challenge - Final Project', () => {
        let couponCode = `cuponOff${Math.floor(Math.random() * 10000000)}`;
        let couponId;
        let productsList;
        let orderId;       

        before('Set Up', () => {            
            cy.getAllProducts().then((products) => { productsList = products })
            cy.createCoupon(couponCode).then((id) => { 
                couponId = id
                cy.createOrder(productsList[0].id, couponCode).then((order) => { orderId = order})
            })           
        })

        after('TearDown / Clean up', () => {
            cy.deleteCoupon(couponId)
            cy.deleteOrder(orderId)
            
        })


        it('API - A specific product can be requested', () => {  
            //PLEASE REMOVE 'productsList[0].id' in case you want to use a specific product id already existing on DB         
                cy.getProduct(productsList[0].id).then((productInfo) =>{ 
                    expect(productInfo).not.empty
                    expect(productInfo.id).eq(productsList[0].id)
                })            
        })


        it('API - A specific coupon can be requested', () => {
            cy.getCoupon(couponId).then((coupon) =>{
                expect(coupon.id).eq(couponId)
                expect(coupon.code).eq(couponCode.toLowerCase())
                expect(coupon.amount).eq("25.00")
                expect(coupon.description).eq("Cupon used on final project - Jose Garcia")
            })
        })


        


        /*it('UI Testing - Verify the order shows the proper discount value', () => {
            cy.getAllProducts().then((productsList) => {
                cy.getProduct(productsList[0].id)
                cy.createOrder(productsList[0].id, couponCode)
            })

        })*/
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



    })

})