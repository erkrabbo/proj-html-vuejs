<template>
  <section>
    <div class="container">
      <h2 class="text-center">Get the best tips&tricks</h2>
      <p class="text-center mb-5">Recent article</p>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        <div v-for="(article, index) in blogArticles" :key="index" class="col">
          <img :src="require('../assets/img/' + article.img)" alt="" class="card-img-top">
          <div class="card-body px-4">
            <p class="fs-4 mb-1">{{ article.title }}</p>
            <small>{{ article.date }}</small>
          </div>
        </div>
      </div>
      <button> Read more</button>
    </div>
  </section>
</template>

<script>
import { blogArticles } from './store'

export default {
  name: 'PetBlog',
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
