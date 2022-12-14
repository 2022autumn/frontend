<!--这个是含有搜索框的顶栏，目前是纯前端-->
<template>

  <div style="position: fixed;z-index: 100;width: 100vw;height:8vh;background-color: white;box-shadow: 1px 1px 1px 1px rgba(187, 185, 185, 0.25);" >
    <img src="../img/logo.jpg" style="width: 22.52px;height:21.19px;position: absolute;left: 6.81vw;right: 91.63%;top: 2.56vh;bottom: 97.01%;background: #217BF4;" alt="">
    <div style="position: absolute;width: 150px;height: 24px;font-style: normal;font-weight: 600;font-size: 24px;line-height: 24px;color: #2B2B39;left:10vw;top:2.5vh"><b>I SHARE</b></div>
    <router-link to="/"><div v-if="this.whichpage===1" style="position: absolute;width: 29px;height:14px;left:23vw;top:3.1vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: grey;cursor: pointer" @click="which_page(1)">首页</div></router-link>
    <router-link to="/"><div v-if="this.whichpage!==1" style="position: absolute;width: 29px;height:14px;left:23vw;top:3.1vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: grey;cursor: pointer" @click="which_page(1)">首页</div></router-link>
    <router-link to="/advancedSearch"><div style="position: absolute;width: 57px;height:14px;left:30vw;top:3.1vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: grey;cursor: pointer" @click="which_page(2)">高级检索</div></router-link>
    <router-link to="/ScholarLibrary"><div v-if="this.whichpage!==5" style="position: absolute;width: 57px;height:14px;left:48vw;top:3.1vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: grey;cursor: pointer" @click="which_page(5)">学者库</div></router-link>
    <router-link to="/ScholarLibrary"><div v-if="this.whichpage===5" style="position: absolute;width: 57px;height:14px;left:48vw;top:3.1vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color:  grey;cursor: pointer" @click="which_page(5)">学者库</div></router-link>
    <!--<div style="position: absolute;width: 57px;height:14px;left:39vw;top:2.7vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: grey;cursor: pointer" @click="which_page(3)">机构馆</div>-->
    <div style="position: absolute;width: 100px;height:14px;left:38vw;top:3.1vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: grey;cursor: pointer" @click="jcenter">我的 I SHARE</div>
    <el-popover
        placement="top-start"
        width="100"
        trigger="hover"
    >

      <div>
        <el-button style="display:block;margin:0 auto" @click="logout()" type="text">退出登录</el-button>
      </div>
      <div  style="margin-top: 1vh;" v-show="isAdmin">

        <el-button style="display:block;margin:0 auto" @click="gotoAdmin()" type="text">管理中心</el-button>
      </div>
    <img slot="reference" v-if="this.iflogin===1" :src="this.photourl" style="top: 1.5vh;width: 40px;height: 40px;border-radius: 50px;left: 90.5vw;position: absolute" alt="">
    </el-popover>
    <div v-if="this.iflogin===1"  style="position: absolute;width: 45px;height:14px;left:94vw;top:3.5vh;font-style: normal;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.01em;color: #2B2B39;">{{this.username}}</div>
    <!-- <div style="position: absolute;height: 5vh;width: 100vw;top:5vh"><el-divider></el-divider></div> -->
    <!--class="input-with-select"-->
    <div style="position: absolute;width: 35vw;height:40px;left:53.5vw;top:1.2vh;">
        <el-autocomplete  :trigger-on-focus="false" :fetch-suggestions="querySearch" @select="handleSelect" class="inline-input"  placeholder="请输入检索内容" v-model="input3"   @keyup.enter.native="do_search" @input="inputchange" style="width: 35vw">
        <!--<el-button slot="prepend" icon="el-icon-s-promotion" style="color: #FCFCFF;background-color: rgba(117, 167, 235, 0.52);border-radius: 0;border-color: whitesmoke" @click="jadvance">高级检索</el-button>-->
          <el-select v-model="select" slot="prepend" placeholder="请选择字段" style="width: 8vw">
            <el-option label="标题" value="1"></el-option>
            <el-option label="摘要" value="2"></el-option>
            <el-option label="刊物" value="3"></el-option>
            <el-option label="机构" value="4"></el-option>
            <el-option label="篇关摘" value="5"></el-option>
          </el-select>
        <el-button slot="append" icon="el-icon-search" style="color:#ffffff;background-color: #217bf4; border-radius: 0;border-color: whitesmoke" @click="do_search" ></el-button>
      </el-autocomplete>
    </div>
    <!-- <div style="position: absolute;height: 5vh;width: 100vw;top:5vh"><el-divider></el-divider></div> -->
  </div>
</template>

<script>
export default {
  name: "topbar2",
  data(){
    return{
      isAdmin:false,
      select:'标题',
      restaurants: [
        {
          "value":"java"
        }
      ],
      username:"张博皓",
      whichpage:1,
      input3:"",
      photourl:'',
      userid:window.localStorage.getItem('uid'),
      iflogin:JSON.parse(window.localStorage.getItem('iflogin')),
      oldtime:'',

    }
  },
  methods:{
    gotoAdmin(){
      window.open('/admin');
    },
    logout(){
      this.iflogin=0;
      window.localStorage.setItem('iflogin',JSON.stringify(0));
      window.localStorage.setItem("uid","1");
      this.$router.push('/');
    },
    inputchange(value){//搜索的内容改变
      console.log(value);
      console.log(this.oldtime);
      var newtime = new Date();
      console.log(newtime-this.oldtime);
      if(newtime-this.oldtime>=1000) {
        this.$axios({//注意是this.$axios
          method: 'post',
          url: '/es/prefix',
          data: {//post请求这里是data
            Field: "title",
            Prefix: value
          }
        }).then(
            response => {
              console.log("查询成功")
              console.log(response.data.res);
              this.restaurants.length = 0;
              for (var i = 0; i < response.data.res.length; i++) {
                var tmp = {};
                tmp.value = response.data.res[i];
                this.restaurants.push(tmp);
              }
            }
        )
        this.oldtime = new Date();
      }
    },
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
      this.$router.push('/search_outcome');
      //this.$router.push('/search_outcome');
      window.location.reload();
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
            this.photourl = 'https://ishare.horik.cn/api/media/headshot/'+this.photourl;

            this.username = response.data.data.username;

            if(response.data.data.user_type === 1){
              this.isAdmin = true;
            }
          }
      )
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      //var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(restaurants);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return [
        { "value": "三全鲜食（北新泾店）"},
      ];
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  created(){
    //this.restaurants = this.loadAll();
    this.oldtime = new Date();
    this.get_data();
    if(sessionStorage.getItem('search_name1')===null){
      this.input3 = '';
    }
    else{
      this.input3 = sessionStorage.getItem('search_name1');
    }
    console.log("选择数组为:")
    console.log(this.restaurants);
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
