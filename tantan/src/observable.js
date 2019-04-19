import Vue from 'vue'

const state = Vue.observable({
    //控制xhome页
    isActionsheet: false,
    //控制Lsetup页
    isleft: false,

    //控制Lsetup显示
    falseright: {
        marginLeft: "10rem",
        transition: "all 1s"
    },
    trueright: {
        marginLeft: "1.75rem",
        transition: "all 1s"
    },

    //控制主页往左移动
    aright: {
        marginLeft: "-10.0rem",
        transition: "all 1s"
    },
    bright: {
        marginLeft: "0rem",
        transition: "all 1s"
    },

})


export default state