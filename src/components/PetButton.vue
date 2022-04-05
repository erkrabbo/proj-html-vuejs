<template>
  <button :class="dataClass">
    {{ dataContent }}
  </button>
</template>

<script>
export default {
  name: 'PetButton',
  props: {
    dataClass: String,
    dataContent: String
  }
}
</script>
<style lang="scss" scoped>
  .button-white{
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
  .button-flat-green{
    background-color: darkgreen;
    border-radius: 2em;
    color: white;
    padding: .8em 1.3em;
  }
  .button-flat-white{
    background-color: white;
    border-radius: 2em;
    color: black;
    padding: .8em 1.3em;
  }
  .button-hover-green{
    background-color: darkgreen;
    border-radius: 2em;
    color: white;
    padding: .8em 1.3em;
    &:hover{
      background:
      linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)), darkgreen;
    }
  }
</style>
