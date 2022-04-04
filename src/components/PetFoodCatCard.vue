<template>
  <b-card class="pet-food-cat-card">
    <img :src="require('../assets/img/bg-transparent-3.png')" height="200" alt="" class="card-img-top">
    <!-- <img class="img-fluid dim" :src="require('../assets/img/' + dataFoodCat.img)" alt=""> -->
    <div class="card-img-overlay">
      <h2>{{ dataFoodCat.name }}</h2>
      <span>{{ dataFoodCat.dscription }} dog food</span>
    </div>
    <img class="img-fluid p-4" :src="require('../assets/img/' + dataFoodCat.img)" alt="">
    <pet-button data-class="button-white" :data-content="dataFoodCat.type +' shop food'" />
  </b-card>
</template>

<script>
import PetButton from '../components/PetButton.vue'

export default {
  name: 'PetFoodCatCard',
  components: {
    PetButton
  },
  props: {
    dataFoodCat: Object
  }
}
</script>

<style scoped lang="scss">
  .pet-food-cat-card{
    color: white;
    background-color: var(--JUMBOTRON_BG_COLOR);
    background-size: cover;
    background-position: top;
    .card-img-overlay{
      padding-top: 5rem;
    }
    transition: transform .4s ease;
    &:hover{
      transform: scale(1.030);
      filter: brightness(1.2);
    }
    // background-size: contain !important;
    // height: 550px;
  }
  .dim{
    opacity: 0;
  }
</style>
