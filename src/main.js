import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui' //引入js
import 'element-ui/lib/theme-chalk/index.css'//引入css
import Cookies from 'js-cookie'; //引入cookie操作依赖
import router from './router/index'


Vue.use(Element),
Vue.config.productionTip = false


new Vue({
  Element,
  Cookies,
  render: h => h(App),
  router:router,
  template:'<app-vue></app-vue>'

}).$mount('#app')
