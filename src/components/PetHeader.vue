<template>
  <header>
    <div class="header-top">
      <img src="../assets/img/dark-pet-logo.png" width="200" alt="">
      <input type="text" placeholder="Search...">
      <span>Questions? Call us: 333333333333</span>
      <div>
        <UserIcon />
        <ShoppingBagIcon />
      </div>
    </div>
    <hr>
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
  </header>
</template>

<script>
// importo le icone che mi servono e le dichiaro come components
import { UserIcon, ShoppingBagIcon, ChevronDownIcon } from 'vue-feather-icons'

export default {
  name: 'PetHeader',
  components: {
    UserIcon,
    ShoppingBagIcon,
    ChevronDownIcon
  }
}
</script>

<style scoped lang="scss">
  .header-top{
    display: flex;
    align-items: center;
    height: 4rem;
    justify-content: space-around;
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
