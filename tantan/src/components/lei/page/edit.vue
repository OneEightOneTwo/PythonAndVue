<template>
  <div>
    <div class="header">
      <div class="leftIcon">取消</div>
      <div class="title">编辑个人资料</div>
      <div class="rightIcon">保存</div>
    </div>
    <div class="ui-feeds">
      <ul class="ul1" style="font-size:0">
        <li>
          <img src="../../../assets/4.jpg" alt>
        </li>
        <li>
          <img src="../../../assets/4.jpg" alt>
        </li>
        <li>
          <img src="../../../assets/4.jpg" alt>
        </li>
      </ul>
      <ul class="ul2" style="font-size:0">
        <li>
          <img src="../../../assets/4.jpg" alt>
        </li>
        <li>
          <img src="../../../assets/4.jpg" alt>
        </li>
        <li>
          <img src="../../../assets/4.jpg" alt>
        </li>
      </ul>
    </div>
    <div class="edit">
      <div class="edit_name">
        <ul class="edit_name_ul">
          <li>
            <span>Zero,21,&nbsp;&nbsp;</span>

            <span>
              <img src="../../../assets/edit1.png" alt class="edit_name_img">
            </span>
          </li>
          <li class="edit_name_dj">点击编辑个人信息(如命名,年龄)</li>
          <span class="edit_name_span"></span>
        </ul>
      </div>
      <div>
        <div class="may">
          <span>我的信息</span>
        </div>
        <div class="may_main">
          <ul>
            <li class="column" v-for="(data,idx) in datas" :key="idx">
              <span class="column_title">{{data.title}}</span>
              <span class="column_main">{{data.main}}</span>
              <span class="column_img">
                <img :src="data.imgurl" alt>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="may_two">
          <span>我的标签</span>
        </div>
        <div class="may_main_two">
          <ul>
            <li class="column_two">
              <span class="column_title_two">
                <img src="../../../assets/edit2.png" alt>
              </span>
              <span class="column_main_two">我的个性标签</span>
              <span class="column_img_two">
                <img src="../../../assets/arrow-right.png" alt>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="may_two">
          <span>我的兴趣</span>
        </div>
        <div class="may_main_two">
          <ul>
            <li class="column_two" v-for="(nwes,idx) in nwes" :key="idx">
              <span class="column_title_two">
                <img :src="nwes.titleimg" alt>
              </span>
              <span class="column_main_two">{{nwes.main}}</span>
              <span class="column_img_two">
                <img :src="nwes.imgurl">
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="may_two">
          <span>我的问答</span>
        </div>
        <div class="may_main_two">
          <ul>
            <li class="column_two">
              <span class="column_title_two">
                <img src="../../../assets/edit9.png" alt>
              </span>
              <span class="column_main_two" style="color:#a6a6a6">添加问题</span>
              <span class="column_img_two">
                <img src="../../../assets/arrow-right.png" alt>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="foots">

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datas: [
        {
          title: "行业",
          main: "添加行业信息",
          imgurl: require("../../../assets/arrow-right.png")
        },
        {
          title: "工作领域",
          main: "添加工作领域信息",
          imgurl: require("../../../assets/arrow-right.png")
        },
        {
          title: "公司",
          main: "添加公司信息",
          imgurl: require("../../../assets/arrow-right.png")
        },
        {
          title: "来自",
          main: "添加你的家乡的信息",
          imgurl: require("../../../assets/arrow-right.png")
        },
        {
          title: "经常出没",
          main: "添加你常去的地点",
          imgurl: require("../../../assets/arrow-right.png")
        },
        {
          title: "个人签名",
          main: "添加你的个人签名",
          imgurl: require("../../../assets/arrow-right.png")
        }
      ],
      nwes: [
        {
          titleimg: require("../../../assets/edit3.png"),
          main: "我喜欢的运动",
          imgurl: require("../../../assets/arrow-right.png")
        },
        {
          titleimg: require("../../../assets/edit4.png"),
          main: "我喜欢的音乐",
          imgurl: require("../../../assets/arrow-right.png")
        },
        {
          titleimg: require("../../../assets/edit5.png"),
          main: "我喜欢的食物",
          imgurl: require("../../../assets/arrow-right.png")
        },
        {
          titleimg: require("../../../assets/edit6.png"),
          main: "我喜欢的电影",
          imgurl: require("../../../assets/arrow-right.png")
        },
        {
          titleimg: require("../../../assets/edit7.png"),
          main: "我喜欢的书和动漫",
          imgurl: require("../../../assets/arrow-right.png")
        },
        {
          titleimg: require("../../../assets/edit8.png"),
          main: "我的旅行足迹",
          imgurl: require("../../../assets/arrow-right.png")
        }
      ]
    };
  }
};
</script>
<style scoped>
ul,
li {
  list-style: none;
}
.header {
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
  font-size: 14px;
  flex: 1;
}

.title {
  flex: 3;
}

.emptyIcon {
  flex: 1;
}
.rightIcon {
  font-size: 14px;
  flex: 1;
}
.ui-feeds .ul1 {
  width: 100%;
}
.ui-feeds .ul1 li:nth-child(1) img {
  float: left;
  width: 66%;
  height: 212px;
}
.ui-feeds .ul1 li:nth-child(2) img {
  width: 34%;
  height: 106px;
}
.ui-feeds .ul1 li:nth-child(3) img {
  width: 34%;
  height: 106px;
}
.ui-feeds .ul2 {
  height: 106px;
}
.ui-feeds .ul2 img {
  width: 33.3%;
  height: 106px;
  float: left;
}
.edit .edit_name .edit_name_img {
  width: 16px;
  height: 16px;
}
.edit .edit_name .edit_name_dj {
  font-size: 13px;
  color: #a6a6a6;
}
.edit .edit_name .edit_name_ul {
  height: 60px;
  padding-top: 10px;
  padding-left: 15px;
  position: relative;
}
.edit .edit_name .edit_name_span {
  display: inline-block;
  width: 22px;
  height: 22px;
  background: url(../../../assets/arrow-right.png) no-repeat;
  background-size: 100%;
  position: absolute;
  right: 10px;
  top: 22px;
}
.may {
  height: 60px;
  background: #f6f5f1;
  color: #a6a6a6;
}
.may span {
  display: block;
  font-size: 14px;
  padding-top: 34px;
  padding-left: 25px;
}
.may_main .column {
  font-size: 13px;
  height: 45px;
  line-height: 45px;
  position: relative;
  color: #a6a6a6;
}
.may_main .column .column_title {
  position: absolute;
  left: 10px;
}
.may_main .column .column_main {
  position: absolute;
  left: 105px;
}
.may_main .column .column_img img {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 285px;
  top: 13px;
}

.may_two {
  height: 60px;
  background: #f6f5f1;
  color: #a6a6a6;
}
.may_two span {
  display: block;
  font-size: 14px;
  padding-top: 34px;
  padding-left: 25px;
}
.may_main_two .column_two {
  font-size: 13px;
  height: 45px;
  line-height: 45px;
  position: relative;
  color: #a6a6a6;
}
.may_main_two .column_two .column_title_two img {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 10px;
  top: 50%;
  margin-top: -10px;
}
.may_main_two .column_two .column_main_two {
  color: #424242;
  position: absolute;
  left: 55px;
}
.may_main_two .column_two .column_img_two img {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 285px;
  top: 13px;
}
.foots{
  height:45px;
  background: #f6f5f1;
}
</style>

