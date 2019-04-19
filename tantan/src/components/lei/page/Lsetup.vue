<template>
  <div id="box" :class="{
    changeStyle:state.ischangeStyle,
    changeStyle1:!state.ischangeStyle
  }"
  class="changeStyle">
    <div class="headers">
      <div>
        <span>2</span>个配对
      </div>
    </div>
    <div class="main">
      <div class="circle">
        <span>
          <img src="../../../assets/wei.png" class="wei">
        </span>
        <span class="circlename">朋友圈</span>
        <span>
          <img src="../../../assets/arrow-right.png" class="circleimg">
        </span>
      </div>
      <ul class="navs">
        <li
          v-for="(tab,idx) in tabs"
          :class="{link:active==idx}"
          @click="change(idx)"
          :key="idx"
        >{{tab.title}}</li>
      </ul>
      <div class="content">
        <pair v-show="active==0"></pair>
        <chat v-show="active==1"></chat>
      </div>
    </div>
  </div>
</template>

<script>
import state from '../../../observable.js'
import pair from "../components/pair.vue";
import chat from "../components/chat.vue";
export default {
  data() {
    return {
      tabs: [
        {
          title: "所有配对"
        },
        {
          title: "聊天"
        }
      ],
      active: 0,
      // bool:false
    };
  },
  components: {
    pair,
    chat
  },
  methods: {
    change(idx) {
      this.active = idx;
    }
  },
  //从observel里获取值
   computed:{
   state(){
     return state
   }
  }
};
</script>
<style scoped>
template {
  position: relative;
}
/* #box {
  width: 85%;
  height: 100%;
  position: absolute;
  background: #2e2721;
  top: 0px;
  right: 0px;
} */
 li {
  list-style: none;
}
.main{
  background: #2d2824
}
.headers {
  width: 100%;
  height: 60px;
  background: #2c3033;
  position: relative;
}
.headers div {
  color: aliceblue;
  position: absolute;
  bottom: 5px;
  left: 40%;
}
.circle {
  width: 85%;
  height: 40px;
  border-radius: 10px;
  background: #736b68;
  top: 5px;
  left: 7.5%;
  line-height: 40px;
  position: relative;
}
.circlename {
  color: aliceblue;
  position: absolute;
  left: 15%;
  font-size: 14px;
}
.circle .wei {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 4%;
  top: 10px;
}
.circle .circleimg {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 5%;
  top: 10px;
}
.navs {
  width: 85%;
  display: flex;
  position: absolute;
  top: 110px;
  height: 30px;
  border-radius: 7px;
  border: 1px solid #736b68;
  text-align: center;
  line-height: 30px;
  left: 7.5%;
}
.navs li {
  width: 50%;
  border-radius: 5px;
  font-size: 12px;
  color: #736b68;
}
.navs .link {
  background: #736b68;
  color: aliceblue;
}
.changeStyle{
  background: #2e2721;
  position:absolute;
  top:0px;
  right:-410px;
  /* right:273px; */
  width: 85%;
  height: 100%;
  z-index:2;
  transition:all 3s;
}
.changeStyle1{
  background: #2e2721;
  position:absolute;
  top:0px;
  right:0px;
  width: 85%;
  height: 100%;
  z-index:2;
  transition:all 3s;
}
</style>

