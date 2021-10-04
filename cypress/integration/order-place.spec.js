/// <refeence types="cypress" />

import { ProductPage } from '../page-objects/pages/product-detail';
import { CartPage } from '../page-objects/pages/cart';
import { SearchComponent } from '../page-objects/components/search-input';
import { CheckoutInfoPage } from '../page-objects/pages/checkout';
import { OrderReceivedPage } from '../page-objects/pages/order-received';


describe ('Order place', () =>{
    let email;
    beforeEach(() => {
        cy.visit('/');
    });

    it('should order a product', () =>{
        //Search for product
        SearchComponent.searchText('Belt');
        
        //Product details page
        ProductPage.elements.title().should('contain','Belt');
        ProductPage.elements.addToCart().click();
        ProductPage.elements.viewCart().click();

        //Cartpage
        cy.url().should('include', CartPage.url);
        cy.title().should('include', CartPage.title);

        CartPage.elements.productTitle().should('contain','Belt');
        CartPage.elements.subtotal().should('contain','$55.00');
        CartPage.elements.checkoutButton().click();

        //Checkout page
        CheckoutInfoPage.elements.productName().should('contain','Belt');
        CheckoutInfoPage.elements.total().should('contain','$55.00');
        
        let date = new Date()
            let x1 =date.getFullYear().toString() + date.getMonth() + 1 + date.getDate() +  date.getHours()  +  date.getMinutes() + date.getSeconds();
            email= `alemail${x1}@gmail.com`;
        cy.fixture('formdata').then(x=>{
            
            CheckoutInfoPage.fillForm(x,email);
        });     
       
        CheckoutInfoPage.placeOrder();
        
        //Order received confirmation
        OrderReceivedPage.elements.message().should('contain','Thank you. Your order has been received.');
        OrderReceivedPage.elements.email().should('be.visible')
         .invoke('text').then(value=>{
            expect(value)
            .to.eq(email)
        });
    })
})


