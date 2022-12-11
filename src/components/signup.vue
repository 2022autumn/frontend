<template>
  <div>
    <div style="box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25)">
      <el-dialog
        class="signup"
        :visible.sync="signup_visible"
        :showClose="false"
        :append-to-body="true"

        width="53.5vw"
        height="583px"
      ><!-- :before-close="handleClose" -->
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
            <div class="title1">注册</div>
            <div class="title2">欢迎注册 I Share!</div>

            <!-- <div class="text">用户名</div>
            <el-input class="signup-input"
              v-model="input_name"
              placeholder="请输入用户名"
            ></el-input>
            <div class="text">密码</div>
            <el-input class="signup-input" 
              v-model="input_pwd" 
              placeholder="请输入密码"
            ></el-input>
            <div class="text">确认密码</div>
            <el-input class="signup-input"
              v-model="input_confirm"
              placeholder="请再次输入密码"
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
              <el-form-item label="用户名" prop="name" class="sitem">
                <el-input v-model.number="ruleForm.name" :validate-event="false"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pwd" class="sitem">
                <el-input
                  type="password"
                  v-model="ruleForm.pwd"
                  autocomplete="off"
                  :validate-event="false"
                ></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPwd" class="sitem">
                <el-input
                  type="password"
                  v-model="ruleForm.checkPwd"
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

            <el-button class="button" @click="submitSignup('ruleForm')"
              >注册</el-button
            >
            <div class="text" style="text-align: center">
              已有账号？
              <span
                style="color: #217bf4; text-decoration: underline"
                @click="goto_login"
                >去登录</span
              >
            </div>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
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
      } else if (value.length < 6) {
        callback(new Error("设置密码需不少于6位"));
      } else {
        if (this.ruleForm.checkPwd !== "") {
          this.$refs.ruleForm.validateField("validateCheckPwd");
        }
        callback();
      }
    };
    var validateCheckPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pwd) {
        this.ruleForm.checkPwd = "";
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      input_name: "",
      input_pwd: "",
      input_confirm: "",
      signup_visible: false,

      ruleForm: {
        name: "",
        pwd: "",
        checkPwd: "",
      },
      rules: {
        pwd: [{ validator: validatePwd}],//, trigger: "blur" 
        checkPwd: [{ validator: validateCheckPwd}],
        name: [{ validator: checkName}],
      },
    };
  },
  setup() {},
  methods: {
    submitSignup(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit signup request correct");
          this.$axios({
            //注意是this.$axios
            method: "post",
            url: "/register",
            data: {
              //post请求这里是data
              password: this.ruleForm.pwd,
              username: this.ruleForm.name,
            },
          }).then((response) => {
            alert("into response");
            console.log(this.ruleForm.name);
            console.log(this.ruleForm.pwd);
            console.log("response", response);
            console.log(response.data);

            if (response.data.status === 200) {
              this.$message({
                message: "注册成功",
                type: "success",
              });
              this.signup_visible = false;
            } else if (response.data.status===400) {
              this.$message({
                message: "用户名已存在",
                type: "error",
              });
            } else {
              this.$message({
                message: "注册失败",
                type: "error",
              });
            }
          });
        } else {
          console.log("submit signup request error");
          return false;
        }
      });
    },

    init() {
      console.log("打开注册组件");
      this.ruleForm.checkPwd = "";
      this.ruleForm.pwd = "";
      this.ruleForm.name = "";
      this.signup_visible = true;
    },
    close() {
      console.log("关闭注册组件");
      this.signup_visible = false;
    },
    goto_login() {
      console.log("去登录组件");
      this.signup_visible = false;
      this.$parent.open_login();
    },
  },
};
</script>

<style scoped>
.signup /deep/ .el-dialog__header {
  padding: 0;
}
.signup /deep/ .el-dialog__body {
  padding: 0;
  display: flex;
}
.background {
  margin: 12% auto;
  padding: 4vh;
  width: 70%;
  height: 79%;

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