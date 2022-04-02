<template>
  <div id="app">
    <pet-header />
    <pet-nav />
    <router-view/>
  </div>
</template>

<script>
import PetHeader from './components/PetHeader.vue'
import PetNav from './components/PetNav.vue'

export default {
  name: 'App',
  components: {
    PetHeader,
    PetNav
  }
}
</script>

<style lang="scss">
  @import './assets/CSS/style.scss';
  //https://avada.theme-fusion.com/pet-supplies/
  //font-family: 'Source Serif Pro', serif;
  // font-family: 'Work Sans', sans-serif;
  //https://vue-feather-icons.egoist.sh/
</style>
