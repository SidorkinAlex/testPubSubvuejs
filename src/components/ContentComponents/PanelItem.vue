<template>
  <div class="panel">
    <div class="row align-items-center">
      <h2>
        {{ Panel.panelTitle }}
      </h2>
    </div>
    <div class="row" v-for="(row,roeNumber) in Panel.rows" :key="roeNumber">
      <FieldEdit v-if="row[0] !== ''" :field="row[0]"></FieldEdit>
      <FieldEdit v-if="row[1] !== ''" :field="row[1]"></FieldEdit>
    </div>
  </div>
</template>

<script>
import FieldEdit from "@/components/ContentComponents/FieldEdit";
export default {
  name: "PanelItem",
  components: {FieldEdit},
  props:['Panel']
}
</script>

<style scoped>

</style>