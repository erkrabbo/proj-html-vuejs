<template>
  <nav>
      <ul>
        <li>Home <ChevronDownIcon /></li>
        <li>Shop <ChevronDownIcon /></li>
        <li>About <ChevronDownIcon /></li>
        <li>Blog <ChevronDownIcon /></li>
        <li>Contact <ChevronDownIcon /></li>
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
