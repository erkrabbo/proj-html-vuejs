<template>
  <section data-aos="fade-up">
    <div class="container text-center">
      <h2 class="text-center">Get the best tips&tricks</h2>
      <p class="text-center mb-5">Recent article</p>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        <div v-for="(article, index) in blogArticles" :key="index" class="col">
          <div class="to-hover position-relative">
            <img :src="require('../assets/img/' + article.img)" alt="" class="card-img-top">
            <div class="hoverlay d-flex justify-content-center align-items-center">
              <span>ADD TO CART / QUICK VIEW</span>
            </div>
          </div>
          <div class="card-body px-4 text-start">
            <p class="fs-4 mb-1">{{ article.title }}</p>
            <small>{{ article.date }}</small>
          </div>
        </div>
      </div>
      <pet-button data-class="button-hover-green mt-5" data-content="Read more" />
    </div>
  </section>
</template>

<script>
import { blogArticles } from './store'
import PetButton from './PetButton.vue'

export default {
  name: 'PetBlog',
  components: {
    PetButton
  },
  computed: {
    blogArticles () {
      return blogArticles
    }
  }
}
</script>

<style scoped lang="scss">
  section{
    padding: 7rem 0;
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
