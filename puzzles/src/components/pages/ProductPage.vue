<template>
    <div id="product-page" class="product-page" v-if="product">
        <h1 data-test="product-name">{{ product.name }}</h1>
        <img v-if="product.slug" class="product-thumb" :alt="'Product image of  ' + product.name" :src="product.slug | productImage" />
        <p class="description">{{ product.description }}</p>
        <div class="price">${{ product.price }}</div>

        <!-- <button data-test="add-to-cart-button" class="button-add-to-cart" @click="addToCart(product.slug)">Add to cart</button> -->

        <transition name="fade">
            <div class="alert" data-test="add-to-cart-confirmation" v-if="addAlert">Your cart has been updated!</div>
        </transition>

        <router-link :to="'/products'">&larr; Return to all products</router-link>
    </div>
</template>

<script>
    import * as app from "./../../app.js";

    export default {
        name: "ProductPage",
        props: ["slug"],
        data: function() {
            return {
                addAlert: false
            };
        },
        computed: {
            product: function() {
                return this.$store.getters.getProductBySlug(this.slug);
            }
        },
        mounted() {},
        methods: {
            addToCart: function(productId) {
                let cart = new app.Cart();
                cart.add(productId);

                this.$store.commit("setCartCount", cart.count());

                this.addAlert = true;

                setTimeout(() => (this.addAlert = false), 2000);
            }
        }
    };
</script>

<style scoped>
    .product-page {
        width: 100%;
        margin: 5%;
    }

    .button-add-to-cart {
        background-color: green;
        color: white;
        padding: 10px 16px;
        font-size: 18px;
        line-height: 1.3333333;
        border-radius: 6px;
        border: none;
    }

    .description {
        font-size: x-large;
    }

    .price {
        font-size: x-large;
    }
</style>
