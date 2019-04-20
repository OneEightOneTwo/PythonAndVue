<template>
  <div class="active" :style="state.isactive ? state.activeleft: state.activerifht">
    <div>
      <header>
        <!-- 左图标 -->
        <div class="leftIcon" @click="chenck"></div>

        <!-- 标题 -->
        <div class="title">
          <slot></slot>
        </div>
        <!-- 右图标 -->
        <div class="rightIcon"></div>
      </header>
    </div>
    <div class="banner">
      <img class="ig1" src="../../../assets/yu1.jpg" alt>
      <div class="banner_c">
        <img src="../../../assets/yu1.jpg" alt>
      </div>
      <h2>我是黄景瑜</h2>
      <p>暂未激活会员</p>
    </div>
    <ul class="u1">
            <li @click="change(index)" :key="index" v-for="(n,index) in biaoti"><span v-text="n.title" :class="{heighter:index==active}">VIP特权</span></li>
        </ul>
        <div class="List_u">
        <vip v-show="active==0"></vip>
        <like v-show="active==1"></like>
        <baoguang v-show="active==2"></baoguang>
        </div>
        <div class="getMember" style="background:#ea6151;color:#fff1ee;">认证成功</div>
        </div>
</template>
<script>
import state from "../../../observable.js";

import vip from './active/vip.vue'
import like from './active/like.vue'
import baoguang from './active/baoguang.vue'
export default {
  data(){
    return{
      biaoti:[
        {
          title:"VIP特权"
        },{
          title:"查看谁喜欢我"
        },{
          title:"超级曝光"
        },
        
      ],
      active: 0,
    };
  },
   computed: {
    state() {
      return state;
    }
  },
   components: {
    vip,
    like,
    baoguang
  },
  methods: {
    chenck(){
      if (this.state.isactive == true) {
        this.state.isactive = false;
        this.state.isasid = true;
        this.state.isActionsheet = true;
      } else {
        this.state.isactive = true;
        this.state.isasid = false;
        this.state.isActionsheet = true;
        
      }
    },
     change(idx) {
      this.active = idx;
    },
  }
};
</script>
<style scoped>
.List_u{
height:415px;
}
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
.active {
  width: 100%;
  position: absolute;
  height:100%;
  overflow-x:hidden
}
ul,
li {
  list-style: none;
}
.banner {
  width: 100%;
  height: 3.306667rem;
  overflow: hidden;
  position: relative;
}
.banner h2 {
  color: #f5eee6;
  font-size: .4rem;
  position: absolute;
  top: .773333rem;
  left: 2.72rem;
}
.banner p {
  color: #a4a6b3;
  font-size: .293333rem;
  position: absolute;
  top: 1.706667rem;
  left: 2.72rem;
}
.banner .ig1 {
  margin-top: -30%;
  filter: blur(.053333rem);
}
.banner .banner_c {
  width: 1.706667rem;
  height: 1.706667rem;
  position: absolute;
  left: .426667rem;
  top: .56rem;
  -moz-border-radius:.853333rem;
  -webkit-border-radius: .853333rem;
  border-radius: 50%;
  border: none;
  overflow: hidden;
}
.banner .banner_c img {
  width: 100%;
  height: 100%;
}
.u1 {
  height: 1.306667rem;
  margin-bottom: .453333rem;
}
.u1 li {
  float: left;
  width: 3.013333rem;
  height: 1.306667rem;
  line-height: 1.306667rem;
  text-align: center;
  margin-right: .266667rem;
}
ul li span {
  display: inline-block;
  height: 1.306667rem;
  color: #b5b5b5;
  font-size: .373333rem;
}
.heighter {
  border-bottom: .053333rem solid #d37c51;
  color: #d37c51;
}
.List dl {
  height:1.306667rem;
  position: relative;
  margin-bottom: .72rem;
}
.List dl dt {
  height: 1.306667rem;
  width: 1.306667rem;
  margin-right: .4rem;
  position: absolute;
  left: .453333rem;
  top: 0px;
}
.List dl dt img {
  height: 100%;
  width: 100%;
}
.List dl dd {
  position: absolute;
  left: 2.186667rem;
  top: .16rem;
}
.List dl dd h2 {
  color: #181818;
  font-size: .426667rem;
}
.List dl dd p {
  font-size: .293333rem;
  color: #9a9a9a;
}
.getMember {
  width: 9.093333rem;
  height: 1.28rem;
  background: #f5f6f1;
  color: #eafcee;
  font-size: .426667rem;
  text-align: center;
  line-height: 1.28rem;
  margin: 1.706667rem 0 .533333rem .48rem;
  border-radius: .266667rem;
}
</style>


