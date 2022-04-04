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
