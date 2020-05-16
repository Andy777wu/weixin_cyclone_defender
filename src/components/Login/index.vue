<template>
    <div class="login">
        <div class="top">旋</div>
        <p>
            <input type="number" placeholder="请输入手机号" v-model="mobile" size="11">
            <!-- <i class="iconfont iconqingkong"></i> -->
        </p>
        <p>
            <input type="number" placeholder="请输入验证码" v-model="code">
            <span v-tap={methods:getCode}>获取验证码</span>
        </p>
        <mt-button type="primary" v-tap={methods:login}>登录</mt-button>
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
import { login, getCode } from '../../utils/api'
export default {
    data(){
        return {
            mobile: '',
            code: ''
        }
    },
    methods:{
        getCode(){  // 获取验证码
            // let url = `/ioc/app/code/sms?mobile=${this.mobile}`
            let params = {
                mobile: this.mobile
            }
            getCode(params).then(res=>{
                if(res.code === 1){
                    this.code = res.data
                }else {
                    Toast({
                        message: res.msg,
                        position: 'middle',
                        duration: 2000
                    });
                }
            })
        },
        login(){  // 点击登录
            // let url = `/ioc/app/login/mobile`
            let params = {
                mobile:this.mobile,
                code:this.code
            }
            login(params).then(res=>{
                console.log(res);
                if(res.code === 1){
                    localStorage.setItem('Authorization',JSON.stringify(res.data.XF_TOKEN))
                    localStorage.setItem('userId',JSON.stringify(res.data.user.userId))
                    this.$store.commit('setToken',res.data.XF_TOKEN)
                    this.$store.commit('setUserId',res.data.user.userId)
                    this.$router.push('/main')
                }else {
                    Toast({
                        message: res.msg,
                        position: 'middle',
                        duration: 2000
                    });
                }
            })
        }
    }
}
</script>
<style lang="less">
.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    .top {
        margin-top: 2rem;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: #f37221;
        color: #fff;
        font-size: 1rem;
        line-height: 3rem;
        text-align: center;
        margin-bottom: 1rem;
    }
    p {
        width: calc(100% - 1.24rem);
        position: relative;
        height: 1.6rem;
        margin-bottom: .6rem;
        box-sizing: border-box;
        input {
            display: inline-block;
            width: calc(100% - .4rem);
            height: 1.2rem;
            background-color: #f6f6f6;
            margin-bottom: .5rem;
            border: none;
            border-radius: 0 .2rem .2rem 0;
            padding: .2rem .2rem;
            font-size: .44rem;
            font-size: .46rem;
        }
        i,span {
            position: absolute;
            right: 0.2rem;
            top: 50%;
            transform: translateY(-50%);
        }
        span {
            border: 1px solid #f37221;
            border-radius: .2rem;
            color: #f37221;
            width: 2.5rem;
            height: 1rem;
            text-align: center;
            line-height: 1rem;
        }
    }
    .mint-button--primary {
        width: calc(100% - 1.24rem);
        color: #fff;
        background-color: #f37221;
        height: 1.6rem;
        border-radius: .6rem;
        font-size: .44rem;
        margin-top: .5rem;
    }

}
</style>