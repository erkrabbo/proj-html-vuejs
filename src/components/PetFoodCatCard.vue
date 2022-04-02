<template>
  <b-card class="pet-food-cat-card"
    :img-src="require('../assets/img/' + dataFoodCat.img)"
    img-bottom
  >
    <h2>{{ dataFoodCat.name }}</h2>
    <span>{{ dataFoodCat.description }}</span>
    <!-- <img :src="require('../assets/img/' + dataFoodCat.img)" alt=""> -->
    <button>qui</button>
  </b-card>
</template>

<script>
export default {
  name: 'PetFoodCatCard',
  props: {
    dataFoodCat: Object
  }
}
</script>

<style scoped lang="scss">
  .pet-food-cat-card{
    color: white;
    background-color: var(--JUMBOTRON_BG_COLOR) !important;
    background: var(--JUMBOTRON_BG_IMAGE);
    background-position: top;
  }
</style>
