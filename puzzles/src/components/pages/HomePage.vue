<template>
    <div>
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

        <show-featured :category="featuredCategory"></show-featured>
    </div>
</template>

<script>
    import ShowFeatured from "./../ShowFeatured.vue";

    export default {
        name: "HomePage",
        components: { ShowFeatured },
        data: function() {
            return {
                featuredCategory: "box"
            };
        }
    };
</script>

<style scoped>
    .my-info {
        font-size: x-large;
    }
</style>
