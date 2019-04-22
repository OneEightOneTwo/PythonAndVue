<template>
  <div class="lmain" :style="state.islmain ? state.lmainrifht:state.lmainleft">
   <div>
    <header>
      <!-- 左图标 -->
      <div class="leftIcon" @click="checkleft"></div>

      <!-- 标题 -->
      <div class="title">
        新手引导
      </div>
      <!-- 右图标 -->
      <div class="rightIcon"></div>
    </header>
  </div>
    <div class="img">
      <img src="../../../assets/nav.png" alt>
    </div>
    <div>
      <ul class="mail">
        <li >
          <span class="lift">探探怎么玩</span>
          <span class="right"></span>
        </li>
         <li >
          <span class="lift">怎样让更多人喜欢我？</span>
          <span class="right"></span>
        </li>
         <li >
          <span class="lift">我没有配对</span>
          <span class="right"></span>
        </li>
         <li >
          <span class="lift">探探怎么玩</span>
          <span class="right"></span>
        </li>
         <li >
          <span class="lift">探探怎么玩</span>
          <span class="right"></span>
        </li>
         <li >
          <span class="lift">探探怎么玩</span>
          <span class="right"></span>
        </li>
         <li >
          <span class="lift">探探怎么玩</span>
          <span class="right"></span>
        </li> 
      </ul>
    </div>
  </div>
</template>
<script>
import state from "../../../observable.js";
export default {
  methods: {
    checkleft() {
      if (this.state.islmain == true) {
        this.state.islmain = false;
        this.state.isasid = false;
        this.state.asidleft.transition = "all 0.6s";
      } else {
        this.state.islmain = true;
        this.state.isasid = true;
        this.state.asidleft.transition = "all 0.5s";
      }
    }
  },
  computed:{
      state(){
          return state;
      }
  },
 
};
</script>
<style scoped>
header {
  width: 10rem;
  height: 1.333333rem;
  line-height: 1.333333rem;
  text-align: center;
  color: white;
  background-color: red;
  /* 弹性盒布局 */
  display: flex;
}
.lmain{
   position: absolute;
  height:100%;
  overflow-x: hidden;
}
.leftIcon {
  background: url(../../../assets/menu.png) no-repeat center;
  background-size: 0.64rem;
  flex: 1;
}

.title {
  flex: 3;
}

.emptyIcon {
  flex: 1;
}
.rightIcon {
  background: url(../../../assets/my.png) no-repeat center;
  background-size: 0.64rem;
  flex: 1;
}
.img img {
  width: 100%;
}
.mail li {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgb(241, 245, 244);
  line-height: 60px;
  position: relative;
}
.lift{
  position: absolute;
  left: 20px;
}
.right {
  background: url(../../../assets/arrow-right.png) no-repeat center;
  background-size: 20px;
  display: inline-block;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  top: 19px;
}
</style>


