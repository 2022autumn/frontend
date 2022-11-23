<template>
  <div class="scholar_p2">
    <div class="info_title">
      个人简介
    </div>
    <div class="border">

    </div>
    <div class="personal_info">
      Dimitra Psychogiou (Senior Member, IEEE) received the Dipl.Eng. degree in electrical and computer engineering from the University of Patras, Patras, Greece, in 2008, and the Ph.D. degree in electrical engineering from the Swiss Federal Institute of Technology (ETH), Zürich, Switzerland, in 2013.,She is currently a Professor of electrical and electronic engineering with University College Cork (UCC), Cork, Ireland, and the Tyndall National Institute, Cork. Prior to joining UCC, she was a Senior Research Scientist with Purdue University, West Lafayette, IN, USA, and an Assistant Professor with the University of Colorado Boulder (UC Boulder), Boulder, CO, USA. Her research has been presented in more than 200 publications...

    </div>
    <div class="info_bottom">
      <el-button class="more_btn">
        查看更多
      </el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "scholar_p2",
  data() {
    return {

    }
  }
}
</script>
<style scoped>
.scholar_p2 {
  width: 558px;
  height: 621px;
  padding-top: 41px;
  padding-bottom: 24px;
  padding-left: 58px;
  padding-right: 45px;

  background: #FFFFFF;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.info_title {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
}
.border {
  width: 86px;
  height: 4px;
  margin-left: 5px;
  margin-top: 8px;
  background: #4E86FF;
}
.personal_info {
  margin-top: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  /* or 161% */

  color: #606060;
}
.more_btn {
  float: right;
  width: 123px;
  height: 36px;
  margin-top: 20px;
  background: #4E86FF;
  color: #FFFFFF;
}
</style>