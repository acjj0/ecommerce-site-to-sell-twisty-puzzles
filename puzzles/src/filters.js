import Vue from "vue";

// https://vuejs.org/v2/guide/filters.html
Vue.filter("productImage", function(slug) {
    try {
        return require("" + "./assets/images/products/" + slug + ".jpg");
    } catch (e) {
        return require("./assets/images/image-not-available.jpg");
    }
});

Vue.filter("productThumb", function(slug) {
    try {
        return require("" + "./assets/images/thumbnails/thumb." + slug + ".jpg");
    } catch (e) {
        return require("./assets/images/image-not-available.jpg");
    }
});
