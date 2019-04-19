import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueSwiper from 'vue-swiper'
// 模块化必须显式使用Vue.use来加载路由功能
Vue.use(VueRouter)
// Vue.use(vueSwiper)
//引入激活会员模块
//引入激活会员模块
// import Active from './components/yanfeng/active.vue'
//引入认证模块部分
// import Ident from './components/yanfeng/identification.vue'
//引入左侧边栏模块
import aside from './components/yanfeng/asid.vue'
//引入home模板部分
import Home from './components/yanfeng/home.vue'

import lmain from './components/lei/page/Lmain.vue'
//引入朋友圈模块
import Lsetup from './components/lei/page/Lsetup.vue'
//引入个人资料模块
import personaldata from './components/lei/page/personaldata.vue'
//引入编辑个人资料模块
import edit from './components/lei/page/edit.vue'
//引入行业模块
import industry from './components/lei/page/industry.vue'
//引入微信模块
import wei from './components/lei/page/wei.vue'

// 定义路由
import Shezhi from './components/zwq/SheZhi.vue'
const routes = [{ path: '/', redirect: '/home' },{
    path: '/aside',
    component: aside,
    name: 'aside',

}, 
{
    path: '/lmain',
    component: lmain,
    name: 'lmain',
}, {
    path: '/personaldata',
    component: personaldata,
    name: 'personaldata',
    },
    {
    path: '/edit',
    component: edit,
    name: 'edit',
    },
    {
    path: '/industry',
    component: industry,
    name: 'industry',
}, {
    path: '/wei',
    component: wei,
    name: 'wei',
    },
    {
    path: '/lsetup',
    component: Lsetup,
    name: 'lsetup',
},  {
    path: '/home',
    component: Home,
    name: 'home',
    }, 
     {
    path: '/shezhi',
    component: Shezhi,
    name: 'shezhi',
}, 




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