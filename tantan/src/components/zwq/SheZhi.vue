<template>
  <div class="shezhi" :style="state.isshezhi ? state.shezhirifht:state.shezhileft">
    <div>
      <header>
        <!-- 左图标 -->
        <div class="leftIcon" @click="chenkleft"></div>

        <!-- 标题 -->
        <div class="title">
          <slot></slot>
        </div>
        <!-- 右图标 -->
        <div class="rightIcon" @click="chenkright"></div>
      </header>
    </div>
    <div class="body">
      <div class="ShowFoMe">
        <span>向我显示</span>
      </div>
      <div class="SFM_content" style="border-top: 1px solid #e9e9e9;">
        <div class="main">
          <div class="address border_btm_line">
            <div class="main_title">位置</div>
            <div class="now_address">
              <b>我的当前定位</b>
              <p>中国,广州</p>
            </div>
            <div class="address_icon"></div>
          </div>
        </div>
      </div>

      <div class="fanwei">
        <div class="main">
          <div class="border_btm_line">
            <div>
              <b style="float:left">范围</b>
              <b style="float:right;margin-right:20px;">0 ~ 100km+</b>
            </div>
            <!-- <van-slider class="fanwei_km" v-model="value" active-color="#f44">
              <div slot="button" class="custom-button">
                {{ value }}
              </div>
            </van-slider>-->
          </div>
        </div>
      </div>

      <div class="kuoda">
        <div class="main">
          <div class="border_btm_line kuoda_ctn">
            <div class="kd_left">
              <p>
                <b style="font-size:14px;">自动扩大范围</b>
              </p>
              <p>如果用户较少,自动适量扩大范围</p>
            </div>
            <div class="kd_right">
              <!-- <van-switch
                class="zdkdfw"
                v-model="checked"
                size="24px"
                active-color="#f44"
                inactive-color="#58bc58"
              />-->
            </div>
          </div>
        </div>
      </div>

      <div class="showsex">
        <div class="main" style="height:43px;">
          <div class="border_btm_line sex" style="height:42px;">
            <div class="sex_left">
              <b style="line-height:42px">显示性别</b>
            </div>
            <div class="sex_zhong" style="line-height:42px;color: #969696;">女生</div>
            <div class="sex_right"></div>
          </div>
        </div>
      </div>

      <div class="age">
        <div class="main">
          <div class="border_btm_line">
            <div>
              <b style="float:left">年龄</b>
              <b style="float:right;margin-right:20px;">16&nbsp;-&nbsp;50</b>
            </div>
            <div class="age_range">
              <!-- <van-slider
                class="nianling"
                v-model="nianling"
                :min="16"
                :max="50"
                @change="onChange"
              />-->
            </div>
          </div>
        </div>
      </div>

      <div class="student" style="border-bottom:1px solid #e9e9e9">
        <div class="main" style="height:43px;">
          <div class="border_btm_line" style="height:42px;border:0">
            <b>优先推荐学生</b>
            <div style>
              <!-- <van-switch
                class="stu_yx"
                v-model="checked2"
                size="24px"
                active-color="#f44"
                inactive-color="#58bc58"
              />-->
            </div>
          </div>
        </div>
      </div>

      <div class="AppSet">
        <span>应用设置</span>
      </div>
      <div class="setdiv" style="border-top:1px solid #e9e9e9">
        <div class="setmain">
          <div class="set_m_left">
            <div>
              <img src="../../assets/set1.png">
              <b>个人信息</b>
            </div>
            <p>编辑姓名等</p>
          </div>
          <div class="set_m_right"></div>
        </div>
      </div>

      <div class="setdiv">
        <div class="setmain">
          <div class="set_m_left">
            <div>
              <img src="../../assets/set2.png">
              <b>隐私和通知</b>
            </div>
            <p>联系人,我的相册,朋友圈和通知设置</p>
          </div>
          <div class="set_m_right"></div>
        </div>
      </div>

      <div class="setdiv">
        <div class="setmain">
          <div class="set_m_left">
            <div>
              <img src="../../assets/set3.png">
              <b>数据和缓存</b>
            </div>
            <p>数据和缓存设置</p>
          </div>
          <div class="set_m_right"></div>
        </div>
      </div>

      <div class="setdiv" style="border-bottom:1px solid #e9e9e9;">
        <div class="setmain" style="border:0">
          <div class="set_m_left">
            <div>
              <img src="../../assets/set4.png">
              <b>账号与安全</b>
            </div>
            <p>修改手机号和密码</p>
          </div>
          <div class="set_m_right"></div>
        </div>
      </div>

      <div
        class="setdiv"
        style="border-bottom:1px solid #e9e9e9;margin-top:25px;border-top:1px solid #e9e9e9;margin-bottom: 50px;"
      >
        <div class="setmain" style="border:0">
          <div class="set_m_left">
            <div>
              <img src="../../assets/set5.png">
              <b>帮助与反馈</b>
            </div>
            <p>感谢您提出对探探的宝贵意见</p>
          </div>
          <div class="set_m_right"></div>
        </div>
      </div>
      <div class="foot_btn">恢复购买</div>
      <div class="foot_btn">切换账号</div>
      <div class="foot_btn">退出登录</div>
      <div class="copyright">
        <p>探探3.4.7</p>
        <p>版本3.4.7.2</p>
      </div>
    </div>
  </div>
</template>
<script>
import state from "../../observable.js";
export default {
  data() {
    return {
      value: 20,
      checked: true,
      checked2: true,
      nianling: 16
    };
  },
  methods: {
    onChange(nianling) {
      this.$toast("当前值：" + nianling);
    },
    chenkleft() {
      if (this.state.isshezhi == true) {
       
        this.state.isshezhi = false;
        this.state.isasid = false;
         
      } else {
        this.state.isshezhi = true;
        this.state.isasid = true;
       
        
       
      }
    },
    chenkright() {
      if (this.state.isshezhi == true) {
       
        this.state.isshezhi = false;
        this.state.isleft = false;
         this.state.shezhirifht.left = "7.5rem";
      } else {
        this.state.isshezhi = true;
        this.state.isleft = true;
       this.state.shezhirifht.left = "-8.2rem";
        
       
      }
    }
  },
  computed: {
    state() {
      return state;
    }
  }
};
</script>

<style scoped>
.shezhi {
  position: absolute;
  height: 100%;
  overflow-x: hidden;
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

html {
  background-color: #f4f6f0;
}
.ShowFoMe,
.AppSet {
  height: 50px;
  position: relative;
}
.ShowFoMe span,
.AppSet span {
  position: absolute;
  bottom: 5px;
  left: 22px;
  font-size: 13px;
  color: #979694;
}
.main {
  margin-left: 22px;
  overflow: hidden;
  height: 76px;
}
.SFM_content,
.fanwei,
.kuoda,
.showsex,
.age,
.student {
  background-color: #fff;
  overflow: hidden;
}
.address {
  height: 75px;
  overflow: hidden;
  display: flex;
}
.border_btm_line {
  height: 75px;
  border-bottom: 1px solid #e9e9e9;
}
.main_title {
  color: #494949;
  /* float: left; */
  flex: 2;
  line-height: 76px;
  font-weight: bold;
}
.now_address {
  flex: 7;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 20px;
}
.now_address b {
  margin-top: 19px;
}
.address_icon {
  flex: 1;
  line-height: 76px;
  background-image: url(../../assets/address_icon.png);
  background-repeat: no-repeat;
  background-position: -5px 30px;
}
.fanwei {
  height: 76px;
}
.fanwei .main .border_btm_line > div:nth-child(1),
.age .main .border_btm_line > div:nth-child(1) {
  padding-top: 10px;
  overflow: hidden;
}
.kilometer {
  background-color: red;
  height: 33px;
}
.age_range {
  height: 33px;
}
.kuoda .kuoda_ctn {
  display: flex;
  flex-direction: row;
}
.kuoda .kuoda_ctn .kd_left {
  flex: 8;
  color: #969696;
}
.kuoda .kuoda_ctn .kd_left b {
  color: #3e3e3e;
}
.kuoda .kuoda_ctn .kd_left p {
  margin-top: 12px;
}
.kuoda .kuoda_ctn .kd_right {
  flex: 2;
}
.showsex .sex {
  display: flex;
  flex-direction: row;
}
.showsex .sex .sex_left {
  flex: 7;
}
.showsex .sex .sex_zhong {
  flex: 1;
}
.showsex .sex .sex_right {
  flex: 1;
  background-image: url(../../assets/address_icon.png);
  background-repeat: no-repeat;
  background-position: 4px 13px;
}
.student .main .border_btm_line {
  display: flex;
  flex-direction: row;
}
.student .main .border_btm_line b {
  flex: 8;
  line-height: 42px;
}
.student .main .border_btm_line div {
  flex: 2;
}
.setdiv {
  height: 76px;
  background-color: #fff;
}
.setmain {
  margin-left: 22px;
  border-bottom: 1px solid #e9e9e9;
  height: 75px;
  display: flex;
  flex-direction: row;
}
.setmain .set_m_left {
  flex: 9;
  padding-top: 15px;
}
.setmain .set_m_right {
  flex: 1;
  background-image: url(../../assets/address_icon.png);
  background-repeat: no-repeat;
  background-position: 1px 31px;
}
.setmain .set_m_left div {
  height: 21px;
}
.setmain .set_m_left img {
  width: 21px;
  height: 21px;
}
.setmain .set_m_left b {
  vertical-align: text-bottom;
  padding-left: 10px;
  font-size: 15px;
}
.setmain .set_m_left p {
  color: #969696;
  margin-top: 10px;
}
.foot_btn {
  border: 1px solid #5e5e5e;
  color: #5e5e5e;
  width: 85%;
  line-height: 45px;
  margin: 20px auto;
  text-align: center;
  font-size: 14px;
  border-radius: 10px;
}
.copyright {
  text-align: center;
  font-size: 8px;
  color: #969696;
}
.copyright p:nth-child(1) {
  font-size: 12px;
}
.fanwei_km {
  margin: 10px 0 0 10px;
  width: 90%;
}
.zdkdfw {
  margin-top: 20px;
}
.stu_yx {
  margin-top: 8px;
}
.nianling {
  margin: 10px 0 0 10px;
  width: 90%;
}
</style>


