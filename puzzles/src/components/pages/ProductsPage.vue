<template>
    <div id="products" class="container">
        <div class="my-info">
            My puzzle collection for sale below.
        </div>
        <div class="my-info">
            My individual puzzles to the extent I've had time to sort them are in the Puzzles link. My boxes of puzzles are on the Home page link. Puzzles in
            images crossed out in red color are already sold.
        </div>

        <div class="my-info">
            To buy puzzles, write to
            <a href="mailto:puzzle2020@gmx.com?subject=Interested in Buying Your Puzzles">puzzle2020@gmx.com</a>. Write puzzle numbers from Puzzle page, or box
            numbers from home page to tell me which puzzles you want to buy.
        </div>
        <div class="my-info">Include your country & pin/zip code for shipping estimate.</div>
        <div class="my-info">
            Shipping cost will be actual cost of shipping and will be added to the price. Excess you paid for shipping which the carrier did not charge will be
            refunded.
        </div>
        <div class="my-info">Payments over Paypal or Venmo.</div>
        <p v-if="products">
            <show-product class="product" v-for="product in availableProducts" :key="product.slug" :product="product"></show-product>
        </p>
    </div>
</template>

<script>
    import ShowProduct from "./../ShowProduct.vue";

    // import * as app from './../../app.js';

    export default {
        name: "ProductsPage",
        components: {
            // ProductItem,
            ShowProduct
        },
        data: function() {
            return {
                displayList: false
            };
        },
        mounted() {},
        computed: {
            products: function() {
                return this.$store.state.products;
            },
            availableProducts: function() {
                return this.products.filter(item => {
                    return item.quantity;
                });
            }
        }
    };
</script>

<style scoped>
    .container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        float: left;
    }

    .my-info {
        font-size: x-large;
    }
</style>
