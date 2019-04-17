<template>
  <div>
    <Xheader></Xheader>
    <div class="body">
      <div class="ShowFoMe">
        <span>向我显示</span>
      </div>
      <div class="SFM_content">
        <div class="main">
          <div class="address">
            <div class="main_title">位置</div>
            <div class="now_address">
              <b>我的当前定位</b>
            </div>
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
<style scoped>
.body {
  background-color: #f4f6f0;
  height: 1000px;
}
.ShowFoMe {
  height: 61px;
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
}
.SFM_content {
  background-color: #fff;
  overflow: hidden;
}
.address {
  line-height: 76px;
  border-bottom: 1px solid #e9e9e9;
  overflow: hidden;
}
.main_title {
  color: #494949;
  float: left;
}
</style>
