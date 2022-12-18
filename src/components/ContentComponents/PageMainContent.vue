<template>
  <div class="page-content col-9">
    <div class="panel-collection">
      <div v-for="(panelItem,item) in PanelCollection.panels" :key="item" >
        <PanelItem :panel="panelItem"></PanelItem>
      </div>
    </div>
  </div>
</template>

<script>
import PanelItem from "@/components/ContentComponents/PanelItem";
export default {
  name: "PageMainContent",
  components: {PanelItem},
  props:['PanelCollection']
}
</script>

<style scoped>

</style>