<template>
    <div id="featured">
        <h2>Boxes of Puzzles</h2>
        <!-- <ul class="cleanList">
            <li data-test="featured-product" v-for="product in featuredProducts" :key="product.id">{{ product.name }}</li>
        </ul> -->
        <show-product class="product" v-for="product in featuredProducts" :key="product.slug" :product="product"></show-product>
    </div>
</template>

<script>
    import _ from "lodash";
    import ShowProduct from "@/components/ShowProduct.vue";

    export default {
        name: "ShowFeatured",
        props: ["category"],
        components: {
            // ProductItem,
            ShowProduct
        },
        computed: {
            featuredProducts: function() {
                return _.filter(this.products, product => {
                    return product.categories.includes(this.category);
                });
            },
            products: function() {
                return this.$store.state.products;
            }
        },
        data: function() {
            return {};
        }
    };
</script>

<style scoped></style>
