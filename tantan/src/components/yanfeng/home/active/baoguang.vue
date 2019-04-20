<template>
  <div class="List">
             <dl  @click="showDialog" v-for="(n,index) in biaoti" :key="index">
                <dt><img :src="n.url" alt=""></dt>
                <dd>
                    <h2 v-text="n.title">查看谁喜欢我</h2>
                    <p v-text="n.content">有好几个他喜欢我</p>
                </dd>
            </dl>
            <showMore></showMore>
        </div>
</template>
<script>
import showMore from "../showMore.vue";
export default {
  components: {
    showMore
  },
  data() {
    return {
      biaoti: [
        {
          title: "查看我的曝光率",
          content: "有多少美女喜欢我",
          url: require("../../../../assets/huiyuan1.jpg")
        }
      ]
    };
  },
  methods: {
    showDialog() {
      // 触发action的setIsShowDialog
      this.$store.dispatch("setIsShowDialog", true);
    }
  }
};
</script>
<style scoped>
ul,
li {
  list-style: none;
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
