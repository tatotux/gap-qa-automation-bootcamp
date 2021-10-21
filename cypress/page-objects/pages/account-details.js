class accountDetail{
    url='/my-account/edit-account/';
    elements = {
        ordersButton: () => cy.get('.woocommerce-MyAccount-navigation-link--orders'),
        loginButton: () => cy.get('[name="login"]')
    };

    openOrder(orderId){
        cy.visit(this.url);
        cy.contains('a','Orders').click({force:true});
        cy.contains('a',orderId).click();
    }

    calculateDiscountValue(subtotal, percentDiscount){
        return `-$${(subtotal*percentDiscount)/100}.00`;
    }
}

        

export const accountDetailPage = new accountDetail();
