import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main.vue'
import Login from '@/components/Login'
import Homepage from '@/components/Homepage'
import TransferOrder from '@/components/TransferOrder'
import Mine from '@/components/Mine'

import homepageRoute from './homepage'
import transferOrderRoute from './transferOrder'
import mineRoute from './mine'

// 重写路由的push方法
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '',
          name: 'Homepage',
          component: Homepage,
          children: homepageRoute
        },
        {
          path: '/transferOrder',
          name: 'TransferOrder',
          component: TransferOrder,
          children: transferOrderRoute
        },
        {
          path: '/mine',
          name: 'Mine',
          component: Mine,
          children: mineRoute
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        passAuth: true, // 添加此字段表示不启用登录拦截
        BarBackground: '#2B2D5C',
        BarStyle:'light', //白色  dark为黑色
        title: '登录'
      },
      component: Login
    }
  ]
})

router.afterEach(route => {
  // 从路由的元信息中获取 title 属性
  if (route.meta.title) {
      document.title = route.meta.title;
      // 如果是 iOS 设备，则使用如下 hack 的写法实现页面标题的更新
      if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
          const hackIframe = document.createElement('iframe');
          hackIframe.style.display = 'none';
          hackIframe.src = '/static/html/fixIosTitle.html?r=' + Math.random();
          document.body.appendChild(hackIframe);
          setTimeout(_ => {
              document.body.removeChild(hackIframe)
          }, 300)
      }
  }
});

export default router 
