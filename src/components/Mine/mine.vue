<template>
    <div class="mine">
        <header>
            <img :src="imgUrl" alt="">
            <div>
                <span>{{'用户名: '+username}}</span>
                <!-- <p>{{'微信ID: '+wxId}}</p> -->
            </div>
        </header>
        <div class="content">
            <p>
                <i class="iconfont iconqianbao"></i>&nbsp;
                <span>我的钱包</span>
            </p>
            <ul>
                <li>
                    <i class="iconfont iconyue"></i>
                    <span>余额</span>
                    <span class="right" style="color: rgb(230, 125, 5)">￥{{balance}}</span>
                </li>
                <li v-tap={methods:jump,id:4}>
                    <i class="iconfont iconshoukuan"></i>
                    <span>收款</span>
                    <span class="right">
                        <i class="iconfont iconjiantou"></i>
                    </span>
                </li>
                <li v-tap={methods:jump,id:6}>
                    <i class="iconfont iconchaxun"></i>
                    <span>查询</span>
                    <span class="right">
                        <i class="iconfont iconjiantou"></i>
                    </span>
                </li>
                <li v-tap={methods:jump,id:3}>
                    <i class="iconfont icontixian"></i>
                    <span>提现</span>
                    <span class="right">
                        <i class="iconfont iconjiantou"></i>
                    </span>
                </li>
            </ul>
            <p>
                <i class="iconfont iconmoban"></i>&nbsp;
                <span>权限设置</span>
            </p>
            <ul>
                <li v-tap={methods:jump,id:1}>
                    <i class="iconfont iconjinjilianxiren"></i>
                    <span>紧急联系人</span>
                    <span class="right">
                        <i class="iconfont iconjiantou"></i>
                    </span>
                </li>
                <li v-tap={methods:jump,id:2}>
                    <i class="iconfont iconlianxiwomen"></i>
                    <span>联系我们</span>
                    <span class="right">
                        <i class="iconfont iconjiantou"></i>
                    </span>
                </li>
            </ul>
            <mt-button type="primary" v-tap={methods:loginOut}>退出登录</mt-button>
        </div>
    </div>
</template>
<script>
import { loginOut, getUserInfo } from '../../utils/api'
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            imgUrl: require('../../assets/images/logo.jpg'),
            username: '王大锤',
            wxId: '123123123123',
            balance: 1000
        }
    },
    created(){
        this.getUserInfo()
    },
    methods: {
        jump(e){
            let path = null
            switch( e.id ) {
                case 1 :
                    path = '/urgent'
                    break;
                case 2 :
                    path = '/about'
                    break;
                case 3 :
                    path = '/withdraw'
                    break;
                case 4 :
                    path = '/gathering'
                    break;
                default :
                    path = '/query'
            }
            this.$router.push(path)
        },
        loginOut(){
            loginOut({}).then(res=>{
                if(res.code === 1){
                    localStorage.clear()
                    this.$router.push('/')
                }else {
                    Toast({
                        message: res.msg,
                        position: 'middle',
                        duration: 1000
                    });
                }
            })
        },
        getUserInfo(){
            let params = {
                userId: localStorage.getItem('userId')
            }
            getUserInfo(params).then(res=>{
                if(res.code === 1){
                    this.balance = res.data.balance
                    this.imgUrl = res.data.avatar
                    this.username = res.data.username
                    sessionStorage.setItem('contact',JSON.stringify({
                        contactMobile: res.data.contactMobile,
                        contactName: res.data.contactName
                    }))
                    
                }
            })
        }
    }
}
</script>
<style lang="less">
    .mine {
        header {
            width: 100%;
            height: 4rem;
            background: linear-gradient(to bottom,rgb(228, 67, 3),rgb(230, 125, 5));
            display: flex;
            align-items: center;
            img {
                display: inline-block;
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                margin-left: 1rem;
                margin-right: .3rem;
            }
            >div {
                display: inline-block;
                color: #fff;
                p {
                    margin-top: .2rem;
                }
            }
        }
        .content {
            margin-top: .4rem;
            background-color: #fff;
            padding-bottom: .6rem;
            p {
                height: 1.2rem;
                line-height: 1.2rem;
                padding-left: .4rem;
                i {
                    font-size: .7rem;
                    color: #e9bd2a;
                    vertical-align: sub;
                }
                span {
                    font-size: .42rem;
                }
            }
            ul {
                li {
                    padding-left: 1.4rem;
                    height: 1rem;
                    >i {
                        color: #e9bd2a;
                        font-size: .46rem;
                        margin-right: .1rem;
                    }
                    span.right {
                        float: right;
                        margin-right: 1rem;
                        i {
                            color: #e9bd2a;
                        }
                    }
                }
            }
        }

        .mint-button--primary {
            display: block;
            width: calc(100% - 1.24rem);
            background-color: #fff;
            height: 1.4rem;
            border-radius: .6rem;
            font-size: .44rem;
            margin: 1rem auto;
            border: 1px solid #e9bd2a;
            color: #e9bd2a;
        }
    }
</style>