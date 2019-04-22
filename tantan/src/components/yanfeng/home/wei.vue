<template>
  <div class="wei" :style="state.iswei ? state.weirifht:state.weileft">
    <div class="xheader">
      <span class="weiimg" @click="checkleft">
        <img src="../../../assets/weileft.png" alt>
      </span>
      <span>微信</span>
      <span>
        <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_warn">发表</a>
      </span>
    </div>
    <div>
      <div class="tex">
        <textarea placeholder="这一刻的想法...." style="border:none"></textarea>
      </div>
      <div class="teximg">
        <img src="../../../assets/wei1.png" alt>
      </div>
      <div class="hr">
        <ul>
          <li v-for="(da,idx) in datas" :key="idx">
            <span>
              <img :src="da.titleimg" alt>
            </span>
            <span>{{da.names}}</span>
            <span>
              <img :src="da.img" alt>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import state from "../../../observable.js";
export default {
  data() {
    return {
      datas: [
        {
          titleimg: require("../../../assets/wei3.png"),
          names: "所在位置",
          img: require("../../../assets/arrow-right.png")
        },
        {
          titleimg: require("../../../assets/wei2.png"),
          names: "谁可以看",
          img: require("../../../assets/arrow-right.png")
        },
        {
          titleimg: require("../../../assets/wei4.png"),
          names: "提醒谁看",
          img: require("../../../assets/arrow-right.png")
        }
      ]
    };
  },
  methods: {
    checkleft() {
      if (this.state.iswei == true) {
        this.state.iswei = false;
        this.state.isasid = false;
      } else {
        this.state.iswei = true;
        this.state.isasid = true;
      }
    }
  },
  computed:{
      state(){
          return state;
      }
  }
  
};
</script>
<style scoped>
ul,
li {
  list-style: none;
}
.wei{
  position: absolute;
  height:100%;
  overflow-x: hidden;
}
.xheader {
  height: 1.111111rem;
  line-height: 1.111111rem;
  position: relative;
}
.xheader span:nth-child(1) {
  display: inline-block;
  position: absolute;
  top: 50%;
  margin-top: -0.416667rem;
  width: 1.25rem;
  height: 0.833333rem;
}
.xheader span:nth-child(1) img {
  width: 0.481481rem;
  height: 0.481481rem;
  position: absolute;
  left: 0.388889rem;
  top: 50%;
  margin-top: -0.240741rem;
}
.xheader span:nth-child(2) {
  position: absolute;
  left: 1.12963rem;
  font-size: 0.416667rem;
}
.xheader span:nth-child(3) {
  font-size: 0.416667rem;
  position: absolute;
  right: 0.277778rem;
  margin-top: 0.185185rem;
}

.tex textarea {
  width: 8.611111rem;
  height: 3.222222rem;
  margin-left: 0.657407rem;
  font-size: 0.416667rem;
}
.teximg img {
  width: 8.675926rem;
  height: 1.75rem;
  margin-left: 0.666667rem;
}
.hr {
  width: 8.333333rem;
  border-top: 0.018519rem solid #d9d9d9;
  margin-left: 0.972222rem;
}
.hr li {
  height: 1.527778rem;
  line-height: 1.527778rem;
  position: relative;
  border-bottom: 0.009259rem solid #d9d9d9;
  font-size: 0.416667rem;
}
/* .hr li span{
    display: inline-block;
    width:90%;
    height:50px;
    line-height: 50px;
    
} */
.hr li span:nth-child(1) img {
  width: 0.592593rem;
  height: 0.592593rem;
  position: absolute;
  top: 50%;
  margin-top: -0.296296rem;
}
.hr li span:nth-child(2) {
  position: absolute;
  left: 1.018519rem;
}
.hr li span:nth-child(3) img {
  width: 0.388889rem;
  height: 0.388889rem;
  position: absolute;
  right: 0.435185rem;
  top: 50%;
  margin-top: -0.194444rem;
}
</style>
