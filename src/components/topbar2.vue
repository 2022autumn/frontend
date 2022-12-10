<!--这个是含有搜索框的顶栏，目前是纯前端-->
<template>
  <div style="position: fixed;z-index: 9999;width: 100vw;height:8vh;background-color: white;box-shadow: 1px 1px 1px 1px rgba(187, 185, 185, 0.25);" >
    <img src="../img/logo.jpg" style="width: 22.52px;height:21.19px;position: absolute;left: 6.81vw;right: 91.63%;top: 1.96vh;bottom: 97.01%;background: #217BF4;" alt="">
    <div style="position: absolute;width: 150px;height: 24px;font-style: normal;font-weight: 600;font-size: 24px;line-height: 24px;color: #2B2B39;left:10vw;top:2vh"><b>I SHARE</b></div>
    <router-link to="/"><div v-if="this.whichpage===1" style="position: absolute;width: 29px;height:14px;left:25vw;top:2.7vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: #2B2B39;cursor: pointer" @click="which_page(1)">首页</div></router-link>
    <router-link to="/"><div v-if="this.whichpage!==1" style="position: absolute;width: 29px;height:14px;left:25vw;top:2.7vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: grey;cursor: pointer" @click="which_page(1)">首页</div></router-link>
    <router-link to="/advancedSearch"><div style="position: absolute;width: 57px;height:14px;left:32vw;top:2.7vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: grey;cursor: pointer" @click="which_page(2)">高级检索</div></router-link>
    <!--<div style="position: absolute;width: 57px;height:14px;left:39vw;top:2.7vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: grey;cursor: pointer" @click="which_page(3)">机构馆</div>-->
    <div style="position: absolute;width: 100px;height:14px;left:39vw;top:2.7vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: grey;cursor: pointer" @click="jcenter">我的 I SHARE</div>
    <img v-if="this.iflogin===1" :src="this.photourl" style="top: 1.5vh;width: 40px;height: 40px;border-radius: 50px;left: 90vw;position: absolute" alt="">
    <div v-if="this.iflogin===1"  style="position: absolute;width: 45px;height:14px;left:94vw;top:3vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: #2B2B39;">{{this.username}}</div>
    <!-- <div style="position: absolute;height: 5vh;width: 100vw;top:5vh"><el-divider></el-divider></div> -->
    <div style="position: absolute;width: 35vw;height:40px;left:53.5vw;top:1.05vh;">
        <el-input  placeholder="请输入检索内容" v-model="input3" class="input-with-select" @keyup.enter.native="do_search">
        <!--<el-button slot="prepend" icon="el-icon-s-promotion" style="color: #FCFCFF;background-color: rgba(117, 167, 235, 0.52);border-radius: 0;border-color: whitesmoke" @click="jadvance">高级检索</el-button>-->
        <el-button slot="append" icon="el-icon-search" style="color:#ffffff;background-color: #217bf4; border-radius: 0;border-color: whitesmoke" @click="do_search" ></el-button>
      </el-input>
    </div>
    <!-- <div style="position: absolute;height: 5vh;width: 100vw;top:5vh"><el-divider></el-divider></div> -->
  </div>
</template>

<script>
export default {
  name: "topbar2",
  data(){
    return{
      username:"张博皓",
      whichpage:1,
      input3:"",
      photourl:'',
      userid:window.localStorage.getItem('uid'),
      iflogin:JSON.parse(window.localStorage.getItem('iflogin'))
    }
  },
  methods:{
    jcenter(){
      this.$router.push('/personal_center');
    },
    jadvance(){
      this.$router.push('/advancedSearch')
    },
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
    },
    do_search(){
      console.log(this.input3);
      var cond = {};
      sessionStorage.setItem('Cond',JSON.stringify(cond));
      sessionStorage.setItem('search_name1',this.input3);
      sessionStorage.setItem('now_page',JSON.stringify(1));
      window.open('/search_outcome');
      //this.$router.push('/search_outcome');
      //window.location.reload();
    },
    get_data(){
      this.$axios({//注意是this.$axios
        method:'get',
        url:'/user/info',
        params:{//get请求这里是params
          user_id:this.userid.toString()
        }
      }).then(
          response =>{
            console.log("得到个人信息")
            console.log(response.data);
            this.photourl = response.data.data.head_shot
          }
      )
    },
  },
  created(){
    this.get_data();
    if(sessionStorage.getItem('search_name1')===null){
      this.input3 = '';
    }
    else{
      this.input3 = sessionStorage.getItem('search_name1');
    }
  }
}
</script>

<style scoped>
/deep/input::-webkit-input-placeholder {
  color: rgba(28, 28, 29, 0.15);
  font-size: 15px;
}
/deep/.el-input__inner {
  background-color: rgba(185, 186, 189, 0.15);
}
</style>
