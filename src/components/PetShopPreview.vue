<template>
  <section class="shop-preview">
    <h2>Browse by category</h2>
    <p class="intro">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ex iste dolore eum aut possimus sit facilis?</p>
    <b-container>
      <b-row cols="1" cols-md="2" cols-lg="4">
        <b-col v-for="(cat, index) in shopCategories" :key="index">
          <b-card
            :img-src="require('../assets/img/' + cat.img)"
            img-top
            class="border-0">
            <b-card-text>
              {{ cat.cat }}
              ({{ cat.items.length }})
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { shopCategories } from './store'
// import PetButton from './PetButton.vue'
// import PetFoodCatCard from './PetFoodCatCard.vue'
// import PetBestSellers from './PetBestSellers.vue'
// import PetUsersTestimonials from './PetUsersTestimonials.vue'
// import PetNewsletter from './PetNewsletter.vue'
// import PetBlog from './PetBlog.vue'
// import PetBanner from './PetBanner.vue'
// import PetNewProductsArrival from './PetNewProductsArrival.vue'

export default {
  name: 'PetShopPreview',
  // components: {
  // PetButton,
  // PetFoodCatCard,
  // PetBestSellers,
  // PetUsersTestimonials,
  // PetNewsletter,
  // PetBlog,
  // PetBanner,
  // PetNewProductsArrival
  // },
  computed: {
    shopCategories () {
      return shopCategories
    }
  }
  // mounted () {
  //   console.log(foodCategories)
  // }
  // methods: {
  //   getImg (str) {
  //     return require('../assets/img/' + str)
  //   }
  // },
}
</script>

<style scoped lang="scss">
  .shop-preview{
    // padding: 4rem 2rem;
    text-align: center;
    .intro{
      max-width: 50%;
      margin: 2rem auto;
    }
    // .hero{
    //   background: linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url('../assets/img/banner-3-2x-scaled.jpg');
    //   background-position: center;
    //   background-size: cover;
    //   padding: 10rem 0;
    //   color: white;
    //   p{
    //     font-size: 3rem;
    //     // max-width: 50%;
    //     margin-bottom: 2rem;
    //   }
    // }
  }
</style>
