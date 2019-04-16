import Vue from 'vue'
import App from './App.vue'
// 引入路由对象
import router from './router.js'

import 'weui'
Vue.config.productionTip = false

new Vue({
        el: "#app",
        // 挂载路由实例
        router,
        // 配置状态管理
        // store,
        // 渲染App组件
        render: h => h(App),
    })
    // .$mount('#app')



// new Vue({
//   render: h => h(App),
// }).$mount('#app')