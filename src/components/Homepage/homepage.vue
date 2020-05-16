<template>
    <div class="homepage">
        <div class="bannar">
            <mt-swipe :auto="4000" :showIndicators="false">
                <mt-swipe-item v-for="(item,i) in list" :key="i">
                    <img :src="item.picUrl" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="nav">
            <div v-for="(item,i) in navItems" :key="i" v-tap={methods:jump,id:item.id}>
                <i :class="'iconfont '+item.icon"></i>
                <p>{{item.text}}</p>
            </div>
        </div>
        <a id="call" :href="'tel:'+contactMobile" style="display: none"></a>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
import { getSlideshow, getUserInfo } from '../../utils/api'
export default {
    data(){
        return {
            contactMobile: '',
            contactName: '',
            list: [],
            navItems: [
                {
                    id: '1',
                    icon: 'iconche',
                    text: '购车',
                    path: '/buyCar/1'
                },
                {
                    id: '2',
                    icon: 'iconbucaozulin',
                    text: '租车',
                    path: '/buyCar/2'
                },
                {
                    id: '3',
                    icon: 'icontianjiahaoyou',
                    text: '邀请好友',
                    path: 'invite'
                },
                {
                    id: '4',
                    icon: 'iconchongzhi',
                    text: '租金充值',
                    path: '/recharge'
                },
                {
                    id: '5',
                    icon: 'iconapp_icons--',
                    text: '紧急联系',
                    path: ''
                }
            ]
        }
    },
    created(){
        this.getSlideshow()
        this.getUserInfo()
    },
    methods:{
        getSlideshow(){  // 获取轮播图
            let params = {}
            getSlideshow(params).then(res=>{
                console.log(res);
                this.list = res.data.list
            })
        },
        jump(e){
            if(e.id === '5'){
                MessageBox({
                    title: '紧急联系',
                    message: `确定拨打电话给${this.contactName}吗?`,
                    showCancelButton: false
                }).then(action => {
                    document.getElementById('call').click()
                });
                return
            }
            let path = this.navItems.filter(d=>d.id === e.id)[0].path
            // console.log(path);
            this.$router.push(path)
        },
        getUserInfo(){
            let params = {
                userId: localStorage.getItem('userId')
            }
            getUserInfo(params).then(res=>{
                if(res.code === 1){
                        this.contactMobile = res.data.contactMobile,
                        this.contactName = res.data.contactName
                    
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
    .homepage {
        .bannar {
            height: 6rem;
            img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
        .nav {
            width: 100%;
            background-color: #fff;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            padding-top: .3rem;
            >div {
                height: 2rem;
                text-align: center;
                flex: 1;
                width: 25%;
                min-width: 25%;
                max-width: 25%;
                i {
                    font-size: 0.6rem;
                    color: #f66828;
                }
            }
        }
    }
</style>