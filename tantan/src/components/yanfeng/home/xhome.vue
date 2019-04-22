<template>
  <div class="xhome" :style="state.isActionsheet ? state.aright : state.bright">
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
    <div class="stack-wrapper">
      <stack ref="stack" :pages="someList" :stackinit="stackinit"></stack>
    </div>
    <div class="controls">
      <button @click="prev" class="button">
        <i class="prev"></i><span class="text-hidden">prev</span>
      </button>
      <button @click="next" class="button">
        <i class="next"></i><span class="text-hidden">next</span>
      </button>
    </div>
  </div>
</template>
<script>
import state from "../../../observable.js";
import stack from "../../stack.vue";
export default {
  data() {
    return {
      someList: [],
      stackinit: {
        visible: 3
      }
    };
  },
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
        this.state.aright.marginLeft = "0rem";
      } else {
        this.state.isActionsheet = true;
        this.state.isleft = true;
        this.state.aright.marginLeft = "-8.0rem";
      }
    },
    leftcheck() {
      if (this.state.isActionsheet == true) {
        this.state.isActionsheet = false;
        this.state.isasid = false;
        this.state.aright.marginLeft = "0rem";
      } else {
        this.state.isActionsheet = true;
        this.state.isasid = true;
        this.state.aright.marginLeft = "7.5rem";
      }
    },
    prev() {
      this.$refs.stack.$emit("prev");
    },
    next() {
      this.$refs.stack.$emit("next");
    }
  },
  mounted() {
    let that = this;
    that.someList = [
      // {
      //   html: '<img src="../assets/1.png" alt="01">'
      // },
      // {
      //   html: '<img src="../assets/2.png" alt="02">'
      // },
      // {
      //   html: '<img src="../assets/3.png" alt="03">'
      // },
      // {
      //   html: '<img src="../assets/4.png" alt="04">'
      // },
      // {
      //   html: '<img src="../assets/5.png" alt="05">'
      // },
      // {
      //   html: '<img src="../assets/6.png" alt="06">'
      // },
      // {
      //   html: '<img src="../assets/7.png" alt="07">'
      // }
      { url: "../assets/2.png" },
      { url: "../assets/2.png" },
      { url: "../assets/3.png" },
      { url: "../assets/4.png" },
      { url: "../assets/5.png" },
      { url: "../assets/6.png" },
      { url: "../assets/7.png" }
    ];
  },
  components: {
    stack
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
.xhome {
  background: rgb(255, 255, 255);
  height: 15.146667rem;
}

.stack-wrapper {
  margin: 0 auto;
  position: relative;
  width: 320px;
  height: 320px;
  padding: 0;
  list-style: none;
  pointer-events: none;
}
.controls {
  position: relative;
  width: 200px;
  text-align: center;
  display: flex; /*Flex布局*/
  display: -webkit-flex; /* Safari */
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 170px;
}
.controls .button {
  border: none;
  background: none;
  position: relative;
  display: inline-block;
  cursor: pointer;
  font-size: 16px;
  width: 50px;
  height: 50px;
  z-index: 100;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border-radius: 50%;
  background: #fff;
}
.button .next {
  display: inline-block;
  width: 10px;
  height: 5px;
  background: rgb(129, 212, 125);
  line-height: 0;
  font-size: 0;
  vertical-align: middle;
  -webkit-transform: rotate(45deg);
  left: -5px;
  top: 2px;
  position: relative;
}
.button .next:after {
  content: "/";
  display: block;
  width: 20px;
  height: 5px;
  background: rgb(129, 212, 125);
  -webkit-transform: rotate(-90deg) translateY(-50%) translateX(50%);
}
.button .prev {
  display: inline-block;
  width: 20px;
  height: 5px;
  background: rgb(230, 104, 104);
  line-height: 0;
  font-size: 0;
  vertical-align: middle;
  -webkit-transform: rotate(45deg);
}
.button .prev:after {
  content: "/";
  display: block;
  width: 20px;
  height: 5px;
  background: rgb(230, 104, 104);
  -webkit-transform: rotate(-90deg);
}
.controls .text-hidden {
  position: absolute;
  overflow: hidden;
  width: 0;
  height: 0;
  color: transparent;
  display: block;
}
</style>
