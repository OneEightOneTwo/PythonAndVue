<template>
  <div id="side" :style="state.isActionsheet ? state.aleft: state.bleft">
    <dl>
      <dt>
        <img class="im1" src="../../assets/yu1.jpg" alt="">
        <span><img src="../../assets/tou_v.jpg"></span>
      </dt>
      <dd>
        <h2>Hello，我是黄景瑜</h2>
        <p>
          <span>点击查看</span>/
          <span>编辑</span>
        </p>
      </dd>
    </dl>
    <div class="bottom">
      <ul>
        <li @click="toTantan(index)" v-for="(t,index) in topics" :key="index">
          <i><img :src="t.url"/></i>
          <span v-text="t.title">探探</span>
        </li>

        <!-- <li><i>< img src="../../assets/tantan2.jpg"/></i><span>激活特权</span></li>
<li><i>< img src="../../assets/tantan3.jpg"/></i><span>认证中心</span></li>
<li><i>< img src="../../assets/tantan4.jpg"/></i><span>匿名暗恋表白</span></li>
<li><i>< img src="../../assets/tantan5.jpg"/></i><span>设置</span></li>
        <li><i>< img src="../../assets/tantan6.jpg"/></i><span>新手引导</span></li>-->
      </ul>
    </div>
  </div>
</template>
<script>
import state from "../../observable.js";
export default {
  data() {
    return {
      topics: [
        {
          title: "探探",
          url: require("../../assets/tantan1.jpg"),
          name: "lmain"
        },
        {
          title: "激活特权",
          url: require("../../assets/tantan2.jpg"),
          name: "active"
        },
        {
          title: "认证中心",
          url: require("../../assets/tantan3.jpg"),
          name: "ident"
        },
        {
          title: "设置",
          url: require("../../assets/tantan5.jpg"),
          name: "shezhi"
        }
      ],
      topic: 0
    };
  },
  components: {},
  //从observel里获取值
  computed: {
    state() {
      return state;
    }
  },
  methods: {
    toTantan(topic) {
      this.topic = topic;
      let name = this.topics[topic].name;
      this.$router.push({ name });
    }
  }
};
</script>
<style scoped>
ul,
li {
  list-style: none;
}
#side{
  position: absolute;
  top:0;
  left: -232px;
}
.side1 {
  position: absolute;
  width: 85%;
  height: 100%;
  margin-left: 0;
  transition: all 2s;
  z-index: 3;
  margin-top: -50px;
  
}
.side2 {
  position: absolute;
  width: 85%;
  height: 100%;
  /* margin-left: -85%; */
  transition: all 2s;
  z-index: 3;
  margin-top: -50px;
}
#side dl {
  width: 85%;
  height: 220px;
  background: #2c3033;
  position: relative;
  /* z-index:2; */
}
#side dl dt {
  width: 87px;
  height: 87px;
  border-radius: 50%;
  /* overflow: hidden; */
  position: absolute;
  top: 79px;
  left: 113px;
}
#side dl dt .im1 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
#side dl dt span {
  width: 27px;
  height: 27px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  left: 55px;
  top: 65px;
}
#side dl dt span img {
  width: 100%;
  height: 100%;
}
#side dl dt img {
  width: 100%;
  height: 100%;
}
#side dl dd {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 176px;
  left: 0px;
}
#side dl dd h2 {
  font-size: 17px;
  color: #f6f2ef;
}
#side dl dd p {
  color: #cecdcb;
  font-size: 12px;
}
#side .bottom {
  height: 552px;
  background: #2c3033;
  width: 85%;
  padding-top: 35px;
  z-index: 2;
}
#side .bottom ul li {
  height: 22px;
  width: 200px;
  position: relative;
  margin-bottom: 45px;
}
#side .bottom ul li i {
  display: inline-block;
  width: 21px;
  height: 21px;
  position: absolute;
  left: 35px;
  top: 0px;
}
#side .bottom ul li i img {
  width: 100%;
  height: 100%;
}
#side .bottom ul li span {
  font-size: 12px;
  color: #fffeff;
  font-weight: normal;
  position: absolute;
  left: 90px;
  top: 0px;
}
/* .contian{
position: relative;
overflow: hidden;
}
.contian .bg{
height: 100%;
background: url(../../assets/yu1.jpg) center center no-repeat;
background-size: cover;
filter: blur(10px);
} */
</style>