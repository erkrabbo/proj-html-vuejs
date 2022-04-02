<template>
  <section class="shop-preview">
    <h2>Browse by category</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ex iste dolore eum aut possimus sit facilis?</p>
    <b-container>
      <b-row cols="4">
        <b-col v-for="(cat, index) in state.shopCategories" :key="index">
          {{ cat.img }}
          {{ cat.cat }}
          {{ cat.items.length }}
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import state from './store'
export default {
  name: 'PetShopPreview',
  computed: {
    state () {
      return state
    }
  },
  mounted () {
    console.log(state.shopCategories)
  }
}
</script>

<style scoped lang="scss">
  .shop-preview{
    padding: 4rem 2rem;
    text-align: center;
    p{
      max-width: 50%;
      margin: 2rem auto;
    }
  }
</style>
