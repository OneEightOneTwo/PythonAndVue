import Vue from 'vue'
//引入vant ui
import Vant from 'vant';
import 'vant/lib/index.css';

import VueRouter from 'vue-router'

// 模块化必须显式使用Vue.use来加载路由功能
Vue.use(VueRouter)
Vue.use(Vant)
//引入激活会员模块
import active from './components/yanfeng/active.vue'
//引入认证模块部分
import ident from './components/yanfeng/identification.vue'
//引入新手模块部分
import lmain from './components/lei/page/Lmain.vue'
//引入朋友圈模块
import lsetup from './components/lei/page/Lsetup.vue'
// 定义路由
import shezhi from './components/zwq/SheZhi.vue'
const routes = [{
    path: '/active',
    component: active,
    name: 'active',
}, {
    path: '/ident',
    component: ident,
    name: 'ident',

}, {
    path: '/ident',
    component: ident,
    name: 'ident',
}, {
    path: '/lmain',
    component: lmain,
    name: 'lmain',
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

// 暴露路由对象，为后续挂载容器做准备
export default router