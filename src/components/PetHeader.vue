<template>
  <header>
    <div class="header-top">
      <img src="../assets/img/dark-pet-logo.png" width="200" alt="">
      <div class="badge">
        <SearchIcon />
        <input type="text" placeholder="Search...">
      </div>
      <span>Questions? Call us: 333333333333</span>
      <div>
        <UserIcon />
        <ShoppingBagIcon />
      </div>
    </div>
    <hr>
  </header>
</template>

<script>
// importo le icone che mi servono e le dichiaro come components
import { UserIcon, ShoppingBagIcon, SearchIcon } from 'vue-feather-icons'

export default {
  name: 'PetHeader',
  components: {
    UserIcon,
    ShoppingBagIcon,
    SearchIcon
  }
}
</script>

<style scoped lang="scss">
  .header-top{
    display: flex;
    align-items: center;
    height: 4rem;
    justify-content: space-around;
    .badge{
      border-radius: 1em;
      display: flex;
      align-items: center;
      background-color: lightgrey;
      overflow: hidden;
      input{
        border: 0;
        outline: 0;
        background-color: transparent;
      }
      svg{
        margin: 0 .5em;
        width: 1em
      }
    }
  }
  hr{
    padding: 0;
    border: 0;
    height: 1px;
    background-color: lightgrey;
  }
</style>
