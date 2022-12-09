<template>
  <div class="scholar_p1">
    <img class="scholar_img" src="../../assets/scholar_avator.svg">
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
          :style="{backgroundColor:bg_color, color: ft_color,}"
          @mouseenter="change" @mouseleave="goback">
        {{followContent}}
      </el-button>
    </span>
    <span class="claim">
      <el-button
          @click="claim"
          class="claim_btn"
          :style="{backgroundColor:bg_color2, color: ft_color2,}"
          @mouseenter="change2" @mouseleave="goback2">
        {{claimContent}}
      </el-button>
    </span>
  </div>
</template>
<script>
export default {
  name: "scholar_p1",
  props: {
    scholarInfo: {
      type: Object
    }
  },
  data() {
    return {
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
    }
  },
  mounted() {
    let that = this;
    that.$axios({//注意是this.$axios
      method:'post',
      url:'/social/follow/list',
      data:{//get请求这里是params
        // user_id: 2
        ser_id:window.localStorage.getItem('WID')
      }
    }).then(
        response =>{
          console.log(response.data);
          this.followList = response.data.data;
          console.log("followList", this.followList);
          for(var i = 0; i < this.followList.length; i++) {
            if(this.followList[i].author_id == this.scholarInfo.id) {
              console.log("followed")
              this.isFollow = true;
              this.followContent="已关注";
              this.bg_color="#0352FF";
              this.ft_color="#E6EEFF";
              break;
            }
          }
        }
    )
  },
  methods: {
    follow() {
      let that = this;
      that.$axios({//注意是this.$axios
        method:'post',
        url:'/social/follow',
        data:{//get请求这里是params
          author_id: this.scholarInfo.id,
          user_id:window.localStorage.getItem('WID')
          // user_id: 2
        }
      }).then(
          response =>{
            console.log(response.data);
            this.isFollow=!this.isFollow;
            if(this.isFollow){
              this.followContent="已关注";
              this.bg_color="#0352FF";
              this.ft_color="#E6EEFF";
            }

            else{
              this.followContent="+关注"
              this.bg_color="#E6EEFF";
              this.ft_color="#0352FF";
            }
          }
      )
    },
    claim() {
      this.isClaim=!this.isClaim;
      if(this.isClaim){
        this.claimContent="已认领";
        this.bg_color2="#0352FF";
        this.ft_color2="#E6EEFF";
      }

      else{
        this.claimContent="+认领"
        this.bg_color2="#E6EEFF";
        this.ft_color2="#0352FF";

      }
    },
    change() {
      this.bg_color="#0352FF";
      this.ft_color="#E6EEFF";
    },
    change2() {
      this.bg_color2="#0352FF";
      this.ft_color2="#E6EEFF";
    },
    goback(){
      if(this.isFollow){
        this.bg_color="#0352FF";
        this.ft_color="#E6EEFF";
      }
      else{
        this.bg_color="#E6EEFF";
        this.ft_color="#0352FF";
      }
    },
    goback2(){
      if(this.isClaim){
        this.bg_color2="#0352FF";
        this.ft_color2="#E6EEFF";
      }
      else{
        this.bg_color2="#E6EEFF";
        this.ft_color2="#0352FF";
      }
    }
  }
}
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
  width: 100%;
  float: left;
  /*width: 300px;*/
  height: 375px;
  margin-top: 9px;
}
.scholar_name {
  float: left;
  position: relative;
  width: 100%;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
}
.scholar_institution {
  float: left;
  position: relative;
  width: 100%;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
}
.follow_btn {
  width: 107px;
  height: 28px;
  margin-top: 18px;
  /*padding-left: 10px;*/
  border-radius: 4px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 5px;
  letter-spacing: 0.04em;
  text-align: center;
  justify-content: center;
}
.claim_btn {
  width: 107px;
  height: 28px;
  margin-top: 18px;
  /*padding-left: 10px;*/
  border-radius: 4px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 5px;
  letter-spacing: 0.04em;
  text-align: center;
  justify-content: center;
}
</style>