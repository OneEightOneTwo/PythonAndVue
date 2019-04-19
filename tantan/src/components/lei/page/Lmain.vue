<template>
  <div>
      <div :style="state.isActionsheet ? state.aright: state.bright">
    <header>
      <!-- 左图标 -->
      <div class="leftIcon" ></div>

      <!-- 标题 -->
      <div class="title">
        <slot></slot>
      </div>
      <!-- 右图标 -->
      <div class="rightIcon" @click="chenk"></div>
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

export default {
 
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


