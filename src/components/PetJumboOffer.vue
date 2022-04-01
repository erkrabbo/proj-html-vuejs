<template>
  <div class="jumbo-offer-sticky">
    <img src="../assets/img/food-transparent-5-200x112.png" alt="">
    <span>Get $25 OFF your first purchase of our homemade pet food!</span>
    <a href="#">Visit the shop!</a>
  </div>
</template>

<script>
export default {
  name: 'PetJumboOffer'
}
</script>

<style scoped lang="scss">
  .jumbo-offer-sticky{
    background-color: blueviolet;
    background-image: url('../assets/img/bg-transparent-3.png');
    display: flex;
    align-items: center;
    justify-content: center;
    span{
      margin: 0 2em;
    }
    img{
      height: 100%;
    }
  }
</style>
