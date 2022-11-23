<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <img src="../assets/admin/titleIcon.svg" style="vertical-align: middle" />
      <span class="title">申请处理</span>
    </div>
    <div v-for="i in 4" :key="i" class="text item">
      <el-row>
        <el-col :span="15">
          <div>{{ "用户admin " + i + " 申请门户: xxx" }}</div>
        </el-col>
        <el-col :span="3">
          <div class="button">
            <img
              src="../assets/admin/detail.svg"
              style="vertical-align: middle"
            />
            <span> 详情</span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="button">
            <img
              src="../assets/admin/accept.svg"
              style="vertical-align: middle"
            />
            <span> 同意</span>
          </div>
        </el-col>
        <el-col :span="3" class="button">
          <div class="button">
            <img
              src="../assets/admin/refuse.svg"
              style="vertical-align: middle"
            />
            <span> 拒绝</span>
          </div>
        </el-col>
      </el-row>
      <div class="line"></div>
    </div>
  </el-card>
</template>


<style>
.box-card {
  width: 80%;
  margin: 3vh auto;
}

.title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 33px;
  letter-spacing: 0.02em;

  color: #0c1e5b;
}

.item {
  margin: auto;
  margin-bottom: 3vh;
  width: 80%;
  padding: 2%;
  border-bottom: 1px solid rgb(217, 217, 217);
}
.text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 162%;

  color: #2f2c4a;
}
.button {
  width: 5vw;
  height: 3.2vh;
  background: linear-gradient(
    90.39deg,
    #246ef3 -28.26%,
    #3bbde7 100.2%,
    #2eddf4 123.43%
  );
  border-radius: 6px;

  text-align: center;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 3vh;
  letter-spacing: 0.02em;
  color: #ffffff;
}
/* .line{
    width: 80%;
    height: 0.1vh;
    background: rgb(112, 112, 112);
} */
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>