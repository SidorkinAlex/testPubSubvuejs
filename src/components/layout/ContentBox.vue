<template>
  <div class="content left col-9">
    <div class="row">
      <div class="title col-12">
        <div class="row align-items-center">
          <h1>{{ TitleComponent }}</h1>
        </div>
      </div>
      <PageMainContent :panel-collection="ContentBox.panelCollection"></PageMainContent>
      <RightPanel></RightPanel>
      <BottomBar :bottom-bar="ContentBox.bottomBar"></BottomBar>

    </div>
  </div>
</template>

<script>
import PageMainContent from "@/components/ContentComponents/PageMainContent";
import RightPanel from "@/components/ContentComponents/RightPanel";
import BottomBar from "@/components/ContentComponents/BottomBar";
export default {
  name: "ContentBox",
  components: {BottomBar, RightPanel, PageMainContent},
  props:["ContentBox"],
  data() {
    return{
      TitleComponent:"",
    }
  },
  mounted () {
    this.TitleComponent = this.ContentBox.title

    this._subpanelUpdate = (event) => {
      console.log(event)
      this.TitleComponent = event.value
    }
    this.$root.$on("subpanelUpdate",this._subpanelUpdate.bind(this));
  },
  beforeDestroy() {
    this._subpanelUpdate && this.$root.$off("subpanelUpdate",this._subpanelUpdate);
  },
}
</script>

<style scoped>

</style>