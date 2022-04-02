<template>
  <nav>
    <ul>
      <li><router-link to="/">Home<ChevronDownIcon /></router-link></li>
      <li><router-link to="/shop">Shop<ChevronDownIcon /></router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/shopByBrand">Shop by brand<ChevronDownIcon /></router-link></li>
    </ul>
  </nav>
</template>

<script>
import { ChevronDownIcon } from 'vue-feather-icons'

export default {
  name: 'PetNav',
  components: {
    ChevronDownIcon
  }
}
</script>

<style scoped lang="scss">
  nav{
    position: sticky;
    top: 0;
    height: 3.5rem;
    background-color: var(--HEADER_BG);
    a {
      text-decoration: none;
      color: var(--NAV_LINK_TEXT);
      font-weight: var(--NAV_LINK_WEIGHT);
      font-size: var(--NAV_LINK_SIZE);
      display: flex;
      svg{
        height: 1em;
        align-self: end;
      }

      &.router-link-exact-active {
        color: var(--NAV_LINK_ACTIVE);
      }
    }
  }
  ul{
    display: flex;
    justify-content: center;
    li{
      padding: 1em;
      display: flex;
    }
  }
</style>
