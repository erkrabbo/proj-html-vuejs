<template>
  <nav>
      <ul>
        <li>Home <ChevronDownIcon /></li>
        <li>Shop <ChevronDownIcon /></li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>Shop by brand <ChevronDownIcon /></li>
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
    background-color: white;
  }
  ul{
    list-style: none;
    display: flex;
    justify-content: center;
    li{
      padding: 1em;
      display: flex;
      cursor: pointer;
      svg{
        height: 1em;
        align-self: end;
      }
    }
  }
</style>
