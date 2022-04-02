<template>
  <nav>
    <ul>
      <li v-for="(link, index) in navLinks" :key="index"><router-link :to="link.path">{{ link.name }}<ChevronDownIcon v-if="link.chev" /></router-link></li>
    </ul>
  </nav>
</template>

<script>
import { NAV_LINKS } from '../router/index.js'
import { ChevronDownIcon } from 'vue-feather-icons'

export default {
  name: 'PetNav',
  components: {
    ChevronDownIcon
  },
  computed: {
    navLinks () {
      return NAV_LINKS
    }
  }
}
</script>

<style scoped lang="scss">
  nav{
    position: sticky;
    z-index: 20;
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
