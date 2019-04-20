<template>
  <div class="isident" :style="state.isident ? state.identrifht:state.identleft">
    <div>
      <header>  
        <!-- 左图标 -->
        <div class="leftIcon" @click="check"></div>

        <!-- 标题 -->
        <div class="title">
          <slot></slot>
        </div>
        <!-- 右图标 -->
        <div class="rightIcon"></div>
      </header>
    </div>
    <div class="ident">
      <div class="t_photo">
        <h2>真实头像认证</h2>
        <p>大幅提高配对成功率，享受专属特权</p>
        <div class="ph">
          <dl>
            <dt>
              <img src="../../../assets/ident1.jpg">
            </dt>
            <dd>认证标识</dd>
          </dl>
          <dl>
            <dt>
              <img src="../../../assets/ident2.jpg">
            </dt>
            <dd>更多喜欢次数</dd>
          </dl>
          <dl>
            <dt>
              <img src="../../../assets/ident3.jpg">
            </dt>
            <dd>优先推荐</dd>
          </dl>
        </div>
      </div>
      <div class="b_photo">认证成功</div>
    </div>
    <div class="ident">
      <div class="t_photo">
        <h2>学生身份认证</h2>
        <p>提交在读学校信息，享受多项学生特权</p>
        <div class="ph">
          <dl>
            <dt>
              <img src="../../../assets/ident4.jpg">
            </dt>
            <dd>学生标识</dd>
          </dl>
          <dl>
            <dt>
              <img src="../../../assets/ident5.jpg">
            </dt>
            <dd>筛选认证用户</dd>
          </dl>
          <dl>
            <dt>
              <img src="../../../assets/ident6.jpg">
            </dt>
            <dd>满满信任感</dd>
          </dl>
        </div>
      </div>
      <div class="b_photo" style="background:#ea6151;color:#fff1ee;">认证成功</div>
    </div>
    <div class="footer">*认证资料仅用于审核，其他用户不可见</div>
  </div>
</template>
<script>
import state from "../../../observable.js";
export default {
   computed: {
    state() {
      return state;
    }
  },
  methods: {
    check(){
      if (this.state.isident == true) {
        this.state.isident = false;
        this.state.isasid = false;

      } else {
        this.state.isident = true;
        this.state.isasid = true;


        
      }
    }
  }
};
</script>
<style scoped>

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
.isident{
  position: absolute;
  height:100%;
  overflow-x:hidden
}
.ident {
  width: 10rem;
  height: 8.893333rem;
  padding: .533333rem .533333rem 0 .533333rem;
  border-radius: .533333rem;
}
.ident .t_photo {
  background: #ffffff;
}
.ident .t_photo h2 {
  font-size: .48rem;
  color: #2e2e2e;
  margin-left: 2.746667rem;
}
.ident .t_photo p {
  font-size: .32rem;
  color: #9b9b9b;
  margin-bottom: .453333rem;
  margin-left: 1.386667rem;
}
.ident .t_photo .ph {
  height: 3.84rem;
  width: 8.853333rem;
  display: flex;
  justify-content: space-around;
}
.ident .t_photo .ph dt {
  display: inline-block;
  width: 1.84rem;
  height: 1.84rem;
  
}
.ident .t_photo .ph dt img {
  width: 100%;
  height: 100%;
}
.ident .t_photo .ph dd {
  font-size: .32rem;
  color: #e3e3e3;
}

.ident .b_photo {
  width: 8.853333rem;
  height: 1.28rem;
  background: #f5f6f1;
  color: #c6504c;
  font-size:.426667rem;
  text-align: center;
  line-height: 1.28rem;
}
.footer {
  text-align: center;
  color: #a8a9a4;
  font-size: .266667rem;
}
</style>


