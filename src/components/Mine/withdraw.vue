<template>
    <div class="withdraw">
        <div class="amout">
            <p>
                <span>平台余额</span>
                <span>{{amountTotal}}</span>
            </p>
            <p>
                <span>可提现余额</span>
                <span>{{amount}}</span>
                <mt-button type="primary" v-tap={methods:withdrawApply}>提现</mt-button>
            </p>
        </div>
        <p>提现记录</p>
        <div class="profit">
            <p class="profit_title">
                <span>
                    提现日期
                </span>
                <span>提现金额</span>
            </p>
            <p class="profit_content">
                <span>8/13 20:20</span>
                <span>￥12200</span>
            </p>
            <p class="profit_content">
                <span>8/13 20:20</span>
                <span>￥100</span>
            </p>
            <p class="profit_content">
                <span>8/14 20:20</span>
                <span>￥3100</span>
            </p>
        </div>
    </div>
</template>
<script>
import { withdrawApply, withdrawQuery } from '../../utils/api'
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            amount: '7777',
            amountTotal: '777777',
            pageSize: 1,
            pageNumber: 10,
        }
    },
    created(){
        this.withdrawQuery()
    },
    methods:{
        // 提现申请
        withdrawApply(){
            let params = {
                userId: localStorage.getItem('userId'),
                type: '20',
                amount: this.amount
            }
            withdrawApply(params).then(res=>{
                if(res.code === 1){
                    
                }
            })
        },
        // 提现查询
        withdrawQuery(){
            let params = {
                userId: localStorage.getItem('userId'),
                pageSize: this.pageSize,
                pageNumber: this.pageNumber
            }
            withdrawQuery(params).then(res=>{
                if(res.code === 1){

                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
    .withdraw {
        div.amout {
            padding: 0.6rem .8rem 0 .8rem;
            p {
                height: 1.6rem;
                line-height: 1.6rem;
                border-bottom: 1px solid #f37221;
                span:first-child {
                    font-size: .36rem;
                    color: #424141;
                }
                span:nth-child(2) {
                    margin-left: .5rem;
                    font-size: .44rem;
                    color: #a54338;
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
        .mint-button--primary {
            color: #fff;
            background-color: #f37221;
            width: 1.6rem;
            height: 1rem;
            line-height: 1rem;
            border-radius: .4rem;
            font-size: .44rem;
            float: right;
            margin-top: .3rem;
        }
        .profit {
            width: calc(100% - 1.6rem);
            border-radius: .4rem;
            background-color: #4b5ca2;
            min-height: 6rem;
            margin: 0 auto;
            color: #f0f0f0;
            padding: .5rem .4rem;
            p {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: .2rem 0;
            }
            .profit_title {
                border-bottom: 1px solid #fff;
            }
        }
    }
</style>