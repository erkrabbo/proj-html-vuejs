<template>
  <section class="py-3">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-auto">
          <p class="green text-start m-0">All time best-sellers</p>
          <span class="fs-1">Items everyone loves</span>
        </div>
        <div class="col-auto">
          <pet-button data-class="button-white" data-content="View all products" />
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        <div v-for="(item, index) in dataBestSellers" :key="index" class="col">
          <div class="card h-100 border-0">
            <img :src="require('../assets/img/' + item.img)" :alt="item.name" class="card-img-top">
            <div class="card-body">
              <div class="card-text">
                <p>{{ item.name }}</p>
                <p v-if="item.sale">
                  <span class="discount-price">{{item.price}}</span>
                  <span>{{ item.discountPrice }}</span>
                </p>
                <span v-else >{{ item.price }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col">
          <div class="card">
            <img :src="require('../assets/img/product-21.jpg')" alt="" class="card-img-top">
            <div class="card-text">
              <h3>Transport cage</h3>
              <span>$25.00</span>
            </div>
          </div>
        </div> -->
        <!-- <div class="col">
          <div class="card">
            <img :src="require('../assets/img/product-21.jpg')" alt="" class="card-img-top">
            <div class="card-text">
              <h3>Transport cage</h3>
              <span>$25.00</span>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img :src="require('../assets/img/product-21.jpg')" alt="" class="card-img-top">
            <div class="card-text">
              <h3>Transport cage</h3>
              <span>$25.00</span>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import PetButton from './PetButton.vue'
export default {
  components: { PetButton },
  name: 'PetBestSellers',
  props: {
    dataBestSellers: Array
  }
}
</script>

<style scoped lang="scss">
  .green{
    color: green;
  }
  .discount-price{
    text-decoration: line-through;
    margin-right: 1em;
  }
</style>
