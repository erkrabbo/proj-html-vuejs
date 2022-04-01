<template>
  <section class="jumbotron">
      <ul>
        <li><MapIcon /> International shipping services</li>
        <li><ClockIcon /> See our store hours and services</li>
        <li><CheckIcon /> We price match to give you the best deals</li>
      </ul>
  </section>
</template>

<script>
import { MapIcon, ClockIcon, CheckIcon } from 'vue-feather-icons'

export default {
  name: 'PetJumbo',
  components: {
    MapIcon,
    ClockIcon,
    CheckIcon
  }
}
</script>

<style scoped lang="scss">
  .jumbotron {
    height: 100vh;
    background-color: blueviolet;
    background-image: url('../assets/img/bg-transparent-3.png');
  }
  ul{
    display: flex;
    justify-content: space-around;
    list-style: none;
    li{
      padding: 1em;
      display: flex;
      cursor: pointer;
      svg{
        height: 1em;
      }
    }
  }
</style>
