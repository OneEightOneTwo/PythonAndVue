<template>
     <div v-show="isTanchuang">
    <div class="weui-mask" id="iosMask" style="opacity: 1;"></div>
    <div class="weui-actionsheet weui-actionsheet_toggle" id="iosActionsheet">
      <div class="weui-actionsheet__title">
        <p class="weui-actionsheet__title-text">主题</p>
      </div>
      <div class="weui-actionsheet__menu">
      </div>
      <div class="weui-actionsheet__action">
        <div @click="hideActionsheet" class="weui-actionsheet__cell" id="iosActionsheetCancel">取消</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    methods: {
    hideActionsheet() {
      // this.state.isActionsheet = false;
      this.$store.dispatch("setIsTanchuang", false);
    },
  },
  //   从obs获取这个公有变量来控制弹窗出现
  computed: {
    isTanchuang() {
      return this.$store.getters.getIsTanchuang;
    }
  }
}
</script>

