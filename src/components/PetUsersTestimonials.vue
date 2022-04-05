<template>
  <section class="text-center">
    <h2 class="pt-5 text-white">Users Testimonials</h2>
    <div class="container">
      <div class="row row-cols-1 row-cols-lg-3 gx-0 gy-2">
        <div v-for="(user, index) in usersTestimonials" :key="index" class="col">
          <div class="card py-5">
            <!-- <img class="card-img-top" height="250" :src="require('../assets/img/bg-transparent-3.png')" alt=""> -->
            <div class="card-body">
              <img width="100" :src="require('../assets/img/' + user.img)" :alt="user.name" class="rounded-circle mb-5">
              <div class="card-text">
                <p>{{ user.text }}</p>
                <span>{{ user.name }}, Theme fusion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { usersTestimonials } from './store'

export default {
  name: 'PetUsersTestimonials',
  computed: {
    usersTestimonials () {
      return usersTestimonials
    }
  }
}
</script>

<style scoped lang="scss">
  section{
    // padding-top: 7rem;
    background: var(--JUMBOTRON_BG_IMAGE) top;
    background-position: center top;
    background-repeat: repeat-x;
    background-color: var(--JUMBOTRON_BG_COLOR);
    position: relative;
  }
  .card{
    // padding-top: 7rem;
    background: transparent;
    border: 0;
    color: white;
    // margin-top: -4rem;
  }
  .overlay{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    img{
      // width: 100%;
      max-height: 250px;
      object-fit: cover;
      object-position: top;
    }
  }
</style>
