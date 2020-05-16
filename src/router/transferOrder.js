import TransferOrder from '@/components/TransferOrder/transferOrder'

const transferOrderRoute = [
    {
        path: '/',
        component: TransferOrder,
        meta: {
            BarBackground: '#181A2A',
            BarStyle:'light', //白色  dark为黑色
            tabbar: true,
            isQuit: true, 
            title: '转单'
        }
    }
]
    
export default transferOrderRoute
