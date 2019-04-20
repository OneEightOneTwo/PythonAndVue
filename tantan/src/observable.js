import Vue from 'vue'

const state = Vue.observable({
    //控制Lsetup页
    isleft: false,

     //控制Lsetup显示
    falseright: {
        right: "-8.3rem",
        transition: "all 0.5s"
    },
    trueright: {
        right: "0rem",
        transition: "all 0.5s"
    },



   //控制xhome页
    isActionsheet: false,
    //控制主页往左移动
    aright: {
        marginLeft: "-8rem",
        transition: "all 0.5s"
    },
    bright: {
        marginLeft: "0rem",
        transition: "all 0.5s"
    },


     //控制asid页
    isasid: false,
   
    asidleft: {
        left: "-8rem",
        transition: "all 0.5s"
    },
    asidrifht: {
        left: "0rem",
        transition: "all 0.5s"
    },


})


export default state