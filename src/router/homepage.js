import Homepage from '@/components/Homepage/homepage'
import BuyCar from '@/components/Homepage/buyCar'
import Recharge from '@/components/Homepage/recharge'
import Invite from '@/components/Homepage/invite'

const homepageRoute = [
    {
        path: '/',
        component: Homepage,
        meta: {
            BarBackground: '#181A2A',
            BarStyle:'light', //白色  dark为黑色
            tabbar: true,
            isQuit: true,
            title: '主页'
        }
    },
    {
        path: '/buyCar/:id',
        component: BuyCar,
        meta: {
            BarBackground: '#181A2A',
            BarStyle:'light',  //白色  dark为黑色
            // title: '购车租车'
        }
    },
    {
        path: '/recharge',
        component: Recharge,
        meta: {
            BarBackground: '#181A2A',
            BarStyle:'light', //白色  dark为黑色
            title: '充值管理'
        }
    },
    {
        path: '/invite',
        component: Invite,
        meta: {
            BarBackground: '#181A2A',
            BarStyle:'light', //白色  dark为黑色
            title: '邀请好友'
        }
    },
]
    
export default homepageRoute
