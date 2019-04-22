import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueSwiper from 'vue-swiper'
// 模块化必须显式使用Vue.use来加载路由功能
Vue.use(VueRouter)
// Vue.use(vueSwiper)



//引入home模板部分
import home from './components/yanfeng/home.vue'
import xhome from './components/yanfeng/home/xhome.vue'
import lmain from './components/yanfeng/home/Lmain.vue'
import active from './components/yanfeng/home/active.vue'
import ident from './components/yanfeng/home/identification.vue'
import wei from './components/yanfeng/home/wei.vue'
import shezhi from './components/zwq/SheZhi.vue'
//引入个人资料模块
import personaldata from './components/lei/page/personaldata.vue'
//引入编辑个人资料模块
import edit from './components/lei/page/edit.vue'
//引入行业模块
import industry from './components/lei/page/industry.vue'

// 定义路由

const routes = [
    { path: '/', redirect: '/home/xhome' },
    { path: '/edit', component: edit, name: 'edit' },
    { path: '/industry', component: industry, name: 'industry', },
    {
        path: '/home', component: home, name: 'home',
        children: [
            { path: 'xhome', component: xhome, name: 'xhome' },
            { path: 'wei', component: wei, name: 'wei' },
            { path: 'active', component: active, name: 'active' },
            { path: 'ident', component: ident, name: 'ident' },
            { path: 'personaldata', component: personaldata, name: 'personaldata', },
            { path: 'shezhi', component: shezhi, name: 'shezhi' },
            { path: 'wei', component: wei, name: 'wei' },
            { path: 'lmain', component: lmain, name: 'lmain' },

        ]
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