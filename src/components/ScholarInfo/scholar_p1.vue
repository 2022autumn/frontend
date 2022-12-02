<template>
  <div class="scholar_p1">
    <img class="scholar_img" src="../../assets/scholar_avator.svg">
<!--    <span class="scholar_name">-->
<!--        {{scholarInfo.display_name}}-->
<!--    </span>-->
<!--    <span class="scholar_institution">-->
<!--        {{scholarInfo.last_known_institution}}-->
<!--    </span>-->
<!--    <span class="follow">-->
<!--      <el-button-->
<!--          @click="follow"-->
<!--          class="follow_btn"-->
<!--          :style="{backgroundColor:bg_color, color: ft_color,}"-->
<!--          @mouseenter="change" @mouseleave="goback">-->
<!--        {{followContent}}-->
<!--      </el-button>-->
<!--    </span>-->
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
      isFollow: false,
      followContent: "+ FOLLOW",
      followContent1: "+ FOLLOW",
      followContent2: "√ FOLLWED",
      bg_color: "#E6EEFF",
      ft_color: "#0352FF",
    }
  },
  methods: {
    follow() {
      this.liked=!this.liked;
      if(this.liked){
        this.content="已关注";
        this.bg_color="#0352FF";
        this.ft_color="#E6EEFF";
      }

      else{
        this.content="+关注"
        this.bg_color="#E6EEFF";
        this.ft_color="#0352FF";

      }
    },
    change() {
      this.bg_color="#0352FF";
      this.ft_color="#E6EEFF";
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
  padding-left: 10px;
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