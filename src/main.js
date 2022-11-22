import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "vis/dist/vis.css";
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vuetify from './plugins/vuetify'
Vue.use(ElementUI);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  vuetify,

  render: h => h(App)
}).$mount('#app')
