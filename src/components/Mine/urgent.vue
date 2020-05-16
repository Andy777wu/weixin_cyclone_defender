<template>
    <div class="urgent">
        <div class="content">
            <p>
                <span>
                    <i class="iconfont iconxingming1"></i>
                </span><input :disabled="setted" type="text" v-model="contactName" placeholder="紧急联系人姓名">
            </p>
            <p>
                <span>
                    <i class="iconfont icondianhua"></i>
                </span><input :disabled="setted" type="text" v-model="contactMobile" placeholder="紧急联系人电话">
            </p>
            <mt-button type="primary" v-tap={methods:primary}>{{setted?'重置': '提交'}}</mt-button>
        </div>
    </div>
</template>
<script>
import { updateContactByUser } from '../../utils/api'
export default {
    data(){
        return{
            contactName: '我是王大锤',
            contactMobile: '123456789',
            setted: true
        }
    },
    created(){
        let contact =JSON.parse(sessionStorage.getItem('contact'))
        this.contactName = contact.contactName
        this.contactMobile = contact.contactMobile
    },
    methods: {
        primary(){
            if(this.setted){
                this.setted = false
                this.contactName = ''
                this.contactMobile = ''
            }else {
                this.commit()
            }
        },
        commit(){
            let params = {
                userId: localStorage.getItem('userId'),
                contactName: this.contactName,
                contactMobile: this.contactMobile
            }
            updateContactByUser(params).then(res=>{
                if(res.code == 1){
                    this.$router.push('/mine')
                }
            })
        }
    }
}
</script>
<style lang="less">
    .urgent {
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