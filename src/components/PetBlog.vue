<template>
  <section>
    <div class="container">
      <h2>Get the best tips&tricks</h2>
      <span>Recent article</span>
      <div class="row row-cols-4">
        <div class="col">
          <img :src="require('../assets/img/blog-1.jpg')" alt="" class="card-img-top">
          <p>How to 'loose leash walk' your dog</p>
          <small>April 21st, 2020</small>
        </div>
        <div class="col">
          <img :src="require('../assets/img/blog-1.jpg')" alt="" class="card-img-top">
          <p>How to 'loose leash walk' your dog</p>
          <small>April 21st, 2020</small>
        </div>
        <div class="col">
          <img :src="require('../assets/img/blog-1.jpg')" alt="" class="card-img-top">
          <p>How to 'loose leash walk' your dog</p>
          <small>April 21st, 2020</small>
        </div>
        <div class="col">
          <img :src="require('../assets/img/blog-1.jpg')" alt="" class="card-img-top">
          <p>How to 'loose leash walk' your dog</p>
          <small>April 21st, 2020</small>
        </div>
      </div>
      <button> Read more</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PetBlog'
}
</script>

<style>

</style>
