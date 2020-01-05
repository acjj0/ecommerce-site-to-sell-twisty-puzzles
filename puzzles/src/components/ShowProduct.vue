<template>
    <div class="product">
        <router-link class="link-text" data-test="product-link" :to="{ name: 'puzzle', params: { slug: product.slug } }">
            <h2 data-test="product-name" class="product-name">{{ product.name }}</h2>

            <!-- <img
                v-bind:data-test="'product-image-' + product.slug"
                class="product-thumb"
                :alt="'Product image of  ' + product.name"
                :src="product.slug | productImage"
            /> -->

            <image-item class="product-thumb" :source="product.slug | productThumb" onerror="this.style.display='none'" />
        </router-link>

        <div card-body>
            <p class="remaining">{{ product.quantity }} left in stock</p>

            <p class="truncate">{{ product.description | shortDescription }}</p>

            <div class="row">
                <h3>${{ product.price }}</h3>
                <!-- <p class="col-6">
                    <button class="button-add-to-cart" :disabled="product.quantity === 0">
                        Add to cart
                    </button>
                </p> -->
            </div>
        </div>
    </div>
</template>

<script>
    import ImageItem from "@/components/ImageItem.vue";

    export default {
        name: "ShowProduct",
        props: ["product"],
        components: {
            "image-item": ImageItem
        },
        filters: {
            shortDescription(value) {
                if (value && value.length > 100) {
                    return value.substring(0, 100) + "...";
                } else {
                    return value;
                }
            }
        }
    };
</script>

<style scoped>
    .product {
        position: relative;
        float: left;
        vertical-align: top;
        margin: 1%;
        width: 400px;
        height: 600px;
        border: 1px lightgray solid;
        border-radius: 10px;
        text-align: center;
    }
    .product-thumb {
        width: 80%;
        padding-left: 9%;
        padding-right: 9%;
        max-height: 60%;
    }

    .product-name {
        color: green;
    }

    .link-text {
        text-decoration: none;
    }

    .remaining {
        color: brown;
    }

    .card-body {
        vertical-align: bottom;
    }

    .button-add-to-cart {
        background-color: green;
        color: white;
        padding: 2px 16px;
        font-size: 18px;
        line-height: 1.3333333;
        border-radius: 6px;
        border: none;
    }
</style>
