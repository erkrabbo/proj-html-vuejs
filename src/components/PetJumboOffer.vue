<template>
  <section class="jumbo-offer-sticky">
    <img src="../assets/img/food-transparent-5-200x112.png" alt="">
    <span>Get $25 OFF your first purchase of our homemade pet food!</span>
    <a href="#">Visit the shop!</a>
  </section>
</template>

<script>
export default {
  name: 'PetJumboOffer'
}
</script>

<style scoped lang="scss">
  .jumbo-offer-sticky{
    color: var(--TEXT_WHITE);
    background-color: var(--JUMBOTRON_BG_COLOR);
    background-image: var(--JUMBOTRON_BG_IMAGE);
    display: flex;
    align-items: center;
    justify-content: center;
    span{
      margin: 0 2em;
      font-size: 1.2rem;
    }
    img{
      height: 100%;
    }
    a {
      color: var(--GREEN_CONTRAST_TEXT);
      font-size: 1.2rem;
    }
  }
</style>
