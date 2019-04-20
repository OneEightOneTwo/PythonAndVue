<template>
  <div class="boss">
   <router-view></router-view>
   <asid></asid>
   <lsetup></lsetup>
  </div>
</template>
<script>
// import lsetup from "../lei/page/Lsetup.vue";


//引入左侧边栏模块
import asid from './home/asid.vue'

import lsetup from "./home/Lsetup.vue";


export default {
   name: "app",
    components: {
    asid,
     lsetup
    },
  
  data() {
    return {
      
     
      
    };
  },
  

  
};
</script>
<style scoped>
.boss{
  overflow:hidden;
  position:relative;
  height:17.7rem
  
}


</style>

