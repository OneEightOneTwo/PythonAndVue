<template>
  <div id="side" :style="state.isasid ? state.asidrifht: state.asidleft">
    <dl>
      <dt>
        <img class="im1" src="../../../assets/yu1.jpg" alt>
        <span>
          <img src="../../../assets/tou_v.jpg">
        </span>
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
          <i>
            <img :src="t.url">
          </i>
          <span v-text="t.title" ></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import state from "../../../observable.js";
export default {
  data() {
    return {
      topics: [
        {
          title: "探探",
          url: require("../../../assets/tantan1.jpg"),
          path: "xhome"
        },
        {
          title: "激活特权",
          url: require("../../../assets/tantan2.jpg"),
          path: "active"
        },
        {
          title: "认证中心",
          url: require("../../../assets/tantan3.jpg"),
          path: "ident"
        },
        {
          title: "设置",
          url: require("../../../assets/tantan5.jpg"),
          path: "shezhi"
        }
        ,
        {
          title: "新手引导",
          url: require("../../../assets/tantan6.jpg"),
          path: "lmain"
        }
        ,
        {
          title: "推荐给好友",
          url: require("../../../assets/tantan4.jpg"),
          path: "wei"
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
      let path = this.topics[topic].path; 
      this.$router.push({ path  });
      this.state.xhomeleft.marginLeft = "0rem";
      this.state.isasid = false;
      this.state.isActionsheet = false;
      this.state.isactive = true;
      this.state.isident = false;
      this.state.isshezhi = false
      this.state.islmain = false
    },
   
  }
};
</script>
<style scoped>
ul,
li {
  list-style: none;
}
#side {
  width: 75%;
  position: absolute;
  top: 0;
  left: 0px;
  height: 15.146667rem
}
.side1 {
  position: absolute;
  width: 100%;
  height: 100%;
  margin-left: 0;
  transition: all 2s;
  z-index: 3;
  margin-top: -1.333333rem;
}
.side2 {
  position: absolute;
  width: 100%;
  height: 100%;
  /* margin-left: -85%; */
  transition: all 2s;
  z-index: 3;
  margin-top: -1.333333rem;
}
#side dl {
  width: 100%;
  height: 5.866667rem;
  background: #2c3033;
  position: relative;
  /* z-index:2; */
}
#side dl dt {
  width: 2.32rem;
  height: 2.32rem;
  border-radius: 50%;
  /* overflow: hidden; */
  position: absolute;
  top: 2.106667rem;
  left: 3.013333rem;
}
#side dl dt .im1 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
#side dl dt span {
  width: .72rem;
  height:.72rem;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  left: 1.466667rem;
  top: 1.733333rem;
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
  top: 4.693333rem;
  left: 0px;
}
#side dl dd h2 {
  font-size: .453333rem;
  color: #f6f2ef;
}
#side dl dd p {
  color: #cecdcb;
  font-size: .32rem;
}
#side .bottom {
  height: 14.72rem;
  background: #2c3033;
  width: 100%;
  padding-top: .933333rem;
  z-index: 2;
}
#side .bottom ul li {
  height: .586667rem;
  width: 5.333333rem;
  position: relative;
  margin-bottom: 1.2rem;
}
#side .bottom ul li i {
  display: inline-block;
  width: .56rem;
  height: .56rem;
  position: absolute;
  left: .933333rem;
  top: 0px;
}
#side .bottom ul li i img {
  width: 100%;
  height: 100%;
}
#side .bottom ul li span {
  font-size: .32rem;
  color: #fffeff;
  font-weight: normal;
  position: absolute;
  left: 2.4rem;
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