<template>
  <div class="button-collection col-12">
    <button class="button-collection-item" v-for="(button,item) in buttons.buttons" :key="item" @click="sendBusMessage(button)">{{ button.value }}</button>

  </div>
</template>

<script>
export default {
  name: "BotomBarButtonsCollection",
  props:["buttons"],
  methods:{
    sendBusMessage(button){
      this.$root.$emit('subpanelUpdate',button)
    }
  }
}

</script>

<style scoped>

</style>