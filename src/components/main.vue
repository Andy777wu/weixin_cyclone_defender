<template>
  <div class="main">
    <router-view />
    <mt-tabbar v-show="showTabbar" v-model="selected">
      <mt-tab-item v-for="(item, i) in tabItems" :key="i" :id="item.id">
        <i slot="icon" :class="'iconfont '+item.icon"></i>
        {{item.text}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { loginOut } from '../utils/api'
export default {
  name: 'Main',
  data () {
    return {
      tabItems: [
        {
          id: '1',
          icon: 'iconzhuye',
          text: '主页',
          path: '/main'
        },
        {
          id: '2',
          icon: 'iconzhuandan',
          text: '转单',
          path: '/transferOrder'
        },
        {
          id: '3',
          icon: 'iconwode',
          text: '我的',
          path: '/mine'
        }
      ],
      selected: "1"
    }
  },
  watch: {
    selected(){
      let path = this.filter()
      this.$router.push(path)

    }
  },
  computed: {
    showTabbar () {
        return this.$route.meta.tabbar
    }
  },
  mounted(){
    // 监听微信浏览器页面关闭
    window.addEventListener('pagehide',()=>{
        loginOut({}).then({
          
        })
    })
  },
  methods:{
    filter(){
      let currentItem = this.tabItems.filter(d=>
        this.selected == d.id
      )
      return currentItem[0].path
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .mint-tabbar {
    height: 1.62rem;
    background-color: #F8FCFF; 
    .mint-tab-item-label,
    .mint-tab-item-icon {
      font-size: 0.3rem;
    }
    .mint-tab-item.is-selected {
      color: #f66828;
      background-color: #F8FCFF;
    }
  }
</style>
