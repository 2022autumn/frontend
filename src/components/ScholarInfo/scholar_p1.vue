<template>
  <div class="scholar_p1">
    <img class="scholar_img" :src="avator_url" />
    <el-upload
      ref="upload"
      class="upload-demo"
      action="123"
      :show-file-list="false"
      :on-change="handlePictureCardPreview"
      :on-success="handleAvatarSuccess"
      :http-request="submitAvatarHttp"
      accept=".jpg"
    >
      <el-button class="upload_btn" size="small" v-if="this.userinfo.verified&&ismy"
        >点击上传照片</el-button
      >
    </el-upload>
    <!--    <span class="scholar_name">-->
    <!--        {{scholarInfo.display_name}}-->
    <!--    </span>-->
    <!--    <span class="scholar_institution">-->
    <!--        {{scholarInfo.last_known_institution}}-->
    <!--    </span>-->
    <span class="follow">
      <el-button
        @click="follow"
        class="follow_btn"
        :style="{ backgroundColor: bg_color, color: ft_color }"
        @mouseenter="change"
        @mouseleave="goback"
      >
        {{ followContent }}
      </el-button>
    </span>

    <span class="claim">
      <el-button
        @click="claim"
        :disabled="judgeClaim"
        class="claim_btn"
        :style="{ backgroundColor: bg_color2, color: ft_color2 }"
        @mouseenter="change2"
        @mouseleave="goback2"
      >
        {{ claimContent }}
      </el-button>
    </span>
    <Site ref="site" :claim="isClaim" @doClaim="doClaim"></Site>
  </div>
</template>
<script>
import Site from "@/components/scholarSite.vue";
export default {
  name: "scholar_p1",
  components: {
    //挂载组件
    Site, //自定义的标签
  },
  props: {
    scholarInfo: {
      type: Object,
    },
  },
  data() {
    // var judgeClaim = () => {
    //   if (this.isClaim === true) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // };
    return {
      ismy: false,
      userinfo: {},
      avator_url: "",
      followList: [],
      isFollow: false,
      followContent: "+ 关注",
      followContent1: "+ 关注",
      followContent2: "√ 已关注",
      isClaim: false,
      claimContent: "+ 认领",
      claimContent1: "+ 认领",
      claimContent2: "√ 已认领",
      bg_color: "#E6EEFF",
      ft_color: "#0352FF",
      bg_color2: "#E6EEFF",
      ft_color2: "#0352FF",
    };
  },
  mounted() {
    this.getScholarInfo();
    let that = this;
    that
      .$axios({
        //注意是this.$axios
        method: "post",
        url: "/social/follow/list",
        data: {
          //get请求这里是params
          user_id: parseInt(window.localStorage.getItem("uid")),
          // user_id:window.localStorage.getItem('SID')
        },
        headers: {
          token: parseInt(window.localStorage.getItem("uid")),
        },
      })
      .then((response) => {
        //console.log(response.data);
        // this.followList = response.data.data;
        // console.log("followList", this.followList);
        for (var i = 0; i < this.followList.length; i++) {
          if (this.followList[i].author_id == this.scholarInfo.id) {
            //console.log("followed")
            this.isFollow = true;
            this.loadFollow();
            // this.followContent = "已关注";
            // this.bg_color = "#0352FF";
            // this.ft_color = "#E6EEFF";
            break;
          }
        }
      });
  },
  computed: {
    judgeClaim() {
      if (this.isClaim === true) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    getScholarInfo() {
      let that = this;
      that.$axios({
        method:'get',
        url:'/es/get2',
        params:{
          id: window.localStorage.getItem('SID'),
        },
        headers: {
          'token': parseInt(window.localStorage.getItem('uid'))
        },
      }).then(
          response=> {
            this.userinfo = response.data.info;
            this.ismy = response.data.info.is_mine;
            console.log(this.userinfo)
            console.log("ismy?",this.ismy)
            this.avator_url = "https://ishare.horik.cn/api/media/headshot/"+this.userinfo.headshot
            if(this.userinfo.verified === true) {
              this.isClaim = true;
              this.loadClaim()
            } else {
              this.loadClaim()
            }
            console.log("get verify", this.isClaim)
          // if (this.userinfo.isFollow === true) {
          //   this.isFollow = true;
          //   this.loadFollow();
          // } else {
          //   this.loadFollow();
          // }
        });
    },
    loadFollow() {
      if (this.isFollow === true) {
        this.followContent = "已认证";
        this.bg_color = "#0352FF";
        this.ft_color = "#E6EEFF";
      } else {
        this.followContent = "+ 认证";
        this.bg_color = "#E6EEFF";
        this.ft_color = "#0352FF";
      }
    },
    loadClaim() {
      if (this.isClaim === true) {
        this.claimContent = "已认领";
        this.bg_color2 = "#0352FF";
        this.ft_color2 = "#E6EEFF";
      } else {
        this.claimContent = "+ 认领";
        this.bg_color2 = "#E6EEFF";
        this.ft_color2 = "#0352FF";
      }
    },
    follow() {
      let that = this;
      that
        .$axios({
          //注意是this.$axios
          method: "post",
          url: "/social/follow",
          data: {
            //get请求这里是params
            // author_id: "A4221478216",
            author_id: window.localStorage.getItem("SID"),
            // user_id:window.localStorage.getItem('WID')
            user_id: parseInt(window.localStorage.getItem("uid")),
          },
          headers: {
            token: parseInt(window.localStorage.getItem("uid")),
          },
        })
        .then((response) => {
          //console.log(response.data);
          this.$message({
            type: "success",
            message: response.data.msg,
            customClass: "messageIndex",
          });
          this.isFollow = !this.isFollow;
          if (this.isFollow) {
            this.followContent = "已关注";
            this.bg_color = "#0352FF";
            this.ft_color = "#E6EEFF";
          } else {
            this.followContent = "+关注";
            this.bg_color = "#E6EEFF";
            this.ft_color = "#0352FF";
          }
        });
    },
    claim() {
      //console.log("去申请门户");
      this.$refs.site.init();
      //这之后无法执行？原因未知
      // this.isClaim=!this.isClaim;
      // console.log("在学者主页isClaim "+this.isClaim);
      // if(this.isClaim){
      //   this.claimContent="审核中";
      //   this.bg_color2="#0352FF";
      //   this.ft_color2="#E6EEFF";
      // }

      // else{
      //   this.claimContent="+ 认领"
      //   this.bg_color2="#E6EEFF";
      //   this.ft_color2="#0352FF";
      // }
    },
    doClaim(status) {
      console.log("into do Claim func");
      this.isClaim = true;
      if (this.isClaim) {
        this.claimContent = "申请中";
        this.bg_color2 = "#0352FF";
        this.ft_color2 = "#E6EEFF";
      }
    },
    change() {
      this.bg_color = "#0352FF";
      this.ft_color = "#E6EEFF";
    },
    change2() {
      this.bg_color2 = "#0352FF";
      this.ft_color2 = "#E6EEFF";
    },
    goback() {
      if (this.isFollow) {
        this.bg_color = "#0352FF";
        this.ft_color = "#E6EEFF";
      } else {
        this.bg_color = "#E6EEFF";
        this.ft_color = "#0352FF";
      }
    },
    goback2() {
      if (this.isClaim) {
        this.bg_color2 = "#0352FF";
        this.ft_color2 = "#E6EEFF";
      } else {
        this.bg_color2 = "#E6EEFF";
        this.ft_color2 = "#0352FF";
      }
    },
    submitAvatarHttp(val) {
      console.log("请求上传照片")
      let that = this;
      // console.log("in!");
      // console.log(val.file);
      let fd = new FormData();
      fd.append("Headshot", val.file);
      fd.append("author_id", window.localStorage.getItem("SID"));
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          "token": parseInt(window.localStorage.getItem('uid'))
        },
      };
      that.$axios
        .post("/scholar/author/headshot", fd, config, {
         // 'token':parseInt(window.localStorage.getItem('uid'))
        })
        .then((res) => {
          // console.log(res);
          // this.userinfo.photo= res.data.data.head_shot;
          this.$message({
            type: "success",
            message: res.data.msg,
            customClass: "messageIndex",
          });
          // that.updateAvator();
          that.getScholarInfo();
          // console.log("avatar!");
        })
        .catch((err) => {
          this.$message.error("上传失败ww");
          // console.log(err);
        });
    },
    handleAvatarSuccess(res, file) {
      let self = this;
      self.$forceUpdate();
      location.upload();
      this.userinfo.headshot = URL.createObjectURL(file.raw);
      this.avator_url =
        "https://ishare.horik.cn/api/media/headshot/" +
        URL.createObjectURL(file.raw);
      // console.log("res", res);
    },

    //大图预览
    handlePictureCardPreview(file) {
      // console.log("preview");
      // console.log(file.url);
      this.userinfo.photo = file == null ? this.userinfo.photo : file.url;
      this.dialogVisible = true;
    },

    beforeAvatarUpload(file) {
      // console.log('file',file);
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      this.upload(file);
      return isJPG && isLt2M;
    },
  },
};
</script>
<style scoped>
.scholar_p1 {
  /*position: absolute;*/
  width: 340px;
  height: 621px;
  display: table-cell;
  text-align: center;
}
.scholar_img {
  position: relative;
  /*width: 100%;*/
  float: left;
  width: 300px;
  height: 375px;
  margin-top: 9px;
}
.scholar_name {
  float: left;
  position: relative;
  width: 100%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
}
.scholar_institution {
  float: left;
  position: relative;
  width: 100%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
}
.upload_btn {
  font-size: 14px;
  border: none;
  background: transparent;
  text-decoration: underline;
}
.upload_btn:hover {
  color: #0e84f4;
  background-color: transparent;
}
.follow {
  width: 100%;
  display: inline-block;
}
.claim {
  width: 100%;
}
.follow_btn {
  width: 107px;
  height: 28px;
  margin-top: 18px;
  /*padding-left: 10px;*/
  border-radius: 4px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 5px;
  letter-spacing: 0.04em;
  text-align: center;
  justify-content: center;
}
.follow_btn:hover {
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
}
.claim_btn {
  width: 107px;
  height: 28px;
  margin-top: 18px;
  /*padding-left: 10px;*/
  border-radius: 4px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 5px;
  letter-spacing: 0.04em;
  text-align: center;
  justify-content: center;
}
.claim_btn:hover {
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
}
</style>
