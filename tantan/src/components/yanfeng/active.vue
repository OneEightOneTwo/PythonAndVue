<template>
    <div class="active">
        <xheader></xheader>
        <div class="banner">
            <img class="ig1" src="../../assets/yu1.jpg" alt="">
            <div class="banner_c">
                <img src="../../assets/yu1.jpg" alt="">
            </div>
            <h2>我是黄景瑜</h2>
            <p>暂未激活会员</p>

        </div>
        <ul class="u1">
            <li><span class="heighter">VIP特权</span></li>
            <li><span>查看谁喜欢我</span></li>
            <li><span>超级曝光</span></li>
        </ul>
        <div class="List">
            <dl>
                <dt><img src="../../assets/huiyuan1.jpg" alt=""></dt>
                <dd>
                    <h2>会员身份标识</h2>
                    <p>昵称升级为红色,专属身份标识</p>
                </dd>
            </dl>
            <dl>
                <dt><img src="../../assets/huiyuan2.jpg" alt=""></dt>
                <dd>
                    <h2>每天5个“超级喜欢”</h2>
                    <p>喜欢更有分量，配对飙升5倍！</p>
                </dd>
            </dl>
            <dl>
                <dt><img src="../../assets/huiyuan3.jpg" alt=""></dt>
                <dd>
                    <h2>划错无限反悔</h2>
                    <p>强力反悔，配对飙升5倍</p>
                </dd>
            </dl>
            <dl>
                <dt><img src="../../assets/huiyuan4.jpg" alt=""></dt>
                <dd>
                    <h2>任意更改定位，</h2>
                    <p>位置漫游，与全国朋友say嗨！</p>
                </dd>
            </dl>
            <dl>
                <dt><img src="../../assets/huiyuan5.jpg" alt=""></dt>
                <dd>
                    <h2>无限喜欢次数</h2>
                    <p>突破限制，放肆喜欢不再顾虑</p>
                </dd>
            </dl>
        </div>
        <div class="getMember" style="background:#ea6151;color:#fff1ee;">认证成功</div>
    </div>
</template>
<script>
import xheader from "../Xheader.vue";
export default {
  components: {
    xheader
  }
};
</script>
<style scoped>
.active{
  width: 100%;
}
ul,
li {
  list-style: none;
}
.banner {
  width: 100%;
  height: 124px;
  overflow: hidden;
  position: relative;
}
.banner h2 {
  color: #f5eee6;
  font-size: 15px;
  position: absolute;
  top: 29px;
  left: 102px;
}
.banner p {
  color: #a4a6b3;
  font-size: 11px;
  position: absolute;
  top: 64px;
  left: 102px;
}
.banner .ig1 {
  margin-top: -30%;
  filter: blur(2px);
}
.banner .banner_c {
  width: 64px;
  height: 64px;
  position: absolute;
  left: 16px;
  top: 21px;
  -moz-border-radius: 32px;
  -webkit-border-radius: 32px;
  border-radius: 50%;
  border: none;
  overflow: hidden;
}
.banner .banner_c img {
  width: 100%;
  height: 100%;
}
.u1 {
  height: 49px;
  margin-bottom: 17px;
}
.u1 li {
  float: left;
  width: 113px;
  height: 49px;
  line-height: 49px;
  text-align: center;
  margin-right: 10px;
}
ul li span {
  display: inline-block;
  height: 49px;
  color: #b5b5b5;
  font-size: 14px;
}
.heighter {
  border-bottom: 2px solid #d37c51;
  color: #d37c51;
}
.List dl {
  height: 49px;
  position: relative;
  margin-bottom: 27px;
}
.List dl dt {
  height: 49px;
  width: 49px;
  margin-right: 15px;
  position: absolute;
  left: 17px;
  top: 0px;
}
.List dl dt img {
  height: 100%;
  width: 100%;
}
.List dl dd {
  position: absolute;
  left: 82px;
  top: 6px;
}
.List dl dd h2 {
  color: #181818;
  font-size: 16px;
}
.List dl dd p {
  font-size: 11px;
  color: #9a9a9a;
}
.getMember {
  width: 341px;
  height: 48px;
  background: #f5f6f1;
  color: #eafcee;
  font-size: 16px;
  text-align: center;
  line-height: 48px;
  margin:64px 0 20px 18px;
  border-radius: 10px;
}
</style>


