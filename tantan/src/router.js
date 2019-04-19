import Vue from 'vue'
//引入vant ui
import Vant from 'vant';
import 'vant/lib/index.css';

import VueRouter from 'vue-router'

// 模块化必须显式使用Vue.use来加载路由功能
Vue.use(Vant)
// import VueSwiper from 'vue-swiper'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
// import 'swiper/dist/css/swiper.css'
// 模块化必须显式使用Vue.use来加载路由功能
Vue.use(VueRouter)
    // Vue.use(VueAwesomeSwiper)
    //引入激活会员模块
    //引入激活会员模块
import active from './components/yanfeng/active.vue'
//引入认证模块部分
import ident from './components/yanfeng/identification.vue'
//引入左侧边栏模块
import asid from './components/yanfeng/asid.vue'
//引入home模板部分
import home from './components/yanfeng/home.vue'
import lmain from './components/lei/page/Lmain.vue'
//引入朋友圈模块
import lsetup from './components/lei/page/Lsetup.vue'
//引入个人资料模块
import personaldata from './components/lei/page/personaldata.vue'
//引入编辑个人资料模块
import edit from './components/lei/page/edit.vue'
//引入行业模块
import industry from './components/lei/page/industry.vue'
//引入微信模块
import wei from './components/lei/page/wei.vue'

// 定义路由
import shezhi from './components/zwq/SheZhi.vue'
const routes = [{
            path: '/active',
            component: active,
            name: 'active',
        }, {
            path: '/asid',
            component: asid,
            name: 'asid',

        }, {
            path: '/home',
            component: home,
            name: 'home',
        },
        {
            path: '/lmain',
            component: lmain,
            name: 'lmain',
        }, {
            path: '/personaldata',
            component: personaldata,
            name: 'personaldata',
        }, {
            path: '/edit',
            component: edit,
            name: 'edit',
        }, {
            path: '/industry',
            component: industry,
            name: 'industry',
        }, {
            path: '/wei',
            component: wei,
            name: 'wei',
        }, {
            path: '/ident',
            component: ident,
            name: 'ident',
        }, {
            path: '/lsetup',
            component: lsetup,
            name: 'lsetup',
        }, {
            path: '/shezhi',
            component: shezhi,
            name: 'shezhi',
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