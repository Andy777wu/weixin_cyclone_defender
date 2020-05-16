<template>
    <div class="query">
        查询
    </div>
</template>
<script>
import { getCompanyInfo } from '../../utils/api'
export default {
    data(){
        return {
            companyTelphone: '',
        }
    },
    created(){
        // this.getCompanyInfo()
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