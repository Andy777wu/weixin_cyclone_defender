<template>
<!-- 车辆信息 -->
    <div class="carInfo">
        <mt-navbar v-model="subSelected">
            <mt-tab-item id="3">详细配置</mt-tab-item>
            <mt-tab-item id="4">车辆实拍</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="subSelected">
            <mt-tab-container-item id="3">
                <div class="detailConfig">
                    <p>基本参数</p>
                    <p v-for="(item,i) in params" :key="i">
                        {{item}}
                    </p>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <div class="imgBox">
                    <img v-for="(item,i) in carPicture" :key="i" :src="item.picUrl">
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
export default {
    props:['params', 'carPicture'],
    data(){
        return {
            subSelected: '3'
        }
    }
}
</script>
<style lang="less">
    .carInfo {
        .detailConfig {
            p {
                text-align: center;
                font-size: .4rem;
                height: 1.2rem;
                line-height: 1.2rem;
                color: #333333;
                &:nth-child(2n) {
                    background-color: #f5f5f5;
                }
            }
            
        }
        .imgBox {
            img {
                width: 100%;
                height: auto;
            }
        }
    }
</style>