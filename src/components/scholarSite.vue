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
          <div class="inst-background">
            <div class="inst-title">学者门户认领</div>

            <div class="inst-text">机构名称</div>
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
            ></el-input>

            <div class="button">提交申请</div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      institution: "",
      email: "",
      dialogVisible: true,
    };
  },
  setup() {},
  methods: {
    init() {
      console.log("打开注册组件");
      this.dialogVisible = true;
    },
    close() {
      console.log("关闭注册组件");
      this.dialogVisible = false;
    },
  }
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
  margin: 15% auto;
  width: 70%;
  height: inherit;
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