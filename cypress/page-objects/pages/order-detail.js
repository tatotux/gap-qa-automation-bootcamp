/// <reference types="cypress" />

class OrderDetailPage {    
    
    elements = {
        discount: () => cy.get(':nth-child(2) > td > .woocommerce-Price-amount'),
        logout: () => cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a'),
    };

    checkDiscount() {
        this.elements.discount().contains('67.50');
        this.elements.logout().click();
    }

}

export const OrderPage = new OrderDetailPage();
