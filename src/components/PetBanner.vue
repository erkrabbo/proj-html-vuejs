<template>
  <div class="banner">
    <div class="m-auto">
      <span>{{ banners[dataBanner].name }}</span>
      <h2>{{ banners[dataBanner].title }}</h2>
      <pet-button data-class="button-flat-white" :data-content="banners[dataBanner].button" />
    </div>
  </div>
</template>

<script>
import { banners } from './store'
import PetButton from './PetButton.vue'

export default {
  name: 'PetBanner.vue',
  props: {
    dataBanner: Number
  },
  components: {
    PetButton
  },
  computed: {
    banners () {
      return banners
    }
  }
}
</script>

<style scoped lang="scss">
  .banner{
    // background: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3));
    text-align: center;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    &.banner-0{
     background: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url('../assets/img/banner-3-2x-scaled.jpg');
     background-position: left;
     background-size: cover;
     button:hover{
      color: white;
      background:
      linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)),
      #77ab82;
     }
    }
    &.banner-1{
     background: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url('../assets/img/banner-8-2x.jpg');
     background-position: left;
    background-size: cover;
    }
    &.banner-2{
     background: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url('../assets/img/banner-9-2x.jpg');
     background-position: left;
    background-size: cover;
    }
  }
  .big{
    min-height: 500px;
  }
  .small{
    min-height: 400px;
    transition: transform .3s ease;
    &:hover{
      transform: scale(1.05);
    }
  }
</style>
