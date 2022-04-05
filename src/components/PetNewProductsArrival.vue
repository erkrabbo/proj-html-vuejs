<template>
  <section>
    <div class="container text-center">
      <h2>New products arrival</h2>
      <p>latest products</p>
      <div class="row row-cols-1 row-cols-md-3">
        <div v-for="(product, index) in newProducts" :key="index" class="col">
          <div class="card border-0">
            <div class="to-hover position-relative">
              <img :src="require('../assets/img/' + product.img)" alt="" class="card-img-top">
              <div class="hoverlay d-flex justify-content-center align-items-center">
                <span>ADD TO CART / QUICK VIEW</span>
              </div>
            </div>
            <p>{{ product.name }}</p>
            <div v-if="product.sale">
              <p class="sale-badge">Sale!</p>
              <span class="deprecated me-2">{{ product.price }}</span>
              <span>{{ product.discountPrice }}</span>
            </div>
            <span v-else>{{ product.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { newProducts } from './store'

export default {
  name: 'PetNewProductsArrival',
  computed: {
    newProducts () {
      return newProducts
    }
  }
}
</script>

<style scoped lang="scss">
  section{
    padding: 7rem 0;
  }
  .deprecated{
    text-decoration: line-through;
  }
  .sale-badge{
    position: absolute;
    top: .5em;
    left: .5em;
    height: 3em;
    width: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: white;
    background-color: darkgreen;
    // padding: .5em;
  }
  .to-hover:hover .hoverlay{
    opacity: 1;
  }
  .hoverlay{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: .5em;
    font-size: .8rem;

    color: white;
    opacity: 0;
    background-color: #6e3b1566;
    transition: opacity .5s ease;
  }
</style>
