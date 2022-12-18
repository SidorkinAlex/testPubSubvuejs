<template>
  <div class="top-menu col">
      <button class="menu-button" v-for="(button, index) in TopMenu.buttons" :key="index">{{ button.value }}</button>
  </div>
</template>

<script>
export default {
  name: "TopMenu",
  props:["TopMenu"]
}
</script>

<style scoped>

</style>