export class ApplyCoupon {
    actions = {
    getUrl : () => cy.url(),
    getTitle: () => cy.title()
    }

    elements = {

        getCouponInput: () => cy.get('.coupon .input-text'),
        getCouponApplied: () => cy.contains('Apply coupon')
    };

    setCouponInput(){
        this.elements.getCouponInput().click().type('off10_amendez');
    }
    
    getCouponApplied(){
        this.elements.getCouponApplied().click();
    }
    
    
}
export const CouponComponent = new ApplyCoupon();