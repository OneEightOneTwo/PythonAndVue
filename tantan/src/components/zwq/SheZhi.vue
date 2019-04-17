<template>
  <div>
    <Xheader></Xheader>
    <div class="body">
      <div class="ShowFoMe">
        <span>向我显示</span>
      </div>
      <div class="SFM_content">
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
              <b style="float:right;margin-right:20px;">100km+</b>
            </div>
            <div class="kilometer"></div>
          </div>
        </div>
      </div>

      <div class="kuoda">
        <div class="main">
          <div class="border_btm_line kuoda_ctn">
            <div class="kd_left">
              <p><b>自动扩大范围</b></p>
              <p>如果用户较少,自动适量扩大范围</p>
            </div>
            <div class="kd_right"></div>
          </div>
        </div>
      </div>

      <div class="showsex">
        <div class="main" style="height:43px;">
          <div class="border_btm_line sex" style="height:42px;">
            <div class="sex_left">
              <div style="line-height:42px">显示性别</div>
            </div>
            <div class="sex_zhong"></div>
            <div class="sex_right"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Xheader from "../Xheader.vue";
export default {
  components: {
    Xheader
  }
};
</script>

<style>
.body {
  background-color: #f4f6f0;
  height: 1000px;
}
.ShowFoMe {
  height: 55px;
  position: relative;
}
.ShowFoMe span {
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
.showsex {
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
.fanwei .main .border_btm_line div {
  overflow: hidden;
  padding-top: 10px;
}
.kilometer {
  background-color: red;
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
.kuoda .kuoda_ctn .kd_right {
  flex: 2;
  background-color: red;
}
.showsex .sex {
  display: flex;
  flex-direction: row;
}
.showsex .sex .sex_left {
  flex: 7;
}
.showsex .sex .sex_zhong {
  flex: 2;
}
.showsex .sex .sex_right {
  flex: 2;
}
</style>


