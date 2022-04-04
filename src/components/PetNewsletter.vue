<template>
  <section class="text-start">
    <div class="m-auto ms-0">
      <h2>Join our newsletter</h2>
      <p class="w-50">Volutpat vel turpis nulla lorem sed semper. Aliquam sagittis sem libero viverra vehicula nullam ut nisl.</p>
      <form @submit.prevent>
        <input type="mail" placeholder="Insert your email...*">
        <button>
          subscribe
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PetNewsletter'
}
</script>

<style scoped lang="scss">
  section{
    width: 90%;
    margin: 0 auto;
    margin-top: -2.5rem;
    padding: 2rem;
    background: url('../assets/img/food-transparent-18.png'), linear-gradient(white, rgba(0,0,0,.3)), white;
    background-position: right;
    background-repeat: no-repeat;
    background-size: contain;
    min-height: 400px;
    display: flex;
  }
</style>
