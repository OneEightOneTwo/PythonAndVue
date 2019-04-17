import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueSwiper from 'vue-swiper'
// 模块化必须显式使用Vue.use来加载路由功能
Vue.use(VueRouter)
    // Vue.use(vueSwiper)
    //引入激活会员模块
import active from './components/yanfeng/active.vue'
//引入认证模块部分
import ident from './components/yanfeng/identification.vue'
//引入新手模块部分
import lmain from './components/lei/Lmain.vue'
//引入左侧边栏模块
import aside from './components/yanfeng/aside.vue'
//引入home模板部分
import home from './components/yanfeng/home.vue'
// 定义路由
const routes = [{
            path: '/active',
            component: active,
            name: 'active',
        }, {
            path: '/ident',
            component: ident,
            name: 'ident',

        }, {
            path: '/aside',
            component: aside,
            name: 'aside',
        }, {
            path: '/home',
            component: home,
            name: 'home',
        },
        {
            path: '/lmain',
            component: lmain,
            name: 'lmain',
        }



    ]
    // 实例化路由
const router = new VueRouter({
        routes
    })
    // const vueSwiper = new VueSwiper({
    //     vueSwiper
    // })

// 暴露路由对象，为后续挂载容器做准备
export default router