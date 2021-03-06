import Vue from 'vue'
import App from './App.vue'
// 引入路由对象
import router from './router.js'

// import swip from 'vue-swiper'
import 'vue-swiper'
import './rem.js'
import "jquery";
import store from './store.js'
//引入element模块
import 'weui'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import stack from './components/yanfeng/home/xhome.vue'

Vue.use(stack);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    el: "#app",
    // 挂载路由实例
    router,
    // 配置状态管理
    store,
    // 渲染App组件

    render: h => h(App),
})


// .$mount('#app')



// new Vue({
//   render: h => h(App),
// }).$mount('#app')