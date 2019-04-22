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
    xhomeleft: {
        marginLeft: "-8rem",
        transition: "all 0.5s"
    },
    xhomeright: {
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


         //active
    isactive: false,
   
    activeleft: {
        left: "0rem",
        transition: "all 0.5s"
    },
    activerifht: {
        left: "7rem",
        transition: "all 0.5s"
    },

         //ident
    isident: false,
   
    identleft: {
        left: "0rem",
        transition: "all 0.5s"
    },
    identrifht: {
        left: "7rem",
        transition: "all 0.5s"
    },

          //shezhi
    isshezhi: false,
   
    shezhileft: {
        left: "0rem",
        transition: "all 0.5s"
    },
    shezhirifht: {
        left: "7.5rem",
        transition: "all 0.5s"
    },
           //wei
    iswei: false,
   
    weileft: {
        left: "0rem",
        transition: "all 0.5s"
    },
    weirifht: {
        left: "7.5rem",
        transition: "all 0.5s"
    },

    //Lmain
        islmain: false,
   
    lmainleft: {
        left: "0rem",
        transition: "all 0.5s"
    },
    lmainrifht: {
        left: "7.5rem",
        transition: "all 0.5s"
    },



})


export default state