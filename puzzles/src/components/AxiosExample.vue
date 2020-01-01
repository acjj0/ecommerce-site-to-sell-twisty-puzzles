<template>
    <ul>
        <li
            data-test='featured-product'
            v-for='product in products'
            :key='product.id'
        >{{ product.name }}</li>
    </ul>
</template>

<script>
import * as app from './../app.js';

export default {
    name: 'AxiosExample',
    data: function() {
        return {
            products: null
        };
    },
    mounted: function() {
        app.axios.get(app.config.api + 'products.json').then(response => {
            this.products = response.data;
        });
    }
};
</script>

<style scoped>
</style>