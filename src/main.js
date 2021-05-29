import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueParticles from 'vue-particles'
import Vcomp from './components/index'
import Toast from './components/toast'

import '@/assets/styles/base.scss'
import '@/assets/styles/common.scss'
import '@/assets/iconfont/iconfont.css'

Vue.use(vueParticles)
Vue.use(Vcomp)

//引入toastui-chart: https://github.com/nhn/tui.chart/tree/main/apps/vue-chart
import '@toast-ui/chart/dist/toastui-chart.min.css';
import { barChart } from '@toast-ui/vue-chart';
// Vue.use(barChart)  

Vue.config.productionTip = false

Vue.prototype.$Toast = Toast


router.beforeEach((to, from, next) => {
	if (to.meta.title) {
	  document.title = to.meta.title;
	}
	next();
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
