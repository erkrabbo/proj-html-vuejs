<template>
  <section>
    <div class="container text-center">
      <h2 class="text-center">Get the best tips&tricks</h2>
      <p class="text-center mb-5">Recent article</p>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        <div v-for="(article, index) in blogArticles" :key="index" class="col">
          <img :src="require('../assets/img/' + article.img)" alt="" class="card-img-top">
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
</style>
