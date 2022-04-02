<template>
  <main class="home">
    <pet-jumbo />
    <pet-jumbo-offer />
    <pet-shop-preview />
  </main>
</template>

<script>
import PetJumbo from '../components/PetJumbo.vue'
import PetJumboOffer from '../components/PetJumboOffer.vue'
import PetShopPreview from '../components/PetShopPreview.vue'

export default {
  components: {
    PetJumbo,
    PetJumboOffer,
    PetShopPreview
  }
}
</script>
