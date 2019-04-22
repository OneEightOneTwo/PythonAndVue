<template>
  <div>
    <header>
      <!-- 左图标 -->
      <div class="leftIcon">
        <span>
          <img src="../../../assets/left.png" alt>
        </span>
        <span @click="toEdit">编辑个人资料</span>
      </div>
      <div class="title">行业</div>
      <div class="rightIcon"></div>
    </header>
    <main class="main">
        <dl class="main_dl">
            <dt class="main_dl_dt">
                <span>
                    <img src="../../../assets/edit9.png" alt="">
                </span>
                <span>创建我自己的标签</span>
                <span>
                    <img src="../../../assets/arrow-right.png" alt="">
                </span>
            </dt>
            <dd>学生</dd>
            <dd>文化/艺术</dd>
            <dd>影视/娱乐</dd>
            <dd>金融</dd>
            <dd>医药/健康</dd>
            <dd>工业/制造业</dd>
            <dd>IT/互联网/通信</dd>
            <dd>媒体/公关</dd>
            <dd>零售</dd>
            <dd>教育/科研</dd>
            <dd>其他</dd>
            
        </dl>
    </main>
  </div>
</template>
<script>
export default {
    // data(){
    //     return{
    //         datas:[
    //             {
    //               title:'学生' 
    //             },{
    //               title:'学生' 
    //             },{
    //               title:'学生' 
    //             },{
    //               title:'学生' 
    //             },{
    //               title:'学生' 
    //             },{
    //               title:'学生' 
    //             },{
    //               title:'学生' 
    //             },{
    //               title:'学生' 
    //             },
    //         ]
    //     }
    // }
    methods:{
      toEdit(){
        this.$router.push({name:"edit"})
      }
    }
};
</script>
<style scoped>
/* css是局部样式 */
header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: white;
  background-color: red;
  /* 弹性盒布局 */
  font-size: 13px;
  display: flex;
}
.leftIcon {
  position: relative;
  flex: 3;
}
.leftIcon span:nth-child(1) img {
  width: 15px;
  height: 15px;
  position: absolute;
  top: 50%;
  margin-top: -7.5px;
}
.leftIcon span:nth-child(2) {
  margin-left: 13px;
}

.title {
  flex: 4;
}

.rightIcon {
  flex: 3;
}
.main .main_dl .main_dl_dt{
    height:40px;
    position: relative;
    margin-left:15px;
    border-bottom: 1px solid #ebebeb
}
.main .main_dl .main_dl_dt span:nth-child(1) img{
    width:20px;
    height:20px;
    position: absolute;
    top:50%;
    margin-top:-10px;
   
}
.main .main_dl .main_dl_dt span:nth-child(2) {
    line-height: 40px;
     position: absolute;
    left:35px;
    color: #424242;
    font-size: 13px;
}
.main .main_dl .main_dl_dt span:nth-child(3) img{
    width:20px;
    height:20px;
     position: absolute;
    top:50%;
    right:15px;
    margin-top:-10px;
}
.main .main_dl dd{
    height:40px;
    margin-left:15px;
    border-bottom: 1px solid #ebebeb;
    line-height: 40px;
    font-size: 13px;
    color: #424242;
}
</style>


