<template>
  <section class="jumbo-offer-sticky">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-4 order-1 order-sm-0 text-center">
          <img class="img-fluid" src="../assets/img/food-transparent-5-200x112.png" alt="">
        </div>
        <div class="col d-flex align-items-center">
          <span class="m-0">Get $25 OFF your first purchase of our homemade pet food! <a class="ms-4" href="#">Visit the shop!</a></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PetJumboOffer'
}
</script>

<style scoped lang="scss">
  .jumbo-offer-sticky{
    position: sticky;
    z-index: 19;
    top: 3rem;
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
  @media screen and (max-width: 582.40px) {
    .jumbo-offer-sticky{
      top: 6.5rem;
    }
  }
</style>
