import Vue from 'vue'
import VueRouter from 'vue-router'
// 模块化必须显式使用Vue.use来加载路由功能
Vue.use(VueRouter)
//引入激活会员模块
import active from './components/yanfeng/active.vue'
//引入认证模块部分
import ident from './components/yanfeng/identification.vue'
//引入新手模块部分
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
const routes = [{
            path: '/active',
            component: active,
            name: 'active',
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
        }
        
        



    ]
    // 实例化路由
const router = new VueRouter({
    routes
})

// 暴露路由对象，为后续挂载容器做准备
export default router