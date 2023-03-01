/// <reference types="cypress"/>

describe('teste de ponta a ponta em saucelabs',() => {

it('deve fazer o pedido de ponta a ponta',() =>{
    cy.visit('https://www.saucedemo.com/')

//login
cy.get('[data-test="username"]').type ('standard_user')
cy.get('[data-test="password"]').type ('secret_sauce')
cy.get('[data-test="login-button"]').click()

//Adicionar produto
cy.get('#item_4_title_link > .inventory_item_name').click()
cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
cy.get('[data-test="back-to-products"]').click()
cy.get('.shopping_cart_link').click()
cy.get('[data-test="checkout"]').click()

//Cadastro
cy.get('[data-test="firstName"]').type('Regis')
cy.get('[data-test="lastName"]').type('Rosa')
cy.get('[data-test="postalCode"]').type('2775-202')
cy.get('[data-test="continue"]').click()
cy.get('[data-test="finish"]').click()
cy.get('.complete-header').should('contain', 'Thank you for your order')

})



})
