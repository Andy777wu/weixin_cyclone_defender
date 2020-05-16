<template>
    <div class="transfer_order">
        <div class="nav">
            <div class="nav_item" v-for="(item,i) in navItems" :key="i" v-tap={methods:jump,id:item.id}>
                <span>
                    <i :class="'iconfont '+item.icon"></i>
                </span>
                <p>
                    {{item.text}}
                </p>
            </div>
        </div>
        <p>
            订单收益
        </p>
        <div class="profit">
            <p class="profit_title">
                <span>
                    转单日期&nbsp;
                    <i v-show="showarrow" class="iconfont iconai-arrow-down" v-tap={methods:openPicker}></i>
                </span>
                <span>总价</span>
                <span>收益</span>
            </p>
            <p class="profit_content">
                <span>8/13 20:20</span>
                <span>￥100</span>
                <span>￥10</span>
            </p>
            <p class="profit_content">
                <span>8/13 20:20</span>
                <span>￥100</span>
                <span>￥10</span>
            </p>
            <p class="profit_content">
                <span>8/13 20:20</span>
                <span>￥100</span>
                <span>￥10</span>
            </p>
            <p class="profit_content">
                <span>8/13 20:20</span>
                <span>￥100</span>
                <span>￥10</span>
            </p>
            <p class="profit_content">
                <span>8/13 20:20</span>
                <span>￥100</span>
                <span>￥10</span>
            </p>
            <p class="profit_content">
                <span>8/13 20:20</span>
                <span>￥100</span>
                <span>￥10</span>
            </p>
            <p class="profit_content">
                <span>8/13 20:20</span>
                <span>￥100</span>
                <span>￥10</span>
            </p>
            <p class="profit_content">
                <span>8/13 20:20</span>
                <span>￥100</span>
                <span>￥10</span>
            </p>
            <p class="profit_content">
                <span>8/13 20:20</span>
                <span>￥100</span>
                <span>￥10</span>
            </p>
            
        </div>
        <mt-datetime-picker
            ref="picker"
            type="date"
            v-model="pickerValue"
            @confirm="handleConfirm">
        </mt-datetime-picker>
        <!-- <mt-popup
            v-model="popupVisible"
            position="bottom">
            
        </mt-popup> -->
    </div>
</template>
<script>
export default {
    data(){
        return {
            navItems: [
                {
                    id: '1',
                    icon: 'iconzhuanrang',
                    text: '转给附近司机',
                    path: ''
                },
                {
                    id: '2',
                    icon: 'iconjipiaoyudingcheliangyuyueshenqingbiao',
                    text: '预约短途出租',
                    path: ''
                }
            ],
            pickerValue: '',
            showarrow: true,
            // popupVisible: false
        }
    },
    watch: {
    },
    mounted(){
    },
    methods: {
        openPicker() {
            this.$refs.picker.open();
        },
        handleConfirm(e){
            console.log(e.getTime());
        },
        jump(id){
            // if(id == '2') this.popupVisible = true
        }
    },
}
</script>
<style lang="less">
.transfer_order {
    .nav {
        // width: 100%;
        height: 3rem;
        padding: .2rem .5rem;
        .nav_item {
            width: 50%;
            height: 100%;
            float: left;
            span {
                display: block;
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 50%;
                text-align: center;
                line-height: 1.5rem;
                background: linear-gradient(45deg,rgb(235, 210, 164),#ff9934);
                margin: 1rem auto .2rem;
                i {
                    font-size: .8rem;
                    color: #fff;
                }
            }
            p {
                color: #838383;
                font-size: .4rem;
                text-align: center;
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
    .profit {
        width: calc(100% - 1.6rem);
        border-radius: .4rem;
        background-color: #4b5ca2;
        min-height: 6rem;
        margin: 0 auto;
        color: #fff;
        padding: .5rem .4rem;
        p {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: .2rem 0;
            span:nth-child(2) {
                text-align: center;
            }
        }
        .profit_title {
            border-bottom: 1px solid #fff;
            .iconfont {
                font-size: .3rem;
                color: #ff9934;
            }
        }
    }
}
</style>