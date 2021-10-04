/// <reference types="Cypress" />

//version 1 pending to improve and organize the code
import { playgroundElements } from '../pageObjects/home.locators'

before(() => {
    cy.visit('')
})

describe('Solution for cypress homework', () => {
    it('Searching for a product', () => {
        cy.get(playgroundElements.searchProductBar)
        .should('be.visible')
        .type('vneck{enter}')
        cy.get(playgroundElements.searchProductsCount).should('not.exist')
    })

    it('Adding the product the product to the cart', () => {
        cy.get(playgroundElements.addToCart).click()
        cy.get(playgroundElements.viewCart).click()

        cy.get(playgroundElements.checkoutButton).click()
    })

    it('Filling out the form for the Shipping and Billing information', () => {
        cy.get(playgroundElements.firstName).type('Mario')
        cy.get(playgroundElements.lastName).type('Rodriguez')
        cy.get(playgroundElements.billingAddress).type('Austin')
        cy.get(playgroundElements.billingCity).type('TX')
        cy.get(playgroundElements.billingPostCode).type('33404')
        cy.get(playgroundElements.billingPhone).type('5551234567')
        cy.get(playgroundElements.billingEmail).type('test@m.com')    
    })

    it('Processing the order', () => {
        cy.get(playgroundElements.termsAndConditions).check({force: true})
        cy.get(playgroundElements.useDiffShipAddress).uncheck()
        cy.get(playgroundElements.placeOrder).click({force: true})
        //last line is getting error sometimes because the page is getting stuck trying to resolve this: POST 403 /?wc-ajax=update_order_review
        cy.get(playgroundElements.orderReceived).should('be.visible')
    })
})