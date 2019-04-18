<template>
    <div>
        <div class="xheader">
            <span>
                <img src="../../../assets/weileft.png" alt="">
            </span>
            <span>
                微信
            </span>
            <span>
                <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_warn">发表</a>
            </span>
        </div>
        <div>
            <div class="tex">
                <textarea cols="45" rows="6" placeholder="这一刻的想法...." style="border:none"></textarea>
            </div>
            <div class="teximg">
                <img src="../../../assets/wei1.png" alt="">
            </div>
            <div class="hr">
                <ul>
                    <li v-for="(da,idx) in datas" :key="idx">
                        <span><img :src="da.titleimg" alt=""></span>
                        <span>{{da.names}}</span>
                        <span><img :src="da.img" alt=""></span>
                    </li>
                    
                </ul>
            </div>
        </div>


    </div>
</template>
<script>

export default {
    data(){
        return{
            datas:[
                {
                    titleimg :require('../../../assets/wei3.png'),
                    names:'所在位置',
                    img:require('../../../assets/arrow-right.png')
                },{
                    titleimg :require('../../../assets/wei2.png'),
                    names:'谁可以看',
                    img:require('../../../assets/arrow-right.png')
                },{
                    titleimg :require('../../../assets/wei4.png'),
                    names:'提醒谁看',
                    img:require('../../../assets/arrow-right.png')
                },
            ]
        }
    }
}
</script>
<style scoped>
ul,li{
    list-style: none
}
.xheader{
    height:60px;
    line-height: 60px;
    position: relative;
}
.xheader span:nth-child(1) img{
    width:20px;
    height:20px;
    position: absolute;
    left:10px;
    top:50%;
    margin-top: -10px;
}
.xheader span:nth-child(2){
    position: absolute;
    left:35px; 
}
.xheader span:nth-child(3){
    
    position: absolute;
    right:15px;
    margin-top:10px;
}
.tex{
    margin-left: 15px;
}
.teximg img{
    width:90%;
    height:60px;
     margin-left: 15px;
}
.hr{
    width:90%;
    border-top: 1px solid #d9d9d9;
    margin-left: 15px;
    
}
.hr li{
    height:50px;
    line-height: 50px;
    position: relative;
    border-bottom: 1px solid #d9d9d9
}
/* .hr li span{
    display: inline-block;
    width:90%;
    height:50px;
    line-height: 50px;
    
} */
.hr li span:nth-child(1) img{
    width:20px;
    height:20px;
    position: absolute;
    top:50%;
    margin-top: -10px;
}
.hr li span:nth-child(2) {
    
    position: absolute;
    left:40px;
}
.hr li span:nth-child(3) img{
    width:20px;
    height:20px;
    position: absolute;
    right:15px;
    top:50%;
    margin-top: -10px;
}

</style>
