<template>
    <div id="products" class="container">
        <br />
        <show-product class="product" v-for="product in products" :key="product.slug" :product="product"></show-product>
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
</style>
