<template>
  <section class="jumbotron">
      <ul>
        <li><MapIcon /><span class="bold">&nbsp;International&nbsp;</span>shipping services</li>
        <li><ClockIcon /> See our <span class="bold">&nbsp;store hours&nbsp;</span> and services</li>
        <li><CheckIcon /> We price match to give you the <span class="bold">&nbsp;best deals</span></li>
      </ul>
        <div class="hero">
          <span>FIND THE BEST ANIMAL SUPPLIES</span>
          <p>We know animals are a part of your family, let us help take care of them.</p>
          <pet-white-button/>
        </div>
      <!-- <img src="../assets/img/banner-5-2x-scaled.jpg" alt=""> -->
  </section>
</template>

<script>
import { MapIcon, ClockIcon, CheckIcon } from 'vue-feather-icons'
import PetWhiteButton from './PetWhiteButton.vue'
export default {
  name: 'PetJumbo',
  components: {
    MapIcon,
    ClockIcon,
    CheckIcon,
    PetWhiteButton
  }
}
</script>

<style scoped lang="scss">
  .jumbotron {
    color: var(--TEXT_WHITE);
    background-color: var(--JUMBOTRON_BG_COLOR);
    background-image: var(--JUMBOTRON_BG_IMAGE);
    .hero{
      padding: 3em 5em;
      background-color: black;
      background:
      linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)),
      var(--HERO_BANNER);
      background-position: center;
      background-size: cover;
      span{
        font-size: 15px;
        font-weight: 500;
      }
      p{
        font-size: 50px;
        max-width: 40%;
        margin: 1rem 0;
      }
    }
    img{
      width: 100%;
      filter: brightness(.8);
    }
  }
  ul{
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: .5em 0;
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
