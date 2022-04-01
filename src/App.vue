<template>
  <div id="app">
    <pet-header />
    <pet-nav />
    <pet-jumbo />
  </div>
</template>

<script>
import PetHeader from './components/PetHeader.vue'
import PetNav from './components/PetNav.vue'
import PetJumbo from './components/PetJumbo.vue'

export default {
  name: 'App',
  components: {
    PetHeader,
    PetNav,
    PetJumbo
  }
}
</script>

<style lang="scss">
  @import url(https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,300;0,400;1,600&display=swap);

  *{
    border: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Source Serif Pro', serif;
    height: 100vh;
  }
  nav{
    position: sticky;
    top: 0;
    background-color: white;
  }
</style>
