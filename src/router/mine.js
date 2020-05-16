import Mine from '@/components/Mine/mine'
import About from '@/components/Mine/about'
import Urgent from '@/components/Mine/urgent'
import Withdraw from '@/components/Mine/withdraw'
import Gathering from '@/components/Mine/gathering'
import Query from '@/components/Mine/query'

const mineRoute = [
    {
        path: '/',
        component: Mine,
        meta: {
            BarBackground: '#181A2A',
            BarStyle:'light', //白色  dark为黑色
            tabbar: true,
            isQuit: true,
            title: '我的'
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            BarBackground: '#181A2A',
            BarStyle:'light', //白色  dark为黑色
            title: '联系我们'
        }
    },
    {
        path: '/urgent',
        component: Urgent,
        meta: {
            BarBackground: '#181A2A',
            BarStyle:'light', //白色  dark为黑色
            title: '紧急联系人'
        }
    },
    {
        path: '/withdraw',
        component: Withdraw,
        meta: {
            BarBackground: '#181A2A',
            BarStyle:'light', //白色  dark为黑色
            title: '提现'
        }
    },
    {
        path: '/gathering',
        component: Gathering,
        meta: {
            BarBackground: '#181A2A',
            BarStyle:'light', //白色  dark为黑色
            title: '收款' 
        }
    },
    {
        path: '/query',
        component: Query,
        meta: {
            BarBackground: '#181A2A',
            BarStyle:'light', //白色  dark为黑色
            title: '查找'
        }
    }
]
    
export default mineRoute