<template>
  <div>
    <el-dialog
      class="site"
      :visible.sync="dialogVisible"
      :showClose="false"
      width="46.5vw"
      height="583px"
      :before-close="handleClose"
    >
      <div style="background: #fffdfd; border-radius: 12px">
        <div
          style="
            width: 327px;
            height: 583px;
            display: inline-block;
            vertical-align: top;
          "
        >
          <img
            style="height: 100%; position: absolute; top: 0; left: 0"
            src="../assets/admin/BG.svg"
          />
          <img
            style="height: 93%; position: absolute; bottom: 0; left: 0"
            src="../assets/admin/peopleLeft.svg"
          />
        </div>

        <div
          style="
            width: 25vw;
            height: 583px;
            display: inline-block;
            vertical-align: top;
          "
        >
          <div style="float: right" @click="close">
            <img src="../HomePage_svg/close.svg" />
          </div>
          <div class="inst-background" style="float: top">
            <!-- <div class="inst-title">学者门户认领</div> -->
            <img
              style="margin-top: -10vh"
              src="../assets/admin/scholarSite.svg"
            />

            <!-- <div class="inst-text">机构名称</div>
            <el-input
              class="input"
              v-model="institution"
              placeholder="请输入用户名"
            ></el-input>
            <div class="inst-text">电子邮箱</div>
            <el-input
              class="input"
              v-model="email"
              placeholder="请输入密码"
            ></el-input>

            <div class="inst-text">研究领域</div>
            <el-input
              class="input"
              v-model="field"
              placeholder="添加标签"
            ></el-input> -->

            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              label-width="70px"
              class="text"
              style="margin: 3vh auto"
            >
              <el-form-item label="真实姓名" prop="name" class="sitem">
                <el-input
                  v-model.number="ruleForm.name"
                  :validate-event="false"
                ></el-input>
              </el-form-item>
              <el-form-item label="工作单位" prop="institution" class="sitem">
                <el-input
                  v-model.number="ruleForm.institution"
                  :validate-event="false"
                ></el-input>
              </el-form-item>
              <el-form-item label="工作邮箱" prop="email" class="sitem">
                <el-input
                  v-model.number="ruleForm.email"
                  :validate-event="false"
                ></el-input>
              </el-form-item>
              <el-form-item label="验证码" prop="pwd" class="sitem">
                <el-input
                  type="password"
                  v-model="ruleForm.pwd"
                  autocomplete="off"
                  :validate-event="false"
                  style="display: inline-block; width: 70%"
                ></el-input>
                <!-- <el-button style="" @click="sendCode">获取验证码</el-button> -->
                <el-button
                  v-show="showTime"
                  @click="sendEmail(ruleForm.email)"
                  style="
                    display: inline-block;
                    width: 30%;
                    padding: 12px 0;
                    font-size: 13px;
                  "
                  >获取验证码</el-button
                >
                <el-button
                  style="width: 30%; padding: 12px 0; font-size: 13px"
                  disabled
                  v-show="!showTime" >{{sendTime}} s</el-button
                >
              </el-form-item>
              <el-form-item label="其他内容" prop="others" class="sitem">
                <el-input
                  type="textarea"
                  v-model="ruleForm.others"
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

            <el-button class="button" @click="submitApply('ruleForm')"
              >提交申请</el-button
            >
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("真实姓名不能为空"));
      } else {
        callback();
      }
    };
    var checkInst = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("工作单位不能为空"));
      } else {
        callback();
      }
    };
    var checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("工作邮箱不能为空"));
      } else {
        callback();
      }
    };
    var validatePwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("验证码不能为空"));
      } else {
        callback();
      }
    };

    return {
      user_id: 0,
      author_id: "",
      dialogVisible: false,

      ruleForm: {
        name: "",
        institution: "",
        email: "",
        pwd: "",
        others: "",
      },
      rules: {
        pwd: [{ validator: validatePwd }], //, trigger: "blur"
        name: [{ validator: checkName }],
        institution: [{ validator: checkInst }],
        email: [{ validator: checkEmail }],
      },

      showTime: true /* 布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */,
      sendTime: "" /* 倒计时 计数器 */,
      timer: null,
    };
  },
  setup() {},
  methods: {
    submitApply(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit signup request correct");
          this.$axios({
            //注意是this.$axios
            method: "post",
            url: "/application/create",
            data: {
              //post请求这里是data
              author_id: this.author_id,
              author_name: this.ruleForm.name,
              content: this.ruleForm.others,
              email: this.ruleForm.email,
              institution: this.ruleForm.institution,
              user_id: this.user_id,
              verify_code: this.ruleForm.pwd,
            },
          }).then((response) => {
            console.log("response", response);
            console.log(response.data);

            if (response.data.status === 200) {
              this.$message({
                message: response.data.msg,
                type: "success",
              });
              this.dialogVisible = false;
              this.$parent.isClaim = true;
            }
            // } else if (response.data.status===400) {
            //   this.$message({
            //     message: response.data.msg,
            //     type: "error",
            //   });
            // } else if (response.data.status===401) {
            //   this.$message({
            //     message: response.data.msg,
            //     type: "error",
            //   });
            // } else if (response.data.status===402) {
            //   this.$message({
            //     message: response.data.msg,
            //     type: "error",
            //   });
            // } else if (response.data.status===403) {
            //   this.$message({
            //     message: response.data.msg,
            //     type: "error",
            //   });
            else {
              this.$message({
                message: response.data.msg,
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
      console.log("打开门户申请组件");
      this.dialogVisible = true;
      var tmp = window.localStorage.getItem("uid");
      this.user_id = parseInt(tmp);
      this.author_id = window.localStorage.getItem("SID");
      // alert("user_id is " + this.user_id+"\n"+"author_id is " + this.author_id);
    },
    close() {
      console.log("关闭门户申请组件");
      this.dialogVisible = false;
    },

    sendEmail() {
      const TIME_COUNT = 60; //  更改倒计时时间
      if (!this.timer) {
        this.sendTime = TIME_COUNT;
        this.showTime = false;
        this.timer = setInterval(() => {
          if (this.sendTime > 0 && this.sendTime <= TIME_COUNT) {
            this.sendTime--;
          } else {
            this.showTime = true;
            clearInterval(this.timer); // 清除定时器
            this.timer = null;
          }
        }, 1000);
      }
    },
  },
};
</script>

<style scoped>
.site /deep/ .el-dialog__header {
  padding: 0;
}
.site /deep/ .el-dialog__body {
  padding: 0;
}

.inst-background {
  margin: auto;
  padding: 10% 0;
  width: 80%;
  height: 583px;
  vertical-align: middle;
  /* height: 70%; */

  background: inherit;
  font-family: "Poppins";
  font-style: normal;
}
.inst-title {
  font-weight: 500;
  font-size: 34px;
  line-height: 60px;
  color: #2e70ff;
  /* identical to box height */
  letter-spacing: 0.02em;
}
.inst-text {
  margin: 2vh 0;
  text-align: left;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  letter-spacing: 0.02em;
  color: #000000;
}

.button {
  font-weight: 500;
  font-size: 20px;
  line-height: 33px;

  letter-spacing: 0.2em;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 5vh;
  margin: 5vh auto;

  background: linear-gradient(
    90.39deg,
    #246ef3 -28.26%,
    #3bbde7 100.2%,
    #2eddf4 123.43%
  );
  border-radius: 5px;
}
</style>