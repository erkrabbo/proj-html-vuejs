<template>
  <section>
    <div class="container">
      <h2 class="mb-5 text-white">Users Testimonials</h2>
      <div class="row row-cols-1 row-cols-lg-3 g-2">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <img width="100" :src="require('../assets/img/avatar-3.jpg')" alt="" class="rounded-circle">
              <div class="card-text">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ut, adipisci veniam provident possimus molestias.</p>
                <span>Lisa smith, Theme fusion</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <img width="100" :src="require('../assets/img/avatar-3.jpg')" alt="" class="rounded-circle">
              <div class="card-text">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ut, adipisci veniam provident possimus molestias.</p>
                <span>Lisa smith, Theme fusion</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <img width="100" :src="require('../assets/img/avatar-3.jpg')" alt="" class="rounded-circle">
              <div class="card-text">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ut, adipisci veniam provident possimus molestias.</p>
                <span>Lisa smith, Theme fusion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'PetUsersTestimonials'
}
</script>

<style scoped lang="scss">
  section{
    padding-top: 7rem;
    background: var(--JUMBOTRON_BG_IMAGE);
    background-color: var(--JUMBOTRON_BG_COLOR);
  }
</style>
