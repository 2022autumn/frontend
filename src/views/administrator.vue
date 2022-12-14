<template>
  <div class="container-box">
    <topbar1></topbar1>
    <div style="width: 100%; height: 8vh"></div>
    <div class="grid">
      <div></div>
      <div style="text-align: center">
        <div class="title-personal">管理中心</div>
        <div class="left">
          <div
            @click="activeIndex = 1"
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
            "
          >
            <span
              class="circular"
              :class="{ actived: activeIndex == 1 }"
            ></span>
            <div class="text1">数据信息</div>
          </div>
          <div
            @click="activeIndex = 2"
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 28px;
              cursor: pointer;
            "
          >
            <span
              :class="{ actived: activeIndex == 2 }"
              class="circular last"
            ></span>
            <div class="text1">
              申请处理
              <el-badge :value="total" v-show="total"></el-badge>
            </div>
          </div>
        </div>
      </div>
      <div>
        <!-- 第一个card 网站信息 -->
        <div v-show="activeIndex == 1" class="center">
          <div style="display: flex; align-items: center">
            <img src="../assets/Vector.png" alt="" />
            <span class="info-title">数据信息</span>
          </div>
          <div style="margin-left: 3vw">
            <!-- 放置内容 -->
            <div class="data-title" >注册信息</div>
            <div style="margin: 1vh auto">
              <div class="data-tag">注册用户数量</div>
              <div class="data-content">{{ this.registerNum }}</div>
            </div>
            <div style="margin: 1vh auto">
              <div class="data-tag">认证学者数量</div>
              <div class="data-content">{{ this.verifiedNum }}</div>
            </div>

            <div class="line" style="margin-left: -3vw"></div>

            <div class="data-title">公开数据</div>
            <div style="margin: 1vh auto">
              <div class="data-tag">学者数量</div>
              <div class="data-content">216,389,416</div>
              <!-- {{ this.authorNum }} -->
            </div>
            <div style="margin: 1vh auto">
              <div class="data-tag">论文数量</div>
              <div class="data-content">170,358,065</div>
              <!-- {{ this.workNum }} -->
            </div>
            <div style="margin: 1vh auto">
              <div class="data-tag">期刊数量</div>
              <div class="data-content">226,726</div>
              <!-- {{ this.venueNum }} -->
            </div>
            <div style="margin: 1vh auto">
              <div class="data-tag">组织数量</div>
              <div class="data-content">108,618</div>
              <!-- {{ this.institutionNum }} -->
            </div>
          </div>
        </div>

        <!-- 第二个card申请处理 -->
        <div v-show="activeIndex == 2" class="center">
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: space-between;
            "
          >
            <div style="display: flex; align-items: center">
              <img src="../assets/Rectangle 2619.png" alt="" />
              <span class="info-title">申请处理</span>
              <el-badge :value="total" v-show="total"></el-badge>
            </div>
          </div>
          <div class="app-none" v-show="!total">没有待处理的门户申请~</div>
          <div style="width: 80%; margin: 0 10%">
            <div v-for="item in application" :key="item.application_id">
              <div class="application">
                <div style="flex: 1; display: flex; align-items: center">
                  <img src="../assets/Avatar (1).png" alt="" />
                  <span class="app-text"
                    >用户 {{ item.username }} 申请门户：
                    {{ item.real_name }}</span
                  >
                </div>
                <div
                  style="
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                  "
                >
                  <el-button
                    size="mini"
                    icon="el-icon-menu"
                    class="btn2"
                    @click="openDetail(item)"
                  >
                    详情</el-button
                  >
                  <el-button
                    size="mini"
                    icon="el-icon-circle-check"
                    class="btn2"
                    @click="accept(item.application_id)"
                    >同意</el-button
                  >
                  <el-button
                    size="mini"
                    icon="el-icon-circle-close"
                    class="btn2"
                    @click="decline(item.application_id)"
                    >拒绝</el-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>

    <el-dialog
      custom-class="detail"
      class="info-title"
      title="学者门户申请详情"
      :visible.sync="dialogVisible"
      width="40%"
    >
      <el-row style="width: 80%; margin: auto">
        <el-col :span="8">
          <div class="dia-head">真实姓名：</div>
        </el-col>
        <el-col :span="16">
          <div class="dia-content">{{ this.realname }}</div>
        </el-col>
      </el-row>
      <el-row style="width: 80%; margin: auto">
        <el-col :span="8">
          <div class="dia-head">工作单位：</div>
        </el-col>
        <el-col :span="16">
          <div class="dia-content">{{ this.institution }}</div>
        </el-col>
      </el-row>
      <el-row style="width: 80%; margin: auto">
        <el-col :span="8">
          <div class="dia-head">工作邮箱：</div>
        </el-col>
        <el-col :span="16">
          <div class="dia-content">{{ this.email }}</div>
        </el-col>
      </el-row>
      <el-row style="width: 80%; margin: auto">
        <el-col :span="8">
          <div class="dia-head">备注信息：</div>
        </el-col>
        <el-col :span="16">
          <div class="dia-content">{{ this.other }}</div>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import topbar1 from "@/components/topbar1";
export default {
  components: { topbar1 },
  data() {
    return {
      activeIndex: 1,
      show1: true,

      application: [],
      uid: 0,
      total: 0,
      dialogVisible: false,
      realname: "",
      institution: "",
      email: "",
      other: "",

      registerNum:0,
      verifiedNum: 0,
      authorNum: 0,
      institutionNum:0,
      venueNum: 0,
      workNum: 0,
    };
  },
  methods: {
    get_application() {
      this.$axios({
        //注意是this.$axios
        method: "get",
        url: "/application/list",
        params: {
          //get请求这里是params
        },
      }).then((response) => {
        console.log("成功获得管理员页面列表");
        console.log(response.data.applications);
        this.application = response.data.applications;
        console.log("application" + this.application);
        this.total = this.application.length;
        console.log("获取到申请列表长度为" + this.total);
      });
    },
    getRegister() {
      this.$axios({
        //注意是this.$axios
        method: "get",
        url: "/info/register_num",
        params: {
          //get请求这里是params
        },
      }).then((response) => {
        console.log("成功获得注册用户数量");
        console.log(response.data);
        this.registerNum = response.data.register_num;
      });
    },
    getVerified() {
      this.$axios({
        //注意是this.$axios
        method: "get",
        url: "/info/verified_num",
        params: {
          //get请求这里是params
        },
      }).then((response) => {
        console.log("成功获得认证学者数量");
        console.log(response.data);
        this.verifiedNum = response.data.verified_num;
      });
    },
    getStatistic() {
      this.$axios({
        //注意是this.$axios
        method: "get",
        url: "/es/statistic",
        params: {
          //get请求这里是params
        },
      }).then((response) => {
        console.log("成功统计数据");
        console.log(response.data);
        this.authorNum = response.data.res.authors;
        this.institutionNum = response.data.res.institutions;
        this.venueNum = response.data.res.venues;
        this.workNum = response.data.res.works;
      });
    },
    accept(id) {
      this.$axios({
        //注意是this.$axios
        method: "post",
        url: "/application/handle",
        data: {
          //post请求这里是data
          application_id: id,
          content: "同意",
          status: 1,
          user_id: this.uid,
        },
      })
        .then((response) => {
          console.log("response", response);
          console.log(response.data);

          if (response.data.status === 200) {
            this.$message({
              message: response.data.msg,
              type: "success",
            });
          } else {
            this.$message({
              message: response.data.msg,
              type: "error",
            });
          }
          this.get_application();
        })
        .catch((error) => {
          console.log("error", error);
          console.log("error", error.response.status);
          if (error.response.status !== 200) {
            this.$message({
              message: error.response.data.msg,
              type: "error",
            });
          }
        });
    },
    decline(id) {
      this.$axios({
        //注意是this.$axios
        method: "post",
        url: "/application/handle",
        data: {
          //post请求这里是data
          application_id: id,
          content: "拒绝",
          status: 2,
          user_id: this.uid,
        },
      })
        .then((response) => {
          console.log("response", response);
          console.log(response.data);

          if (response.data.status === 200) {
            this.$message({
              message: response.data.msg,
              type: "success",
            });
          } else {
            this.$message({
              message: response.data.msg,
              type: "error",
            });
          }
          this.get_application();
        })
        .catch((error) => {
          console.log("error", error);
          console.log("error", error.response.status);
          if (error.response.status !== 200) {
            this.$message({
              message: error.response.data.msg,
              type: "error",
            });
          }
        });
    },
    openDetail(item) {
      this.dialogVisible = true;
      this.realname = item.real_name;
      this.institution = item.institution;
      this.email = item.email;
      this.other = item.content;
    },
  },
  created() {
    var tmpID = window.localStorage.getItem("uid");
    this.uid = parseInt(tmpID);
    console.log("uid is" + this.uid);
    this.get_application();
    this.getRegister();
    this.getVerified();
    this.getStatistic();
  },
};
</script>

<style scoped>
.container-box {
  background-image: url("../../public/advanced_img/Frame 1.svg");
  background-size: 100%;
  position: relative;
  height: 100vh;
}
.title-personal {
  position: absolute;
  left: 10vw;
  top: 8vh;
  width: 14vw;
  margin-top: 5vh;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  /* 设置背景色渐变 */
  background-image: linear-gradient(94.95deg, #437fec -43.46%, #4cd9ed 128.08%);
  /* 设置背景以文字进行裁切 */
  background-clip: text;
  -webkit-background-clip: text;
  /* 设置文本颜色透明以露出后面裁切成文本形状的渐变背景 */
  color: transparent;
}
.grid {
  display: grid;
  grid-template-columns: 2fr 2fr 6fr 2fr;
  justify-content: end;
}

.left {
  position: absolute;
  left: 10vw;
  top: 20vh;
  width: 14vw;
  display: inline-block;
  margin-top: 3vh;
  padding: 50px 20px;
  background-color: #ffffff;
  box-shadow: 4px 4px 4px 4px rgba(122, 122, 122, 0.25);
  border-radius: 14px;
}

.circular {
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  margin-right: 10px;
  position: relative;
}
.circular::after {
  content: "";
  height: 20px;
  width: 2px;
  background: #130cb7;
  position: absolute;
  bottom: -24px;
  left: 12px;
}
.circular.last::after {
  display: none;
}
.center {
  position: absolute;
  left: 27vw;
  top: 2vh;
  width: 55vw;
  padding: 30px;
  margin-top: 80px;
  height: 83vh;
  background-color: #ffffff;
  overflow: auto;
  box-shadow: 6px 6px 6px 6px rgba(122, 122, 122, 0.25);
  border-radius: 20px;
}
.info-title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
}

.app-none {
  width: 100%;
  margin: 2vh auto;
  text-align: center;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
}

.actived {
  background: linear-gradient(
    80.67deg,
    #246ef3 25.61%,
    #3bbde7 93.82%,
    #2eddf4 106.16%
  );
}
.btn2 {
  color: #ffffff;
  background: linear-gradient(
    90.39deg,
    #246ef3 -28.26%,
    #3bbde7 100.2%,
    #2eddf4 123.43%
  );
  border-radius: 6px;
}

.text1 {
  text-align: left;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.02em;
  display: inline-block;
  width: 100px;
}
.application {
  display: flex;
  height: 80px;
}
.app-text {
  margin-left: 40px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  /* or 162% */

  color: #2f2c4a;
}
/deep/ .el-dialog {
  --el-bg-color: linear-gradient(
    90.39deg,
    #246ef3 -28.26%,
    #3bbde7 100.2%,
    #2eddf4 123.43%
  ) !important;
}

.detail {
  background: linear-gradient(
    90.39deg,
    #246ef3 -28.26%,
    #3bbde7 100.2%,
    #2eddf4 123.43%
  );
  border-radius: 6px;
}
.dia-head {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 40px;
  /* or 154% */

  text-align: left;
  color: #000000;
}
.dia-content {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;
  /* or 154% */

  text-align: left;
  color: #000000;
}

.data-title {
  margin-top: 3vh;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;

  color: #246ef3;
}
.data-tag{
  display: inline-block;
  width: 20%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #000000;
}
.data-content{
  display: inline-block;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color:#000000;
}
.line{
  margin-top: 3vh;
  width: 107%;
  height: 1px;
  background-color: rgba(96, 96, 96, 0.69);
}
</style>
