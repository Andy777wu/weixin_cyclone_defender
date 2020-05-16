import router from '../router'

router.beforeEach((to, from, next) => {
    if (to.meta.passAuth) { // 不拦截的路由
        next()
    } else {
        if (localStorage.getItem('Authorization')) {
            next()
        } else {
            next({ path: '/login' })
        }
    }
})