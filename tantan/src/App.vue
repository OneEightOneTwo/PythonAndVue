<template>
<div>
 <!-- <lmain>
      
    </lmain> -->
    <lsetup></lsetup>
  
</div>
   
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


// import lmain from './components/lei/page/Lmain.vue'
import lsetup from './components/lei/page/Lsetup.vue'

export default {
  components: {
    // lmain,
    lsetup

  }
}
</script>

<style>

</style>
