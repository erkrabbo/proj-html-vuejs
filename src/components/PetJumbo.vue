<template>
  <section class="jumbotron">
    <ul>
      <li data-aos="fade-right"><MapIcon /><p><span class="bold">&nbsp;International&nbsp;</span>shipping services</p></li>
      <li data-aos="fade-right" class="d-none d-lg-flex"><ClockIcon /> <p>See our <span class="bold">&nbsp;store hours&nbsp;</span> and services</p></li>
      <li data-aos="fade-right" class="d-none d-lg-flex"><CheckIcon /><p>We price match to give you the <span class="bold">&nbsp;best deals</span></p></li>
    </ul>
    <div class="hero">
      <span data-aos="fade-right">FIND THE BEST ANIMAL SUPPLIES</span>
      <p data-aos="fade-right">We know animals are a part of your family, let us help take care of them.</p>
      <pet-button data-aos="fade-right" data-class="button-white" data-content="Learn more about us"/>
    </div>
      <!-- <p>We price match to give you the <span class="bold">&nbsp;best deals</span></p> -->
    <!-- <img src="../assets/img/banner-5-2x-scaled.jpg" alt=""> -->
  </section>
</template>

<script>
import { MapIcon, ClockIcon, CheckIcon } from 'vue-feather-icons'
import PetButton from './PetButton.vue'
export default {
  name: 'PetJumbo',
  components: {
    MapIcon,
    ClockIcon,
    CheckIcon,
    PetButton
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
      linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)),
      var(--HERO_BANNER);
      background-position: center;
      background-size: cover;
      span{
        font-size: 15px;
        font-weight: 500;
      }
      p{
        font-size: 3.5rem;
        max-width: 50%;
        margin: 1rem 0;
        font-family: 'Source Serif Pro', serif;
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
    margin: 0;
    li{
      padding: 1em;
      // vertical-align: baseline;
      display: flex;
      align-items: center;
      p{
        margin: 0;
      }
      svg{
        height: 1em;
        // align-self: center;
      }
    }
  }
  button{
    margin: 2rem 0;
    font-weight: 500;
    font-size: .9rem;
  }
</style>
