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
</style>
