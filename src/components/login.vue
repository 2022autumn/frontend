<template>
  <div>
    <el-dialog
      class="login-dia"
      :visible.sync="login_visible"
      :showClose="false"
      :append-to-body="true"

      width="53.5vw"
      height="583px"
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

          <!-- <div class="text">用户名</div>
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
          ></el-input> -->

          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="70px"
            class="text"
            style="margin: 5vh auto"
          >
            <el-form-item label="用户名" prop="name" class="litem">
              <el-input v-model.number="ruleForm.name" :validate-event="false"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pwd" class="litem">
              <el-input
                type="password"
                v-model="ruleForm.pwd"
                autocomplete="off"
                :validate-event="false"
              ></el-input>
            </el-form-item>

            <!-- <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')"
                  >提交</el-button
                >
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item> -->
          </el-form>

          <el-button class="button" @click="submitLogin('ruleForm')"
            >登录</el-button
          >
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
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
      // setTimeout(() => {
      //   if (!Number.isInteger(value)) {
      //     callback(new Error('请输入数字值'));
      //   } else {
      //     if (value < 18) {
      //       callback(new Error('必须年满18岁'));
      //     } else {
      //       callback();
      //     }
      //   }
      // }, 1000);
    };
    var validatePwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPwd !== "") {
          this.$refs.ruleForm.validateField("validateCheckPwd");
        }
        callback();
      }
    };

    return {
      input_name: "",
      input_pwd: "",
      login_visible: false,

      ruleForm: {
        name: "",
        pwd: "",
      },
      rules: {
        name: [{ validator: checkName }],//, trigger: "blur"
        pwd: [{ validator: validatePwd }],
      },
    };
  },
  setup() {},

  methods: {
    submitLogin(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit login request correct");
          this.$axios({
            //注意是this.$axios
            method: "post",
            url: "/login",
            data: {
              //post请求这里是data
              password: this.ruleForm.pwd,
              username: this.ruleForm.name,
            },
          }).then((response) => {
            console.log("response", response);
            console.log(response.data);
            // console.log(response.data.status);

            if (response.data.status===200) {
              this.$message({
                message: "登录成功",
                type: "success",
              });
              var storage = window.localStorage;
              storage.setItem("uid",response.data.ID);
              storage.setItem("token",response.data.token);
              storage.setItem("iflogin",JSON.stringify(1));
              // console.log(response.data.ID);
              this.login_visible = false;
              window.location.reload();
            }
          }).catch((error) => {
            console.log("error", error)
            console.log("error", error.response.status)
            if (error.response.status===400) {
              this.$message({
                message: "用户名不存在",
                type: "error",
              });
              this.ruleForm.name = "";
              this.ruleForm.pwd = "";
            } else if (error.response.status===401) {
              this.$message({
                message: "密码错误",
                type: "error",
              });
            } else {
              this.$message.error("登录出错");
              alert("登录时出错");
            }
          });
        } else {
          console.log("submit login request error");
          return false;
        }
      });
    },
    init() {
      console.log("打开登录组件");
      this.ruleForm.pwd = "";
      this.ruleForm.name = "";
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
  display: flex;
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
