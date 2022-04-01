<template>
  <div id="app">
    <pet-header />
    <pet-nav />
    <pet-jumbo />
    <pet-jumbo-offer />
  </div>
</template>

<script>
import PetHeader from './components/PetHeader.vue'
import PetNav from './components/PetNav.vue'
import PetJumbo from './components/PetJumbo.vue'
import PetJumboOffer from './components/PetJumboOffer.vue'

export default {
  name: 'App',
  components: {
    PetHeader,
    PetNav,
    PetJumbo,
    PetJumboOffer
  }
}
</script>

<style lang="scss">
  @import url(https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;500;600;700&display=swap);

  *{
    border: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Work Sans', sans-serif;
    height: 100vh;
  }
</style>
