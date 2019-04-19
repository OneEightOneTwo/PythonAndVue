<template>
  <div id="box" :style="!state.isActionsheet ? state.falseright :state.trueright">
    <div class="headers">
      <div class="heade">
        <span>2</span>个配对
      </div>
    </div>
    <div class="main">
      <div class="circle">
        <span>
          <img src="../../../assets/wei.png" class="circlewei">
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
import pair from "../components/pair.vue";
import chat from "../components/chat.vue";

import state from "../../../observable.js";
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
      
     
    };
  },
  components: {
    pair,
    chat
  },
  computed: {
    state() {
      return state;
    }
  },
  methods: {
    change(idx) {
      console.log(idx)
      this.active = idx;
    }
  }
};
</script>
<style scoped>

#box {
  width: 8.266667rem;
  height: 17.146667rem;
  background: #2e2721;
  position: absolute;
  top:0;
  
}
#box li {
  list-style: none;
}
.headers {
  width:8.266667rem;
  height: 1.6rem;
  background: #2c3033;
  position: relative;
}
.headers .heade {
  color: aliceblue;
  position: absolute;
  bottom: .133333rem;
  left: 40%;
  font-size: .373333rem
}
.main {
  width:100%;
  height:100%;
  background: #2d2824;
  position: relative;
}
.main .circle {
  width: 7.433333rem;
  height: 1.066667rem;
  border-radius: .266667rem;
  background: #736b68;
  margin-left: .4rem;
  line-height: 1.066667rem;
   position: relative;
 
}

.circle .circlename {
  color: aliceblue;
  position: absolute;
  left: 15%;
  font-size: .373333rem;
}
.circle .circlewei {
  width: .533333rem;
  height: .533333rem;
  margin-left: .133333rem;
  position: absolute;
  top:50%;
  margin-top:-0.266667rem
}
.circle .circleimg {
  width: .533333rem;
  height: .533333rem;
  position: absolute;
  right: 5%;
  top:50%;
  margin-top:-0.266667rem

}
.navs {
  width: 68%;
  display: flex;
  /* position: absolute;
  top: 1.233333rem; */
  height: .8rem;
  border-radius: .186667rem;
  border: 1px solid #736b68;
  text-align: center;
  line-height: .8rem;
  /* left: 7.5%; */
  margin-top:.133333rem;
  margin-left: 1.266667rem
}
.navs li {
  width: 50%;
  border-radius: .133333rem;
  font-size: .32rem;
  color: #736b68;
}
.navs .link {
  background: #736b68;
  color: aliceblue;
}
.content{
  margin-top:.4rem
}

</style>

