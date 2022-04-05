<template>
  <div class="banner">
    <div class="m-auto">
      <span>FIND THE BEST ANIMAL SUPPLIES</span>
      <h2>Popular accessories</h2>
      <button>
        View all toys accessories
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PetBanner.vue'
}
</script>

<style scoped lang="scss">
  .banner{
    background: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)),
    url('../assets/img/banner-8-2x.jpg');
    background-position: left;
    background-size: cover;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .big{
    min-height: 500px;
  }
  .small{
    min-height: 300px;
    transition: transform .3s ease;
    &:hover{
      transform: scale(1.05);
    }
  }
</style>
