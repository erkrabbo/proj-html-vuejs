<template>
  <button>
    Learn more about us
  </button>
</template>

<script>
export default {
  name: 'PetWhiteButton'
}
</script>

<style lang="scss" scoped>
  button{
    background-color: white;
    border-radius: 2em;
    color: black;
    padding: .8em 1.3em;
    &:hover{
      color: white;
      background:
      linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)),
      #77ab82;
    }
  }
</style>
