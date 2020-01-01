<template>
    <div id="ProductItem" class="mb-3 col-sm-6 col-md-4 item" :class="{ 'list-group-item': displayList }">
        <div class="thumbnail card">
            <router-link data-test="product-link" :to="{ name: 'puzzle', params: { slug: product.slug } }">
                <div class="img-event intrinsic">
                    <img v-bind:data-test="'product-image-' + product.slug" :alt="'Product image of  ' + product.name" :src="product.slug | productImage" />
                </div>
            </router-link>
        </div>
        <div class="card-body">
            <router-link data-test="product-link" :to="{ name: 'puzzle', params: { slug: product.slug } }">
                <div data-test="product-name" class="product-name">{{ product.name }}</div>
            </router-link>

            <h6 class="card-subtitle mb-2 remain">{{ product.quantity }} left in stock</h6>

            <p class="card-text truncate">{{ product.description | shortDescription }}</p>

            <div class="row">
                <p class="col-6 lead">${{ product.price }}</p>
                <p class="col-6">
                    <button class="btn btn-success pull-right" :disabled="product.quantity === 0">
                        Add to cart
                    </button>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductItem",
        props: ["product", "displayList"],
        data: function() {
            return {};
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

<style lang="scss" scoped>
    div.card {
        height: 100%;
    }

    .card-text {
        font-size: 0.875rem;
    }

    .remain {
        color: #d17581;
    }

    .grow {
        transition: all 0.2s ease-in-out;
    }

    .grow:hover {
        transform: scale(1.1);
    }

    .list-group-item {
        float: none;
        width: 100%;
        background-color: #fff;
        margin-bottom: 30px;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
        padding: 0 1rem;
        border: 0;
        .thumbnail {
            display: inline-block;
            width: 100%;
        }
        .img-event {
            width: 20%;
            float: left;
            padding: 0 !important;
            margin: 0;
            height: auto;
        }

        .thumbnail-image {
            position: static;
        }

        .card-body {
            float: left;
            width: 80%;
            margin: 0;
        }

        @media (max-width: 767.98px) {
            .img-event {
                width: 30%;
                float: left;
                padding: 0 !important;
                margin: 0;
            }

            .card-body {
                float: left;
                width: 70%;
                margin: 0;
            }
        }
    }

    .item.list-group-item:before,
    .item.list-group-item:after {
        display: table;
        content: " ";
    }

    .item.list-group-item:after {
        clear: both;
    }
</style>
