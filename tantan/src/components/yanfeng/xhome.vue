<template>
  <div :style="state.isActionsheet ? state.aright: state.bright">
    <header>
      <!-- 左图标 -->
      <div class="leftIcon" @click="leftcheck"></div>

      <!-- 标题 -->
      <div class="title">
        <slot></slot>
      </div>
      <!-- 右图标 -->
      <div class="rightIcon" @click="chenk"></div>
    </header>
    <div>5456465465456</div>
    <div>5456465465456</div>
    <div>5456465465456</div>
  </div>
</template>
<script>
import state from "../../observable.js";
export default {
  computed: {
    state() {
      return state;
    }
  },
  methods: {
    chenk() {
      if (this.state.isActionsheet == true) {
        this.state.isActionsheet = false;
        this.state.isleft = false;
        this.state.aright.marginLeft='0rem'
        console.log(this.state.isleft)
        console.log(this.state.isActionsheet)
      } else {
        this.state.isActionsheet = true;
        this.state.isleft = true;
        this.state.aright.marginLeft='-8.0rem'
        console.log(this.state.isleft)
        console.log(this.state.isActionsheet)
      }
    },
    leftcheck() {
      if (this.state.isActionsheet == true) {
       
        this.state.isActionsheet = false;
        // this.state.isleft = false;
        this.state.aright.marginLeft='0rem'
        console.log(this.state.aright.marginLeft)
      } else {
        this.state.isActionsheet = true;
        // this.state.isleft = true;
        this.state.aright.marginLeft='8.0rem'
        console.log(this.state.aright.marginLeft)
      }
    }
  }
};
</script>
<style scoped >
/* css是局部样式 */
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
  background: url(../../assets/menu.png) no-repeat center;
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
  background: url(../../assets/my.png) no-repeat center;
  background-size: 0.64rem;
  flex: 1;
}
</style>
