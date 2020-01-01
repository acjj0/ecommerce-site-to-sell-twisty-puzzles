describe('create-product-page', () => {

    // Test product
    let product = {
        name: 'My New Product',
        // Append a Unix timestamp to the end of the slug, ensuring it's a unique value
        slug: 'my-new-product-' + Date.now(),
        description: 'Lorem ipsum dolor sit amet.',
        price: 4.99,
        weight: .05,
        categories: 'snacks,frozen'
    }

    it('adds a new product', () => {
        cy.visit('/product/create');
        cy.get('[data-test=product-slug-input]').type(product.slug);
        cy.get('[data-test=product-name-input]').type(product.name);
        cy.get('[data-test=product-description-textarea]').type(product.description);
        cy.get('[data-test=product-price-input]').type(product.price);
        cy.get('[data-test=product-weight-input]').type(product.weight);
        cy.get('[data-test=product-categories-input]').type(product.categories);
        cy.get('[data-test=product-perishable-checkbox]').check();
        cy.get('[data-test=add-product-button]').click();
        cy.contains('[data-test="product-name"]', product.name);
        cy.url().should('include', product.slug)
    });
})