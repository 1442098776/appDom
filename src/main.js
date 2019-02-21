// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import store from './store'
// import {Header,Button,Search,Swipe, SwipeItem} from 'mint-ui'
import MintUI from 'mint-ui'
import "mint-ui/lib/style.css"
import mui from "./assets/mui/js/mui.js"
import "./assets/mui/css/mui.css"
import "./assets/mui/css/icons-extra.css"
import VuePreview from 'vue2-preview'


Vue.prototype.mui = mui

Vue.config.productionTip = false

Vue.use(MintUI)
Vue.use(VuePreview)
// Vue.component(Header.name,Header)
// Vue.component(Button.name,Button)
// Vue.component(Search.name,Search)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
