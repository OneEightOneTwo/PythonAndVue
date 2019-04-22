import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        skill: ['css', 'js', 'html'],
        // 控制弹窗的状态
        isShowDialog: false,
        //控制弹窗
        isTanchuang: false,
    },
    mutations: {
        increment(state) {
            state.count++
        },
        // 更改弹窗的状态
        changeIsShowDialog(state, value) {
            state.isShowDialog = value
        },
        changeIsTanchuang(state, value) {
            state.isTanchuang = value
        }
    },
    getters: {
        // 返回isShowDialog的值
        getIsShowDialog(state) {
            return state.isShowDialog
        },
        getIsTanchuang(state) {
            return state.isTanchuang
        }
    },
    actions: {
        setIsShowDialog(context, value) {
            // 通知mutations的changeIsShowDialog改isShowDialog的值
            context.commit('changeIsShowDialog', value)
        },
        setIsTanchuang(context, value) {
            // 通知mutations的changeIsShowDialog改isShowDialog的值
            context.commit('changeIsTanchuang', value)
        }
    }
})

export default store