<!--这个是含有搜索框的顶栏，目前是纯前端-->
<template>
  <div>
    <img src="../img/logo.jpg" style="width: 22.52px;height:21.19px;position: absolute;left: 6.81%;right: 91.63%;top: 1.96%;bottom: 97.01%;background: #217BF4;" alt="">
    <div style="position: absolute;width: 150px;height: 24px;font-style: normal;font-weight: 600;font-size: 24px;line-height: 24px;color: #2B2B39;left:10vw;top:2vh"><b>I SHARE</b></div>
    <div v-if="this.whichpage===1" style="position: absolute;width: 29px;height:14px;left:25vw;top:2.7vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: #2B2B39;cursor: pointer" @click="which_page(1)">首页</div>
    <div v-if="this.whichpage!==1" style="position: absolute;width: 29px;height:14px;left:25vw;top:2.7vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: grey;cursor: pointer" @click="which_page(1)">首页</div>
    <div style="position: absolute;width: 57px;height:14px;left:32vw;top:2.7vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: grey;cursor: pointer" @click="which_page(2)">搜索学者</div>
    <div style="position: absolute;width: 57px;height:14px;left:39vw;top:2.7vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: grey;cursor: pointer" @click="which_page(3)">机构馆</div>
    <div style="position: absolute;width: 100px;height:14px;left:46vw;top:2.7vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: grey;cursor: pointer" @click="which_page(4)">我的 I SHARE</div>
    <img src="../img/touxiang3.jpg" style="top: 1.5vh;width: 40px;height: 40px;border-radius: 50px;left: 90vw;position: absolute" alt="">
    <div style="position: absolute;width: 45px;height:14px;left:94vw;top:3vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: #2B2B39;">{{this.username}}</div>
    <div style="position: absolute;height: 5vh;width: 100vw;top:5vh"><el-divider></el-divider></div>
    <div style="position: absolute;width: 35vw;height:40px;left:53.5vw;top:0.6vh;background-color: #75A7EB">
      <el-input  placeholder="请输入内容" v-model="input3" class="input-with-select" style="background-color: #75A7EB;" >
        <el-button slot="prepend" icon="el-icon-s-promotion" style="color: #FCFCFF;background-color: #75A7EB;border-radius: 0;border-color: whitesmoke">高级检索</el-button>
        <el-button slot="append" icon="el-icon-search" style="color: #FCFCFF;background-color: #75A7EB; border-radius: 0;border-color: whitesmoke"></el-button>
      </el-input>
    </div>
    <div style="position: absolute;height: 5vh;width: 100vw;top:5vh"><el-divider></el-divider></div>
  </div>
</template>

<script>
export default {
  name: "topbar1",
  data(){
    return{
      username:"张博皓",
      whichpage:1,
      input3:""
    }
  },
  methods:{
    which_page(ident){
      if(ident === 1){
        this.whichpage=1;
      }
      else if(ident===2){
        this.whichpage=2;
      }
      else if(ident===3){
        this.whichpage=3;
      }
      else if(ident===4){
        this.whichpage=4;
      }
    }
  }
}
</script>

<style scoped>
/deep/input::-webkit-input-placeholder {
  color: white;
  font-size: 15px;
}
/deep/.el-input__inner {
  background-color: #75A7EB;
}
</style>
