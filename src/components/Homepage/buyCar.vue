<template>
    <div class="buy_car">
        <main>
            <div class="bd">
                <mt-swipe :auto="4000" :showIndicators="false">
                    <mt-swipe-item v-for="(item,i) in list" :key="i">
                        <img :src="item.picUrl" alt="">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
            <div style="background-color: #f6f6f6">
                <div class="select">
                    <span>型号选择</span>
                    <span>{{currentCarType}}</span>
                    <i class="iconfont iconai-arrow-down" v-tap={methods:showSelectOptions}></i>
                </div>
                <div class="full_payment">
                    <span>总价格</span>
                    <span>￥{{priceTotal}}</span>
                </div>
                <mt-navbar v-model="selected">
                    <mt-tab-item id="1">{{pageId == '1'?'购车方案': '租车方案'}}</mt-tab-item>
                    <mt-tab-item id="2">车型介绍</mt-tab-item>
                </mt-navbar>
            </div>
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                   <div class="scheme">
                      <p v-if="businessType === '10'">
                          <span v-for="(item, i) in checkListOptions" :key="i">
                              <i class="iconfont iconselected2"></i>
                              {{item.label}}
                          </span>
                      </p>
                      <p v-else>
                          <span v-for="(item, i) in checkListOptions1" :key="i">
                              <i class="iconfont iconselected2"></i>
                              {{item.label}}
                          </span>
                      </p>
                      <div v-for="(item,i) in carBizPlan" :key="i">
                          <div>
                              <span>首付</span>
                              <span>{{item.deposit || '-'}}</span>
                          </div>
                          <div>
                              <span>月供</span>
                              <span>{{item.paymentAmount}}</span>
                          </div>
                          <div>
                              <span>期数</span>
                              <span>{{item.monthCount}}</span>
                          </div>
                      </div>
                   </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <CarInfo :params="params" :carPicture="carPicture"></CarInfo>
                </mt-tab-container-item>
            </mt-tab-container>
        </main>
        <mt-button type="primary" v-tap={methods:precontract}>立即预约</mt-button>
        <mt-popup
        v-model="popupVisible"
        position="bottom">
            <p class="options" v-for="(item,i) in carTypeItems" :key="i" v-tap={methods:checkCar,item:item}>{{item.carName}}</p>
        </mt-popup>
    </div>
</template>
<script>
import CarInfo from './carInfo'
import { getCarList, getCarConfig, getSlideshow, precontract } from '../../utils/api'
import moment from 'moment'
export default {
    data(){
        return{
            pageId: '',
            businessType: '',
            popupVisible: false,
            carTypeItems: [],
            currentCarType: '',
            priceTotal: '暂无',
            selected: '1',
            params: [],
            carPicture: [],
            list: [],
            checkListOptions: [
                {
                    label: '包上牌，购置税'
                },
                {
                    label: '送首年保险'
                },
                {
                    label: '厂家质保'
                }
            ],
            checkListOptions1: [
                {
                    label: '包上牌'
                },
                {
                    label: '包保险'
                },
                {
                    label: '包保养'
                }
            ],
            carBizPlan:[]
        }
    },
    components:{
        CarInfo
    },
    beforeRouteEnter(to, from, next){
        // 不！能！获取组件实例 `this`
        next(vm => {
            // 通过 `vm` 访问组件实例
            vm.pageId = to.params.id
            vm.businessType = to.params.id=='1'?'10':'20'   // 业务类型(10:买车, 20:租车, 30:以租代购 )
            document.title = to.params.id == '1'?'购车': '租车'
            vm.getCarList()
            vm.getSlideshow(vm.businessType)
        })

    },
    created(){
        // this.getCarList()
    },
    watch:{
        businessType:function(){
        }
    },
    mounted(){
    },
    methods: {
        showSelectOptions(){
            this.popupVisible = true
        },
        checkCar(e){
            this.popupVisible = false
            if(e.item){
                this.currentCarType = e.item.carName 
                this.getCarConfig(e.item)
            }else {
                this.currentCarType = e.carName
                this.getCarConfig(e)
            }
        },
        getSlideshow(e){  // 获取轮播图
            let params = {
                businessType: e
            }
            getSlideshow(params).then(res=>{
                this.list = res.data.list
            })
        },
        getCarList(){  // 车辆种类列表
            let userId = localStorage.getItem('userId')
            let params = {
                userId,
                businessType: this.businessType 
            }
            getCarList(params).then(res=>{
                // console.log(res);
                if(res.code === 1){
                    this.carTypeItems = res.data
                    this.checkCar(this.carTypeItems[0])
                }
            })
        },
        getCarConfig(e){  // 根据品牌和型号查询
            let params = {
                userId: localStorage.getItem('userId'), // 用户ID
                brand: e.brand,  // 品牌
                modelNo: e.modelNo,  // 型号
                businessType: this.businessType // 业务
            }
            getCarConfig(params).then(res=>{
                // console.log(res);
                if(res.code === 1){
                    this.priceTotal = res.data.carPrice
                    let obj = JSON.parse(res.data.params)
                    let arr = []
                    for (const key in obj) {
                        arr.push(key+':'+obj[key])
                    }
                    this.params = arr
                    this.carPicture = res.data.carPicture
                    this.carBizPlan = res.data.carBizPlan
                    this.selected = '1'
                }
            })
        },
        precontract(){  // 点击预约
            let date = new Date().get
            let params = {
                userId: localStorage.getItem('userId'), // 用户ID
                subletDate: moment(new Date()).format("YYYY-MM-DD"),  // 转租时间
                appointmentType: this.businessType=='10'? '20': '30', // 预约类型(10:返租预约;  20:买车预约;  30:租车预约)
                remark: ''
            }
            precontract(params).then(res=>{
                if(res.code === 1){
                    this.$router.push('/main')
                }
            })
        },
    }
}
</script>
<style lang="less">
    .buy_car {
        .bd {
            width: 100%;
            height: 6rem;
            img {
                width: 100%;
                height: 100%;
            }
        }
        main {
            padding: 0 0 1.5rem 0;
            background-color: #fff;
            .select {
                height: 1.2rem;
                line-height: 1.2rem;
                padding: .4rem;
                span {
                    display: inline-block;
                }
                span:first-child {
                    font-size: .5rem;
                    color: #424141;
                }
                span:nth-child(2) {
                    font-size: .42rem;
                    width: calc(100% - 3.3rem);
                    background-color: #f2f2f2;
                    border-radius: .2rem;
                    padding-left: .3rem;
                }
                i {
                    // background-color: #f2f2f2;
                    color: #f66828;
                   
                }
            }
            .full_payment {
                height: 1rem;
                line-height: 1rem;
                padding: .4rem;
                span {
                    display: inline-block;
                }
                span:first-child {
                    font-size: .5rem;
                    color: #424141;
                    margin-right: .4rem;
                }
                span:nth-child(2) {
                    color: #a54338;
                    font-size: .46rem;
                    font-weight: 600;
                }
            }
            >div>.mint-navbar {
                background-color: #f6f6f6;
            }
            .scheme {
                >p {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    height: 1.6rem;
                    i {
                        color: #f66828;
                        font-size: .6rem;
                        vertical-align: sub;
                    }
                    span {
                        color: #666;
                    }
                }
                >div {
                    display: flex;
                    justify-content: space-around;
                    width: calc(100% - 1.24rem);
                    height: 1.4rem;
                    background-color: rgba(233, 241, 245, 0.6);
                    border-radius: .4rem;
                    margin: 0 auto .2rem;
                    padding: .4rem 0;
                    >div {
                        flex: 1;
                        border-right: 1px solid #ccc;
                        &:last-child {
                            border: none;
                        }
                        span {
                            width: 100%;
                            display: block;
                            height: 50%;
                            text-align: center;
                            &:last-child {
                                color: #a54338;
                                font-weight: 600;
                            }
                        }
                    }
                }
            }
        }
        .mint-button--primary {
            width: 100%;
            color: #fff;
            background-color: #f37221;
            height: 1.5rem;
            font-size: .46rem;
            position: fixed;
            bottom: 0;
        }
        .mint-popup-bottom {
            width: 100%;
            max-height: 10rem;
            overflow: auto;
            .options {
                width: 100%;
                text-align: center;
                font-size: .5rem;
                height: 1rem;
                line-height: 1rem;
            }
        }
    }
</style>