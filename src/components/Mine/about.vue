<template>
    <div class="about">
        <div class="content">
            <p>
                <span><i class="iconfont icondianhua"></i>&nbsp;&nbsp;联系电话</span>
                <span>{{companyTelphone}}</span>
            </p>
            <p>
                <span><i class="iconfont iconyouxiang"></i>&nbsp;&nbsp;电子邮箱</span>
                <span>{{companyEmail}}</span>
            </p>
            <p>
                <span><i class="iconfont icondizhi"></i>&nbsp;&nbsp;公司地址</span>
                <span>{{companyAddress}}</span>
            </p>
        </div>
    </div>
</template>
<script>
import { getCompanyInfo } from '../../utils/api'
export default {
    data(){
        return {
            companyTelphone: '',
            companyAddress: '',
            companyEmail: ''
        }
    },
    created(){
        this.getCompanyInfo()
    },
    methods:{
        getCompanyInfo(){
            let params = {
                enLogogram: 'XFWS',
                userId: localStorage.getItem('userId')
            }
            getCompanyInfo(params).then(res=>{
                if(res.code === 1){
                    this.companyTelphone = res.data.companyTelphone
                    this.companyEmail = res.data.companyEmail
                    this.companyAddress = res.data.companyAddress
                }
            })
        }
    }
}
</script>
<style lang="less">
    .about {
        .content {
            display: flex;
            flex-direction: column;
            padding: .8rem .42rem;
            background-color: #fff;
             >p {
                margin-bottom: .5rem;
                span {
                    display: inline-block;
                    line-height: 1.2rem;
                    height: 1.2rem;

                }
                span:first-child {
                    padding: 0 .1rem;
                    border-radius: .2rem 0 0 .2rem;
                    i {
                        color: #f37221;
                    }
                }
                span:nth-child(2){
                    background-color: #f6f6f6;
                    width: calc(100% - .6rem);
                    border-radius: .2rem;
                    padding-left: .6rem;
                }
             }
        }
    }
</style>