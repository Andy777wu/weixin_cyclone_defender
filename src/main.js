// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 按需引入mint-ui
import { 
  Header,
  Tabbar,
  TabItem,
  Swipe,
  SwipeItem,
  DatetimePicker,
  Popup,
  Navbar,
  TabContainer,
  TabContainerItem,
  Button,
  Checklist 
} from 'mint-ui';
import 'mint-ui/lib/style.css'
// 引人样式
import './assets/css/base.css'
import './assets/css/overwrite.css'
// import axios from 'axios'
// 权限控制 路由拦截
import './utils/permissin'

// 引入v-tap
import vueTap from 'v-tap';
//  公众号标题
import vueWechatTitle from "vue-wechat-title";

Vue.use(vueTap);
Vue.use(vueWechatTitle);
// //设置axios为form-data
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.transformRequest = [function (data) {
//     let ret = ''
//     for (let it in data) {
//       ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//     }
//     return ret
// }]

// Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Popup.name, Popup);
Vue.component(Navbar.name, Navbar);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Button.name, Button);
Vue.component(Checklist.name, Checklist);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
