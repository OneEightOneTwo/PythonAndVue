<template>
  <div class="List">
            <dl  @click="showDialog" v-for="(n,index) in biaoti" :key="index">
                <dt><img :src="n.url" alt=""></dt>
                <dd>
                    <h2 v-text="n.title">会员身份标识</h2>
                    <p v-text="n.content">昵称升级为红色,专属身份标识</p>
                </dd>
            </dl>
            <!-- <dl>
                <dt><img src="../../../assets/huiyuan2.jpg" alt=""></dt>
                <dd>
                    <h2>每天5个“超级喜欢”</h2>
                    <p>喜欢更有分量，配对飙升5倍！</p>
                </dd>
            </dl>
            <dl>
                <dt><img src="../../../assets/huiyuan3.jpg" alt=""></dt>
                <dd>
                    <h2>划错无限反悔</h2>
                    <p>强力反悔，配对飙升5倍</p>
                </dd>
            </dl>
            <dl>
                <dt><img src="../../../assets/huiyuan4.jpg" alt=""></dt>
                <dd>
                    <h2>任意更改定位，</h2>
                    <p>位置漫游，与全国朋友say嗨！</p>
                </dd>
            </dl>
            <dl>
                <dt><img src="../../../assets/huiyuan5.jpg" alt=""></dt>
                <dd>
                    <h2>无限喜欢次数</h2>
                    <p>突破限制，放肆喜欢不再顾虑</p>
                </dd>
            </dl> -->
            <showMore></showMore>
        </div>
        
</template>
<script>
import showMore from '../showMore.vue'
export default {
    components:{
        showMore,
    },
    data(){
        return{
             biaoti:[
        {
          title:"会员身份标识",
          content:"昵称升级为红色,专属身份标识",
          url:require("../../../../assets/huiyuan1.jpg")
        },{
          title:"每天5个“超级喜欢”",
          content:"喜欢更有分量，配对飙升5倍！",
          url:require("../../../../assets/huiyuan2.jpg")
        },{
          title:"划错无限反悔",
          content:"强力反悔，配对飙升5倍",
          url:require("../../../../assets/huiyuan3.jpg")
        },{
            title:"任意更改定位，",
          content:"位置漫游，与全国朋友say嗨！",
          url:require("../../../../assets/huiyuan4.jpg")
        },{
            title:"无限喜欢次数",
          content:"突破限制，放肆喜欢不再顾虑",
          url:require("../../../../assets/huiyuan5.jpg")
        }
        
      ],
        }
    },
    methods:{
        showDialog() {
      // 触发action的setIsShowDialog
      this.$store.dispatch("setIsShowDialog", true);
    }
    }
}
</script>
<style scoped>
ul,li{
    list-style:none;
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
</style>
