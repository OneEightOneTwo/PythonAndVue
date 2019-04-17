<template>
  <div>
    <xheader>新手指导</xheader>
    <div class="img">
      <img src="../../../assets/nav.png" alt>
    </div>
    <div>
      <ul class="mail">
        <li >
          <span class="lift">探探怎么玩</span>
          <span class="right"></span>
        </li>
         <li >
          <span class="lift">怎样让更多人喜欢我？</span>
          <span class="right"></span>
        </li>
         <li >
          <span class="lift">我没有配对</span>
          <span class="right"></span>
        </li>
         <li >
          <span class="lift">探探怎么玩</span>
          <span class="right"></span>
        </li>
         <li >
          <span class="lift">探探怎么玩</span>
          <span class="right"></span>
        </li>
         <li >
          <span class="lift">探探怎么玩</span>
          <span class="right"></span>
        </li>
         <li >
          <span class="lift">探探怎么玩</span>
          <span class="right"></span>
        </li> 
      </ul>
    </div>
  </div>
</template>
<script>
import xheader from "../../Xheader.vue";
export default {
  components: {
    xheader
  }
};
</script>
<style scoped>

.img img {
  width: 100%;
}
.mail li {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgb(241, 245, 244);
  line-height: 60px;
  position: relative;
}
.lift{
  position: absolute;
  left: 20px;
}
.right {
  background: url(../../../assets/arrow-right.png) no-repeat center;
  background-size: 20px;
  display: inline-block;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  top: 19px;
}
</style>


