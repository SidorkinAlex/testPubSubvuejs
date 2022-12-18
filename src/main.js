import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false
Object.defineProperty(Vue.prototype,"$bus",{
  get: function() {
    return this.$root.bus;
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
