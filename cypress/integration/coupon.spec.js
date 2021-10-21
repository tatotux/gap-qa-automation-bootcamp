/// <reference types="cypress" />

import { LoginComponent } from '../page-objects/components/login';
import { accountDetailPage } from '../page-objects/pages/account-details';

describe ('Coupon suite', () =>{
    let globalCouponInfo ={};
    let globalOrderUserInfo ={};
    let globalCouponId;
    let globalOrder;

    before('Create a new coupon and order', () => {
        //Call the custom commands to create a new coupon and order
        cy.fixture('coupondata').as('couponFixture').then(couponInfo=>{
            
            cy.createNewCoupon(couponInfo);
            cy.get(`@${couponInfo.couponAlias}`).then(couponId=>{   
                globalCouponId=couponId;
            });

            cy.fixture('order-userdata').as('orderuserFix').then(orderuserInfo=>{
                cy.createNewOrder(couponInfo.codeName,orderuserInfo);       

                cy.get(`@${orderuserInfo.orderAlias}`).then(order=>{   
                    globalOrder=order;
                }); 
            });  
        }); 

        cy.get(`@couponFixture`).then(couponFixture=>{   
            globalCouponInfo =couponFixture;
        });

        cy.get(`@orderuserFix`).then(orderuserInfo=>{   
            globalOrderUserInfo =orderuserInfo;
        });
    });

    after('Clean up and delete the coupon and order', () => {
        //Call the custom command to delete the coupon and order created
        cy.deleteCoupon(globalCouponId); 
        cy.deleteOrder(globalOrder.id); 
        
    });

    
    it('Verify that a specific product can be requested', () =>{
        //Get the product   
        cy.getProduct(globalOrderUserInfo.productId,globalOrderUserInfo.prodResponse);  
        cy.get(`@${globalOrderUserInfo.prodResponse}`).then(prodResponse=>{            
            expect(prodResponse).to.eq(200);
        });
       
    })
    it('Verify that a specific coupon can be requested', () =>{
        //Get the coupon         
        cy.getCoupon(globalCouponId,globalCouponInfo.couponStatus)
        cy.get(`@${globalCouponInfo.couponStatus}`).then(couponStatus=>{            
            expect(couponStatus).to.eq(200);
        });    
    })

    it('Verify that the order shows the discount value', () =>{
        //Log into the web page
        LoginComponent.login(globalOrderUserInfo.email,globalOrderUserInfo.password);
        accountDetailPage.openOrder(globalOrder.id);

        cy.get('table').contains('th', 'Discount')
            .parent('tr')
                .invoke('index')
                    .then((i) => {
                                     cy.get('tfoot td').eq(i).invoke('text').then(value=>{
                                        expect(value).to
                                            .eq(accountDetailPage.calculateDiscountValue(globalOrder.line_items[0].subtotal,globalCouponInfo.amount));  
                                    })
        })
        cy.contains('a','Log out').click();
       
    })
})