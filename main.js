import App from './App'
import api from '@/common/js/index.js'
//这样才行，我也不知道为什么，反正就是需要多一个 * as

// import wx from '@/jweixin-module/index.js'
//配置公共方法
import common from './common/common.js'
Vue.prototype.$noMultipleClicks = common.noMultipleClicks;
// #ifndef VUE3
import Vue from 'vue'



Vue.prototype.$api = api
// Vue.prototype.$wx=wx
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif
// main.js

// main.js
// 全局混入分享功能
import share from '@/common/js/share.js'
Vue.mixin(share)
import uView from "uview-ui";
Vue.use(uView);

// main.js




// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif