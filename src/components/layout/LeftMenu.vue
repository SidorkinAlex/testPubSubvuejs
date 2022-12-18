<template>
  <div class="left-menu left col-3">
    <div class="" v-for="(button,index) in LeftMenu.buttons" :key="index">
      <button class="col-12">{{ button.value }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftMenu",
  props:['LeftMenu']
}
</script>
<style scoped>

</style>