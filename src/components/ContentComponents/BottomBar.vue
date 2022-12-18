<template>
  <div class="row">
    <BotomBarButtonsCollection :buttons="bottomBar.buttonsCollection"></BotomBarButtonsCollection>
    <div class="bottom-bar col-12">
      <div class="row">
        <TabContent :tab-content="bottomBar.tabContent"></TabContent>
      </div>
    </div>
  </div>
</template>

<script>
import BotomBarButtonsCollection from "@/components/ContentComponents/BotomBarButtonsCollection";
import TabContent from "@/components/ContentComponents/TabContent";
export default {
  name: "BottomBar",
  components: {TabContent, BotomBarButtonsCollection},
  props: ['bottomBar']
}
</script>

<style scoped>

</style>