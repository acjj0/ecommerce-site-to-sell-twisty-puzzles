<template>
    <div id="featured">
        <h2>Boxes of Puzzles</h2>
        <div v-if="this.products">
            <show-product class="product" v-for="product in featuredProducts" :key="product.slug" :product="product"></show-product>
        </div>
    </div>
</template>

<script>
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
                return this.products.filter(product => {
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
