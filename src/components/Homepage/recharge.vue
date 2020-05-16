<template>
    <div class="recharge">
        <div class="nav">
            <img :src="imgUrl" alt="">
            <div>
                <span>旋风卫士</span>
                <p>{{underline+' 到期'}}</p>
            </div>
        </div>
        <p>
            推荐
        </p>
        <div class="content">
            <div class="continue" v-for="(item,i) in continueItems" :key="i">
                <span><i>￥</i>{{item.price}}</span>
                <div>
                    <span>{{item.type}}</span>
                    <p>{{item.discount}}</p>
                </div>
                <mt-button type="primary">点击续费</mt-button>
            </div>
            <mt-button type="primary">立即以2000元续费</mt-button>
        </div>
    </div>
</template>
<script>
import { recharge, deadline } from '../../utils/api'
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            imgUrl: require('../../assets/images/logo.jpg'),
            underline: '2019-12-30',
            continueItems: [
                {
                    id: '1',
                    type: '续约一天',
                    discount: '',
                    price: 100
                },
                {
                    id: '2',
                    type: '续约一月',
                    discount: '包月9折',
                    price: 2700
                },
                {
                    id: '3',
                    type: '续约一季度',
                    discount: '包季8折',
                    price: 7200
                }
            ]
        }
    },
    created(){
        this.deadline()
    },
    methods: {
        recharge(){   // 点击充值
            let params = {
                userId: localStorage.getItem('userId'),
                amount:'this.mobile',
                voucherAmount:'this.password'
            }
            recharge(params).then(res=>{
                console.log(res);
                Toast({
                    message: res.msg,
                    position: 'middle',
                    duration: 2000
                });
                if(res.code === 1){
                    
                }
            })
        },
        deadline(){   // 点击充值
            let params = {
                userId: localStorage.getItem('userId')
            }
            deadline(params).then(res=>{
                console.log(res);
                Toast({
                    message: res.msg,
                    position: 'middle',
                    duration: 2000
                });
                if(res.code === 1){
                    
                }
            })
        }
    }
}
</script>
<style lang="less">
    .recharge {
        background-color: #fff;
        .nav {
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
        >p {
            position: relative;
            font-size: .42rem;
            font-weight: 600;
            padding-left: .8rem;
            margin: .6rem 0;
            &::before {
                position: absolute;
                content: ' ';
                display: block;
                width: 2px;
                height: 100%;
                background-color: rgb(241, 151, 76);
                left: .4rem;
                top: 0;
            }
        }
        .content {
            padding: .2rem 1rem 1rem 1rem;
            .continue {
                background-color: #a54338;
                border-radius: .2rem;
                margin-bottom: .42rem;
                padding: .5rem .6rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #fedbb1;
                // >div {
                //     display: flex;
                //     justify-content: flex-start;
                //     align-items: center;
                //     color: #fedbb1;
                // }
                >span {
                    flex: 1;
                    font-size: 1rem;
                    // margin-right: .3rem;
                    i{
                        font-size: .52rem;
                    }
                }
                >div {
                    flex: 1;
                    text-align: center;
                }
                .mint-button--primary {
                    color: #a54338;
                    background-color: #fedbb1;
                    width: 2.1rem;
                    height: 1rem;
                    border-radius: 1rem;
                    font-size: .3rem;
                }
            }
            >.mint-button--primary {
                width: 100%;
                color: #fedbb1;
                background-color: #a54338;
                height: 1.2rem;
                border-radius: .6rem;
                font-size: .44rem;
                margin-top: .6rem;
            }
        }
    }
</style>