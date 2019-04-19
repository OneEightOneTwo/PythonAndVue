<template>
  <div>
    <router-view></router-view>
    <xheader></xheader>
   <lsetup></lsetup>
   <asid></asid>
  </div>
</template>
<script>
// import "../../js/vue-swiper.js";
import "../../main.js";

import lsetup from "../lei/page/Lsetup.vue";
import asid from "./asid.vue";
import xheader from "../Xheader.vue";
export default {
  components: {
   xheader,
    lsetup,
    asid
    // swiper
  },

};
</script>
<style scoped>

</style>

