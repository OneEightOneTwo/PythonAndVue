<template>
  <div>
       <a href="##" class="news">
      <div class="portrait">
        <img src="../../../assets/4.jpg">
      </div>
      <div class="port">
        <h5>查看谁喜欢了我</h5>
        <p>查看谁喜欢了我</p>
      </div>
    </a>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.news{
    display: inline-block;
    display: flex;
    width:100%;
    height:50px;
    position: relative;
    top:55px;
}
.portrait {
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 20px;
  background: red;
  border: none;
  position: relative;
  left:20px;
}
.portrait img {
  width: 40px;
  height: 40px;

  border-radius: 20px;
}
.port{
    position: relative;
    left:30px;
}
.port h5{

    color:seashell;
    font-weight:normal;
    font-size: 12px;
}
.port p{
    color:rgb(159, 184, 181);
    font-size: 10px;
}
</style>
