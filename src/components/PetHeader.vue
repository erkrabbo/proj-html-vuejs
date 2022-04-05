<template>
  <header>
    <div class="container h-100" data-aos="fade-right">
      <div class="row row-cols-4 h-100 flex-wrap h-100 py-2 justify-content-center">
        <div class="col-10 col-md-6 col-lg-3 d-flex align-items-center justify-content-center"><img src="../assets/img/dark-pet-logo.png" class="logo" alt=""></div>
        <div class="col-auto col-md-6 col-lg-4 d-flex align-items-center">
          <div class="badge">
            <SearchIcon />
            <input type="text" placeholder="Search...">
          </div>
        </div>
        <div class="col-10 col-md-6 col-lg-auto d-flex align-items-center justify-content-center m-auto"><span><span class="bold">Questions?&nbsp;</span>Call us : 1.800.123.4567</span></div>
        <div class="col-6 col-md-6 col-lg-auto d-flex align-items-center justify-content-end ms-auto"><UserIcon />
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
.logo{
  max-width: 100%;
}
.container{
  height: 100%;
  align-items: center;
}
.badge{
  // flex-grow: 1;
  // flex-shrink: 0;
  border-radius: 3em;
  display: flex;
  align-items: center;
  background-color: var(--LIGHT_BG);
  overflow: hidden;
  color: black;
    input{
      border: 0;
      outline: 0;
      padding: .5em;
      height: 3em;
      padding-right: 1em;
      width: 50ch;
      background-color: transparent;
    }
    svg{
      margin: 0 .5em;
      width: 1.5em
    }
  }
  header{
    align-items: center;
    // height: 4rem;
    border-bottom: 1px solid lightgrey;
  }
</style>
