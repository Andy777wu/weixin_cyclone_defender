<template>
    <div class="invite">
        <div class="content">
            <p>
                <span>
                    <i class="iconfont iconwode"></i>
                </span><input type="text" v-model="username" placeholder="邀请人姓名">
            </p>
            <p>
                <span>
                    <i class="iconfont icongonghao"></i>
                </span><input type="text" v-model="userId" placeholder="邀请人工号" disabled>
            </p>
            <p>
                <span>
                    <i class="iconfont iconxingming1"></i>
                </span><input type="text" v-model="inviteFriendName" placeholder="被邀人姓名">
            </p>
            <p>
                <span>
                    <i class="iconfont icondianhua"></i>
                </span><input type="text" v-model="invitePhone" placeholder="被邀人电话">
            </p>
            <mt-button type="primary" v-tap={methods:invite}>确定</mt-button>
        </div>
    </div>
</template>
<script>
import { invite } from '../../utils/api'
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            username: '',
            userId: '',
            inviteFriendName: '',
            invitePhone: ''
        }
    },
    created(){
        this.userId = localStorage.getItem('userId')
    },
    methods: {
        invite(){   // 邀请好友
           let params = {
                userId: this.userId,
                username: this.username,
                inviteFriendName: this.inviteFriendName,
                invitePhone: this.invitePhone
           }
           invite(params).then(res=>{
            //    console.log(res);
                Toast({
                    message: res.msg,
                    position: 'middle',
                    duration: 2000
                });
                if(res.code === 1){
                    this.$router.push('/main')  // 成功退回主页
                }else {
                
                }
           })
        }
    }
}
</script>
<style lang="less">
    .invite {
        .content {
            display: flex;
            flex-direction: column;
            padding: 1rem .42rem;
            background-color: #fff;
            >p {
                span {
                    display: inline-block;
                    width: 1.2rem;
                    height: 1.2rem;
                    line-height: 1.2rem;
                    text-align: center;
                    background-color: #f6f6f6;
                    border-radius: .2rem 0 0 .2rem;
                    i {
                        color: #f37221;
                    }
                }
                input {
                    display: inline-block;
                    width: calc(100% - 1.24rem);
                    height: .8rem;
                    background-color: #f6f6f6;
                    margin-bottom: .5rem;
                    border: none;
                    border-radius: 0 .2rem .2rem 0;
                    padding: .2rem 0;
                }
            }
            .mint-button--primary {
                color: #fff;
                background-color: #f37221;
                height: 1.2rem;
                border-radius: .6rem;
                font-size: .44rem;
                margin-top: .5rem;
            }
        }
    }
</style>