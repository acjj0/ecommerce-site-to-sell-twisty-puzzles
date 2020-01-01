<template>
    <div id="app">
        <!-- <img id="logo" alt="ZipFoods logo" src="./assets/images/zipfoods-logo.png" /> -->

        <nav>
            <ul>
                <li v-for="link in links" :key="link">
                    <router-link exact :to="{ name: link }">
                        {{ link }}
                        <span data-test="cart-count" v-if="link == 'cart'">({{ cartCount }})</span>
                    </router-link>
                </li>
            </ul>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>
    import * as app from "./app.js";
    window.console.log(process.env.NODE_ENV);
    export default {
        name: "app",
        components: {},
        data: function() {
            return {
                links: ["home", "puzzles"]
            };
        },
        computed: {
            cartCount: function() {
                return this.$store.state.cartCount;
            }
        },
        mounted() {
            this.cart = new app.Cart();

            this.$store.commit("setCartCount", this.cart.count());

            this.$store.dispatch("setProducts");
        }
    };
</script>

<style lang="scss" scoped>
    // @import "./assets/css/zipfoods.scss";
    $blue: #0074d9;
    $navy: #001f3f;
    $white: #ffffff;

    #app {
        width: 100%;
        margin: auto;
        padding-bottom: 200px;
        text-align: center;
    }

    #logo {
        max-height: 40px;
    }

    .navigation-link {
        font-size: larger;
    }

    nav ul {
        list-style-type: none;
        font-size: x-large;

        li {
            display: inline-block;

            a:link,
            a:visited,
            a:active,
            a:hover {
                text-transform: capitalize;
                padding: 5px;
                margin: 5px;
                cursor: pointer;
                text-decoration: none;
                color: $blue;
                background-color: $white;
                font-weight: bold;
                text-align: center;
            }

            a:hover {
                text-decoration: none;
                color: $white;
                background-color: $blue;
                font-weight: bold;
            }

            a.router-link-active:link,
            a.router-link-active:visited,
            a.router-link-active:active,
            a.router-link-active:hover {
                text-decoration: none;
                color: $white;
                background-color: $blue;
                cursor: inherit;
                font-weight: bold;
            }
        }
    }
</style>
