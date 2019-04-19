<template>
<div>
  <xheader >探探</xheader>
  <!-- <router-view></router-view>
<swiper
      class="vue-swiper"
      v-cloak
      ref="swiper"
      :allow-super="true"
      key-name="key"
      :pointer-threshold="0.5"
      :super-threshold="0.5"
      :queue.sync="queue"
       
      >
      <template slot-scope="scope">
        <div
          class="pic"
          :style="{'background-image': 'url(https://picsum.photos/710/1152/?random='+scope.data.key}"></div>
      </template>
      <img class="like-pointer" slot="like" src="../../assets/like-txt.png">
      <img class="nope-pointer" slot="nope" src="../../assets/nope-txt.png">
      <img class="super-pointer" slot="super" src="../../assets/super-txt.png">
    </swiper>
    <div class="btns">
      <img style="width:80px;" src="../../assets/nope.png" @click="decide('nope')">
      <img style="width:70px;" src="../../assets/super-like.png" @click="decide('super')">
      <img style="width:80px;" src="../../assets/like.png" @click="decide('like')">
      <img style="width:70px;" src="../../assets/help.png" @click="decide('show')">
    </div> -->
    <asid ref="asid"></asid>
    <lsetup ref="lsetup"></lsetup>  
</div>
</template>
<script>
// import "../../js/vue-swiper.js";
import "../../main.js";
import xheader from "../Xheader.vue";
import lsetup from "../lei/page/Lsetup.vue";
import asid from "./asid.vue";
export default {
  components: {
    xheader,
    lsetup,
    asid
    // swiper
  },
  
  // data() {
  //   return {
  //     queue: []
  //   };
  // },

  // updated: function() {
  //   this.getData();
  // },
  // methods: {
  //   getData: function() {
  //     var list = [];
  //     for (var i = 0; i < 5; i++) {
  //       list.push({
  //         key: Math.random()
  //       });
  //     }
  //     this.queue = this.queue.concat(list);
  //   },
  //   decide: function(choice) {
  //     if (choice === "show") {
  //       window.location.href = "#";
  //     }
  //     this.$refs.swiper.decide(choice);
  //   }
  // }
};
</script>
