<template>
     <div v-show="isShowDialog" class="js_dialog" id="iosDialog1" style="opacity: 1;">
    <div class="weui-mask"></div>
    <div class="weui-dialog">
      <div class="weui-dialog__hd">
        <strong class="weui-dialog__title">弹窗标题</strong>
      </div>
      <div class="weui-dialog__bd">欢迎您亲爱的，要想体验更多精彩，请先注册成为我们探探的vip会员，有更多美女帅哥可以联系到您哟！！</div>
      <div class="weui-dialog__ft">
        <a @click="hideDialog" href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default">取消</a>
        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">主操作</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
     computed: {
    isShowDialog() {
      return this.$store.getters.getIsShowDialog;
    }
  },
  methods: {
    // 通知弹窗隐藏
    hideDialog() {
      // 触发action的setIsShowDialog
      this.$store.dispatch("setIsShowDialog", false);
    }
  }
}
</script>
<style>

</style>


