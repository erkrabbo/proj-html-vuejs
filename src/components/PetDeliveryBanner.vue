<template>
  <section>
    <div class="container">
      <div class="row row-cols-2 row-cols-lg-4 text-center">
        <div class="col">
          <truck-icon class="icon" />
          <p>Free worldwide deliveries</p>
        </div>
        <div class="col">
          <map-icon class="icon" />
          <p>Find stores near you</p>
        </div>
        <div class="col">
          <dollar-sign-icon class="icon" />
          <p>Best prices guarranteed</p>
        </div>
        <div class="col">
          <credit-card-icon class="icon" />
          <p>All credit card accepted</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { TruckIcon, MapIcon, DollarSignIcon, CreditCardIcon } from 'vue-feather-icons'

export default {
  name: 'PetDeliveryBanner',
  components: {
    TruckIcon,
    MapIcon,
    DollarSignIcon,
    CreditCardIcon
  }
}
</script>

<style scoped>
  section{
    background: var(--JUMBOTRON_BG_IMAGE), var(--JUMBOTRON_BG_COLOR);
    color: white;
    padding: 3rem 0;
  }
  .icon{
    height: 80px;
    width: 60px;
  }
  .col{
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding: 3rem; */
  }
</style>
