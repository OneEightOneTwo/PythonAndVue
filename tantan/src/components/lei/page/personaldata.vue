<template>
    <div>
        <div>
    <header>
      <!-- 左图标 -->
      <div class="leftIcon"></div>

      <!-- 标题 -->
      <div class="title">
        <slot></slot>
      </div>
      <!-- 右图标 -->
      <div class="rightIcon"></div>
    </header>
  </div>
        <div>
            <img src="../../../assets/4.jpg" alt="" class="img">
        </div>
        <div class="names">
            <ul class="aul">
                <li>Zero</li>
                <li class="aul_li">
                    <span>21</span>
                    <span>天蝎座</span>
                </li>
                <li>1小时前活跃</li>
            </ul>
        </div>      
            <div class="renzheng">
                <span><img src="../../../assets/ren.png" alt=""></span>
                <span>未完成真实头像认证,认证后可加速推荐</span>
                <span><img src="../../../assets/arrow-right.png"></span>             
            </div>
        <div class="xinx">
            <p>我的信息</p>
            <p>
                <span>星座</span>
                <span>天蝎座</span>
            </p>
        </div>
    </div>
</template>
<script>

export default {
    components: {
        
    }
}
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
body{
    line-height: none;
}
ul,li{
    list-style: none;
}
.img{
    width:100%;
    height:300px;
}
.names{
    position: relative;
    height: 77px;
   
    
}
.names .aul{
    position: absolute;
    left:10px;
    
    
}
.names .aul .aul_li{
    height: 25px;
    position: relative;
}
.names .aul .aul_li span:nth-child(1) {
    display: inline-block;
    font-size: 12px;
    border-radius: 5px;
    background: #eccbf2;
    color:seashell;
    width:42px;
    height:22px;
     text-align: center;
    line-height: 22px;
    position: absolute;
}
.names .aul .aul_li span:nth-child(2) {
    display: inline-block;
    font-size: 12px;
    border-radius: 5px;
    background: #4a9d7b;
    color:seashell;
    width:42px;
    height:22px;
    text-align: center;
    line-height: 22px;
    position: absolute;
    left:50px;
    
    
}
.names .aul li:nth-child(3) {
    font-size: 12px;
    color:#a6a6a6
}
.renzheng{
    font-size: 12px;
    width:100%;
    height:42px;
    background: #74c4f7;
    color:seashell;
    line-height: 42px;
    position: relative;
}
.renzheng span:nth-child(1) img{
    width:20px;
    height:20px;
    position: absolute;
    top:12px;
    left:12px;
}
.renzheng span:nth-child(2){
   
    position: absolute;

    left:37px;
}
.renzheng span:nth-child(3) img{
    width:20px;
    height:20px;
     position: absolute;
    top:12px;
    right:10px ;
}
.xinx{
    color: #9b9b9b;
    font-size: 14px;


}
.xinx p{
    height:40px;
    line-height: 40px;
    padding-left: 10px; 

}
.xinx p:nth-child(1){
    background: #f6f5f1
}
.xinx p:nth-child(2) span:nth-child(2){
     padding-left: 35px; 
}
</style>
