<template>
  <div class="field left col-6">
    <div class="row">
      <div class="col-4">{{ field.lbl }}</div>
      <div class="col-8"><input :id="field.name" type="text" placeholder="инпут" class="col-12" :value="field.value"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FieldEdit",
  props:['field']
}
</script>

<style scoped>

</style>