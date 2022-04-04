<template>
  <section>
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-auto">
          <h3>All time best-sellers</h3>
          <span>Items everyone loves</span>
        </div>
        <div class="col-auto">
          <button>
            ciao
          </button>
        </div>
      </div>
      <div class="row row-cols-4">
        <div class="col">
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
        </div>
        <div class="col">
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PetBestSellers'
}
</script>

<style>

</style>
