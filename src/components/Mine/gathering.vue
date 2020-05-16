<template>
    <div class="gathering">
        <div>
            <img :src="qrCode" alt="">
        </div>
    </div>
</template>
<script>
import { gathring } from '../../utils/api'
export default {
    data(){
        return {
            qrCode: ''
        }
    },
    created(){
        this.getGathring()
    },
    methods:{
        getGathring(){
            let params = {
                type: '2',
            }
            gathring(params).then(res=>{
                if(res.code === 1){
                    this.qrCode = res.data.qrCode
                }
            })
        }
    }
}
</script>