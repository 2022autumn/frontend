<!--这个是主页和高级检索界面的顶栏，目前是纯前端-->
<template>
  <div style="position: fixed;z-index: 100;width: 100vw;height:8vh; background-color: white;box-shadow: 1px 1px 1px 1px rgba(187, 185, 185, 0.25);">
    <img src="../img/logo.jpg" style="width: 22.52px;height:21.19px;position: absolute;left: 6.81vw;right: 91.63%;top: 2.96vh;bottom: 97.01%;background: #217BF4;" alt="">
    <div style="position: absolute;width: 150px;height: 24px;font-style: normal;font-weight: 600;font-size: 24px;line-height: 24px;color: #2B2B39;left:10vw;top:3vh"><b>I SHARE</b></div>
    <router-link to="/"><div v-if="this.whichpage===1" style="position: absolute;width: 29px;height:14px;left:25vw;top:3.7vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: grey;cursor: pointer" @click="which_page(1)">首页</div></router-link>
    <router-link to="/"><div v-if="this.whichpage!==1" style="position: absolute;width: 29px;height:14px;left:25vw;top:3.7vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: grey;cursor: pointer" @click="which_page(1)">首页</div></router-link>
    <router-link to="/advancedSearch"><div style="position: absolute;width: 57px;height:14px;left:32vw;top:3.7vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: grey;cursor: pointer" @click="which_page(2)">高级检索</div></router-link>
    <router-link to="/ScholarLibrary"><div v-if="this.whichpage!==5" style="position: absolute;width: 57px;height:14px;left:50vw;top:3.7vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: grey;cursor: pointer" @click="which_page(5)">学者库</div></router-link>
    <router-link to="/ScholarLibrary"><div v-if="this.whichpage===5" style="position: absolute;width: 57px;height:14px;left:50vw;top:3.7vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color:  grey;cursor: pointer" @click="which_page(5)">学者库</div></router-link>
    <!--<div style="position: absolute;width: 57px;height:14px;left:39vw;top:2.7vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: grey;cursor: pointer" @click="which_page(3)">机构馆</div>-->
    <div style="position: absolute;width: 100px;height:14px;left:40vw;top:3.7vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: grey;cursor: pointer" @click="jcenter">我的 I SHARE</div>
    <div v-if="this.iflogin!==1" style="position: absolute; left:75vw;top:1.3vh;box-shadow: 0 7px 22px -6px rgba(33, 123, 244, 0.34);color: white"><v-btn style="background-color: #217BF4;" class="white--text" @click="open_login()">登 录</v-btn></div>
    <!--<div v-if="this.iflogin===1" style="position: absolute; left:80vw;top:1.8vh;box-shadow: 0 7px 22px -6px rgba(33, 123, 244, 0.34);color: white"><v-btn style="background-color: #217BF4;" class="white--text" @click="logout()">退出登录</v-btn></div>-->
    <el-popover
        placement="top-start"
        width="100"
        trigger="hover"
        >
        <el-button @click="logout()"  type="text">退出登录</el-button>
        <el-button type="text" >管理员</el-button>

    <img slot="reference" v-if="this.iflogin===1" :src="this.photourl" style="top: 1.5vh;width: 40px;height: 40px;border-radius: 50px;left: 90vw;position: absolute" alt="">
    </el-popover>
    <div v-if="this.iflogin===1" style="position: absolute;width: 45px;height:14px;left:94vw;top:3.5vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: #2B2B39;">{{this.username}}</div>
    <!-- <div style="position: absolute;height: 5vh;width: 100vw;top:5vh"><el-divider></el-divider></div> -->
    <LoginWindow ref="login"></LoginWindow>
    <SignUpWindow ref="signup"></SignUpWindow>
  </div>
</template>

<script>
import LoginWindow from "@/components/login";
import SignUpWindow from "@/components/signup";
export default {
  name: "topbar1",
  components: {
      //挂载组件
      LoginWindow, SignUpWindow//自定义的标签
  },
  data(){
    return{
      username:"张博皓",
      whichpage:1,
      userid:window.localStorage.getItem('uid'),
      photourl:'',
      iflogin:JSON.parse(window.localStorage.getItem('iflogin'))
    }
  },
  methods:{
    jcenter(){
      if(this.iflogin!==1){
        this.$message.warning("请先登录")
      }
      else {
        this.$router.push('/personal_center');
      }
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
      else if(ident===5){
        this.whichpage=5;
      }
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
            this.photourl = response.data.data.head_shot;
            this.photourl = 'https://ishare.horik.cn/api/media/headshot/'+this.photourl;
            this.username = response.data.data.username;
          }
      )
    },
    open_login(){
      console.log("去登陆");
      this.$refs.login.init();
    },
    open_signup(){
      console.log("去注册");
      this.$refs.signup.init();
    },
    logout(){
      this.iflogin=0;
      window.localStorage.setItem('iflogin',JSON.stringify(0));
      window.localStorage.setItem("uid","1");
      this.$router.push('/');
    }
  },
  created() {
    if(this.iflogin!==1){
      console.log("未登录")
    }
    else{
      console.log("已登录")
      this.get_data();
    }
  }
}
</script>

<style scoped>

</style>
