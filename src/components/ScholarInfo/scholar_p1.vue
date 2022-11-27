<template>
  <div class="scholar_p1">
    <img class="scholar_img" src="../../assets/scholar_avator.svg">
    <span class="scholar_name">
        scholar
    </span>
    <span class="scholar_institution">
        所属机构的名字
    </span>
    <span class="follow">
      <el-button class="follow_btn">
        + FOLLOW
      </el-button>
    </span>
  </div>
</template>
<script>
export default {
  name: "scholar_p1",
  data() {
    return {

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
  background: #E6EEFF;
  border-radius: 4px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 5px;
  letter-spacing: 0.04em;
  text-align: center;
  color: #0352FF;
  justify-content: center;
}
</style>