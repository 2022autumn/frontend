<template>
  <div>
    <el-dialog
      class="login-dia"
      :visible.sync="login_visible"
      :showClose="false"
      width="53.5vw"
      height="583px"
      :before-close="handleClose"
    >
      <div
        style="
          width: 327px;
          height: 583px;
          display: inline-block;
          vertical-align: top;
        "
      >
        <img src="../HomePage_svg/left-bar.svg" />
      </div>
      <div
        style="
          width: 32vw;
          height: 583px;
          display: inline-block;
          vertical-align: top;
        "
      >
        <div style="float: right" @click="close">
          <img src="../HomePage_svg/close.svg" />
        </div>
        <div class="background">
          <div class="title1">登录</div>
          <div class="title2">欢迎登录 I Share!</div>

          <div class="text">用户名</div>
          <el-input
            class="login-input"
            v-model="input_name"
            placeholder="请输入用户名"
          ></el-input>
          <div class="text">密码</div>
          <el-input
            class="login-input"
            v-model="input_pwd"
            placeholder="请输入密码"
          ></el-input>

          <div class="button" @click="login">登录</div>
          <div class="text" style="text-align: center">
            没有账号？
            <span
              style="color: #217bf4; text-decoration: underline"
              @click="goto_signup"
              >去注册</span
            >
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import { defineComponent } from "@vue/composition-api";

export default {
  data() {
    return {
      input_name: "",
      input_pwd: "",
      login_visible: false,
    };
  },
  setup() {},

  methods: {
    login() {
      if (this.input_name == "") {
        this.$message({
          message: "请输入用户名",
          type: "warning",
        });
      }
      if (this.input_pwd == "") {
        this.$message({
          message: "请输入密码",
          type: "warning",
        });
      }
      if (this.input_pwd != "" && this.input_name != "") {
        this.$axios({
          //注意是this.$axios
          method: "post",
          url: "/login",
          data: {
            //post请求这里是data
            password: "string",
            username: "string",
          },
        }).then((response) => {
          console.log("response", response);
          console.log(response.data);

          if (response.data?.success) {
            User.Login = true;
            User.token = response.data.token;
            if (modelRef.value.name != null) User.Name = modelRef.value.name;
            User.Id = response.data.user.user_id;
            localStorage.setItem("Login", "true");
          }
        });
      }
    },
    init() {
      console.log("打开登录组件");
      this.login_visible = true;
    },
    close() {
      console.log("关闭登录组件");
      this.login_visible = false;
    },
    goto_signup() {
      console.log("去注册组件");
      this.login_visible = false;
      this.$parent.open_signup();
    },
  },
};
</script>

<style scoped>
.login-dia /deep/ .el-dialog__header {
  padding: 0;
}
.login-dia /deep/ .el-dialog__body {
  padding: 0;
}

.background {
  margin: 16% auto;
  /* margin: 15% 13%; */
  padding: 4vh;
  width: 70%;
  height: 70%;

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
  margin: 3vh 0;
  text-align: left;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  color: #7f7e83;
}
.login-input /deep/ .el-input__inner {
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
  margin: 5vh auto;

  background: linear-gradient(
    90.39deg,
    #246ef3 -28.26%,
    #3bbde7 100.2%,
    #2eddf4 123.43%
  );
  border-radius: 10px;
}
</style>
