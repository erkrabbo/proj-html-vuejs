<template>
  <scroll-loader data-aos="fade-up">
    <section class="text-start box">
      <div class="m-auto ms-0">
        <h2>Join our newsletter</h2>
        <p class="w-50">Volutpat vel turpis nulla lorem sed semper. Aliquam sagittis sem libero viverra vehicula nullam ut nisl.</p>
        <form @submit.prevent>
          <input type="mail" placeholder="Insert your email...*">
          <pet-button data-class="button-hover-green" data-content="subscribe" />
        </form>
      </div>
    </section>
  </scroll-loader>
</template>

<script>
import PetButton from './PetButton.vue'

export default {
  name: 'PetNewsletter',
  components: {
    PetButton
  }
}
</script>

<style scoped lang="scss">
  section{
    position: relative;
    width: 90%;
    margin: 0 auto;
    margin-top: -4rem;
    padding: 7rem;
    background: url('../assets/img/food-transparent-18.png'), linear-gradient(white, rgba(0,0,0,.3)), white;
    background-position: right;
    background-repeat: no-repeat;
    background-size: contain;
    min-height: 500px;
    display: flex;
  }
  input{
    border-radius: 2em;
    height: 3em;
    padding: 1em;
    margin-right: 1.5em
  }

  // .fade-enter-active,
  // .fade-leave-active {
  //   transition: opacity 0.5s ease;
  // }

  // .fade-enter-from,
  // .fade-leave-to {
  //   opacity: 0;
  // }
</style>
