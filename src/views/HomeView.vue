<template>
  <main class="home">
    <pet-jumbo />
    <pet-jumbo-offer />
    <pet-shop-preview />
    <b-container>
      <b-row class="g-3" cols="2" cols-md="3">
          <b-col v-for="(foodCat, index) in foodCategories" :key="index">
            <pet-food-cat-card :data-food-cat="foodCat" />
          </b-col>
      </b-row>
    </b-container>
    <section class="py-3">
        <pet-banner class="big"/>
    </section>
    <pet-best-sellers :data-best-sellers="bestSellers" />
    <pet-users-testimonials class="pb-5" />
    <pet-newsletter />
    <pet-blog />
    <section class="d-flex">
      <pet-banner class="small"/>
      <pet-banner class="small"/>
    </section>
    <b-container>
      <pet-new-products-arrival/>
    </b-container>
  </main>
</template>

<script>
import { foodCategories, bestSellers } from '../components/store'
import PetJumbo from '../components/PetJumbo.vue'
import PetJumboOffer from '../components/PetJumboOffer.vue'
import PetShopPreview from '../components/PetShopPreview.vue'
import PetFoodCatCard from '../components/PetFoodCatCard.vue'
import PetBanner from '../components/PetBanner.vue'
import PetBestSellers from '../components/PetBestSellers.vue'
import PetUsersTestimonials from '../components/PetUsersTestimonials.vue'
import PetNewsletter from '../components/PetNewsletter.vue'
import PetBlog from '../components/PetBlog.vue'
import PetNewProductsArrival from '../components/PetNewProductsArrival.vue'

export default {
  components: {
    PetJumbo,
    PetJumboOffer,
    PetShopPreview,
    PetFoodCatCard,
    PetBanner,
    PetBestSellers,
    PetUsersTestimonials,
    PetNewsletter,
    PetBlog,
    PetNewProductsArrival
  },
  computed: {
    foodCategories () {
      return foodCategories
    },
    bestSellers () {
      return bestSellers
    }
  }
}
</script>
