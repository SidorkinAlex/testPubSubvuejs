<template>
  <div class="button-bar col-12">
   {{text}}
  </div>
</template>

<script>
export default {
  name: "TabContent",
  props:["TabContent"],
  mounted () {
    this.text = this.TabContent.Text

    this._subpanelUpdate = (event) => {
    console.log(event)
      this.text = event.value
    }
    this.$root.$on("subpanelUpdate",this._subpanelUpdate.bind(this));
  },
  beforeDestroy() {
    this._subpanelUpdate && this.$root.$off("subpanelUpdate",this._subpanelUpdate);
  },
  data() {
    return {
      text:"",
    }
  }
}


</script>

<style scoped>

</style>