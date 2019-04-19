<template>
  <div style="overflow:hidden;position:relative;height:568px">

    <xhome ></xhome>
    <lsetup ></lsetup>
    <asid></asid>
  </div>
</template>
<script>
// import lsetup from "../lei/page/Lsetup.vue";

import xhome from "./xhome.vue";
import asid from "./asid.vue";
import lsetup from "../lei/page/Lsetup.vue";
export default {
   name: "app",
    components: {
     lsetup,
     xhome,
     asid
    },
  
  data() {
    return {
      
     
      
    };
  },
  

  
};
</script>
<style scoped>



</style>

