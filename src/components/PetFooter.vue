<template>
  <footer>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 gy-2">
        <div class="col col-md-3 d-flex flex-column align-items-center">
          <div class="mb-4">
            <img class="img-fluid" :src="require('../assets/img/mobile-light-pet-logo-2x-200x52.png')" alt="">
          </div>
          <p class="d-flex flex-column fs-5">
            <small>
              1234 Avada Avenue Avadaville
            </small>
            <small>
              info@your-company.com
            </small>
            <small>
              Call us: (1) 234 5678
            </small>
          </p>
        </div>
        <div class="col col-md-6 d-flex justify-content-center">
          <ul class="list-unstyled">
            <li class="p-0 fs-4"><span>Shop by brand</span></li>
            <li>Bed</li>
            <li>Food</li>
            <li>Toys</li>
            <li>Transport</li>
          </ul>
          <ul class="list-unstyled">
            <li class="p-0 fs-4"><span>Useful links</span></li>
            <li>My account</li>
            <li>Orders</li>
            <li>Checkout</li>
            <li>Cart</li>
          </ul>
        </div>
        <div class="col col-md-3 form">
          <form @submit.prevent class="d-flex flex-column h-100 justify-content-center">
            <label for="email" class="fs-4 mb-4">Subscribe to our newsletter</label>
            <input name="email" type="email" class="footer-input mb-4" placeholder="Insert your email...*">
            <pet-button data-class="button-hover-green" data-content="Subscribe" />
          </form>
        </div>
      </div>
      <div class="row footer-bot">
        <div class="col d-flex justify-content-center">
          <ul class="router-footer">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Shop</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <small>© Copyright 2012 - 2022 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress</small>
    </div>
  </footer>
</template>

<script>
import PetButton from './PetButton.vue'

export default {
  name: 'PetFooter',
  components: {
    PetButton
  }
}
</script>

<style scoped lang="scss">
  footer{
    background-color: var(--JUMBOTRON_BG_COLOR);
    color: white;
    padding-top: 3rem;
    .list-unstyled{
      margin-right: 2rem;
      width: 50%;
      li{
        padding: .7em;
        padding-left: 0;
      }
    }
    .router-footer{
      margin: 2rem 0;
      display: flex;
      list-style: none;
      li{
        padding: .5em;
      }
    }
    .footer-bot{
      border-top: 1px solid lightgrey;
      margin-top: 2rem;
    }
    form{
      padding: 2em 2em;
      background: var(--JUMBOTRON_BG_IMAGE), rgba(70, 150, 59, 0.1);
      height: 100%;
      border-radius: .5em;

      // background-size: cover;
    }
    .footer-bottom{
      padding: 2em;
      background-color: black;
      color: white;
      text-align: center;
    }
    .footer-input{
      border-radius: 2em;
      height: 3em;
      padding: 1em;
    }
  }
</style>
