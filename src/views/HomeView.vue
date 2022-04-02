<template>
  <div id="app">
    <pet-jumbo />
    <pet-jumbo-offer />
  </div>
</template>

<script>
import PetJumbo from '../components/PetJumbo.vue'
import PetJumboOffer from '../components/PetJumboOffer.vue'

export default {
  name: 'App',
  components: {
    PetJumbo,
    PetJumboOffer
  }
}
</script>
