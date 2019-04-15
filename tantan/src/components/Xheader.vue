<template>
<div>
     <header>
    <!-- 左图标 -->
    <div class="leftIcon"></div>

    <!-- 标题 -->
    <div class="title">新手指导</div>
    <!-- 右图标 -->
    <div class="rightIcon"></div>
  </header>
 
</div>
 
</template>
<script>
export default {};
</script>
<style scoped >
/* css是局部样式 */
header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: white;
  background-color: red;
  /* 弹性盒布局 */
  display: flex;
}
.leftIcon {
  background:url(../assets/menu.png) no-repeat center ;
  background-size: 24px;

    flex: 1;
}

.title {
  flex: 3;
}

.emptyIcon {
  flex: 1;
}
 .rightIcon {
      background:url(../assets/my.png) no-repeat center ;
     background-size: 24px;
    flex: 1;
  }
 

</style>
