import Vue from 'vue'

const state = Vue.observable({
    isActionsheet: false,
    isleft: false,

    //控制Lsetup显示
    falseright: {
        marginLeft: "10rem",
        transition: "all 1.5s"
    },
    trueright: {
        marginLeft: "1.75rem",
        transition: "all 1.5s"
    },

    //控制主页往左移动
    aright: {
        marginLeft: "-8.0rem",
        transition: "all 1.5s"
    },
    bright: {
        marginLeft: "0rem",
        transition: "all 1.5s"
    },

})


export default state