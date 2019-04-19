<template>
  <div>
    <header>
      <!-- 左图标 -->
      <div class="leftIcon" 
      @click="clickLeft"
      ></div>

      <!-- 标题 -->
      <div class="title">
          <slot></slot>
      </div>
      <!-- 右图标 -->
      <div class="rightIcon"
      @click="clickRight"></div>
    </header>
  </div>
</template>
<script>
import state from '../observable.js'
export default {
  methods:{
    clickLeft(){
      
      this.state.ischangeStyle=!this.state.ischangeStyle
    },
   clickRight(){
      
      this.state.isAside=!this.state.isAside
    },
  },
  computed:{
   state(){
     return state
   }
  }
};
</script>
<style scoped >
/* css是局部样式 */
header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: white;
  background-color: red;
  /* 弹性盒布局 */
  display: flex;
}
.leftIcon {
  background: url(../assets/menu.png) no-repeat center;
  background-size: 24px;

  flex: 1;
}

.title {
  flex: 3;
}

.emptyIcon {
  flex: 1;
}
.rightIcon {
  background: url(../assets/my.png) no-repeat center;
  background-size: 24px;
  flex: 1;
}
</style>
