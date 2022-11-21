<template>
  <div>
    <div style="box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25)">
      <div style="height: 583px; width: 327px; float: left">
        <img src="../HomePage_svg/left-bar.svg" />
      </div>
      <div style="height: 583px; width: 40vw; float: left">
        <div style="float: right">
          <img src="../HomePage_svg/close.svg" />
        </div>
        <div class="background">
          <div class="title1">注册</div>
          <div class="title2">欢迎注册 I Share!</div>
          <div class="text">用户名</div>
          <el-input v-model="input_name" placeholder="请输入用户名"></el-input>
          <div class="text">密码</div>
          <el-input v-model="input_pwd" placeholder="请输入密码"></el-input>
          <div class="text">确认密码</div>
          <el-input
            v-model="input_confirm"
            placeholder="请再次输入密码"
          ></el-input>

          <div class="button">注册</div>
          <div class="text" style="text-align: center">
            已有账号？
            <span style="color: #217bf4; text-decoration: underline"
              >去登陆</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { defineComponent } from "@vue/composition-api";

export default {
  data() {
    return {
      input_name: "",
      input_pwd: "",
      input_confirm: "",
    };
  },
  setup() {},
};
</script>

<style>
.background {
  margin: 10% 13%;
  padding: 4vh;
  width: 70%;
  height: 80%;

  background: #ffffff;
  box-shadow: 0px 2px 18px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}
.title1 {
  margin: 1vh;
  text-align: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  color: #217bf4;
}
.title2 {
  margin: 2vh;
  text-align: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #474749;
}
.text {
  margin: 2.5vh 0;
  text-align: left;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  color: #7f7e83;
}
.el-input__inner {
  background: #f4f4f4;
  height: 4vh; /*调整inner的高度*/
  width: 100%;
  border-radius: 9px;
}
.button {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 10vw;
  height: 5vh;
  margin: 4vh auto;

  background: linear-gradient(
    90.39deg,
    #246ef3 -28.26%,
    #3bbde7 100.2%,
    #2eddf4 123.43%
  );
  border-radius: 10px;
}
</style>