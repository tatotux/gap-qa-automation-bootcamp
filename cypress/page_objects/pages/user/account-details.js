export const AccountPage = {

  elements: {
    logoutMessage: () => cy.contains('a','Logout'),
    logout: () => cy.get('[id=meta-2] a[href*="logout"]'),
    viewOrder: () => cy.get('[data-title="Actions"]'),
    orders: () => cy.contains('a','recent orders'),
    discountValue: () => cy.get('.woocommerce-Price-amount').contains('4.00')
  },
  clickLogOut(){
    this.elements.logout().click();
  },
  clickInOrders(){
    this.elements.orders().click();
  },
  clickTheOrder(orderId){
    cy.get('[data-title="Actions"] a[href*=' + orderId +']').click();
  }
};
