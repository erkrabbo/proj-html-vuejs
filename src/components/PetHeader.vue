<template>
  <header>
    <div class="container h-100">
      <div class="row row-cols-4h-100 flex-wrap h-100">
        <div class="col-auto d-flex align-items-center me-3"><img src="../assets/img/dark-pet-logo.png" class="img-fluid" width="230 " alt=""></div>
        <div class="col-auto d-flex align-items-center">
          <div class="badge ms-5">
            <SearchIcon />
            <input type="text" placeholder="Search...">
          </div>
        </div>
        <div class="col-auto d-flex align-items-center m-auto"><span><span class="bold">Questions?&nbsp;</span>Call us : 1.800.123.4567</span></div>
        <div class="col-auto d-flex align-items-center justify-content-end ms-auto"><UserIcon />
        <ShoppingBagIcon /></div>
      </div>
    </div>
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
.container{
  height: 100%;
  align-items: center;
}
.badge{
  flex-grow: 1;
  flex-shrink: 0;
  border-radius: 3em;
  display: flex;
  align-items: center;
  background-color: var(--LIGHT_BG);
  overflow: hidden;
    input{
      border: 0;
      outline: 0;
      height: 3.5em;
      padding-right: 1em;
      width: 50ch;
      background-color: transparent;
    }
    svg{
      margin: 0 .5em;
      width: 1em
    }
  }
  header{
    align-items: center;
    height: 4rem;
    border-bottom: 1px solid lightgrey;
  }
</style>
