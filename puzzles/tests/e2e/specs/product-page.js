describe('product-page', () => {

    // Test product
    let product = {
        name: 'Driscoll’s Strawberries',
        slug: 'driscolls-strawberries'
    }

    it('shows product', () => {
        cy.visit('/product/' + product.slug);
        cy.contains('[data-test="product-name"]', product.name);
    })

    it('adds to cart', () => {
        cy.visit('/product/' + product.slug);
        cy.get('[data-test="add-to-cart-button"]').click();
        cy.get('[data-test="add-to-cart-confirmation"]').should('exist');
        cy.contains('[data-test="cart-count"]', 1);
    })
})