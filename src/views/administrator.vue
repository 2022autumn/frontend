<template>
  <div class="container-box">
    <topbar1></topbar1>
    <div style="width: 100%; height: 8vh"></div>
    <div class="grid">
      <div></div>
      <div style="text-align: center">
        <div class="title-personal">个人中心</div>
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
            <div class="text1">网站数据</div>
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
            <div class="text1">管理员界面</div>
          </div>
        </div>
      </div>
      <div>
        <div v-show="activeIndex == 1" class="center">
          <div class="infinite-list-wrapper" style="overflow: auto">
            <ul
              class="list"
              v-infinite-scroll="load"
              infinite-scroll-disabled="disabled"
            >
              <li v-for="i in count" class="list-item">{{ i }}</li>
            </ul>
            <p v-if="loading">加载中...</p>
            <p v-if="noMore">没有更多了</p>
          </div>
        </div>
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
            </div>
          </div>
          <div style="width: 80%; margin: 0 10%">
            <!-- <div v-for="item in 5" :key="item">
                <div class="item-5">
                  <div style="flex: 1; display: flex; align-items: center">
                    <img src="../assets/Avatar (1).png" alt="" />
                    <span class="text-9">用户{{user}}{{item}}申请门户：{{site}}</span>
                  </div>
                  <div
                    style="
                      flex: 1;
                      display: flex;
                      align-items: center;
                      justify-content: flex-end;
                    "
                  >
                    <el-button size="mini" icon="el-icon-menu" class="btn2"
                      >详情</el-button
                    >
                    <el-button
                      size="mini"
                      icon="el-icon-circle-check"
                      class="btn2"
                      >同意</el-button
                    >
                    <el-button
                      size="mini"
                      icon="el-icon-circle-close"
                      class="btn2"
                      >拒绝</el-button
                    >
                  </div>
                </div>
              </div> -->

            <div class="infinite-list-wrapper" style="overflow: auto">
              <ul
                class="list"
                v-infinite-scroll="load"
                infinite-scroll-disabled="disabled"
              >
                <li v-for="i in count" class="list-item">{{ i }}</li>
              </ul>
              <p v-if="loading">加载中...</p>
              <p v-if="noMore">没有更多了</p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
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

      userid: window.localStorage.getItem("uid"),
      user: "user",
      site: "site",
      test: "Electronic Attendance Recorder and Confirmation System Using Facial Identification Modules in Python",

      application: [],
      count: 10,
      loading: false,
    };
  },

  computed: {
    noMore() {
      return this.count >= 40;
    },
    disabled() {
      return this.loading || this.noMore;
    },
  },

  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 2000);
    },
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
        console.log(response.data);
        this.application = response.data;
      });
    },
    created() {
      this.get_application();
    },
  },
};
</script>
  
  <style >
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

.title {
  position: relative;
  padding: 10px;
  height: 70px;
  border-radius: 16px;
  border: 1px solid #cccccc;
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
.title::after {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 50px;
  content: attr(data-text);
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 10;
  color: #32d1d3;
  -webkit-mask: linear-gradient(
    88.02deg,
    #130cb7 22.13%,
    rgba(56, 85, 222, 0.930753) 43.18%,
    rgba(46, 106, 204, 0.869375) 61.83%,
    rgba(82, 229, 231, 0.7) 79.36%
  );
  white-space: nowrap;
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
.center2 {
  position: absolute;
  left: 27vw;
  top: 2vh;
  width: 55vw;
  padding: 30px;
  margin-top: 80px;
  height: 83vh;
  background-color: #ffffff;
  box-shadow: 6px 6px 6px 6px rgba(122, 122, 122, 0.25);
  border-radius: 20px;
}

.center1 {
  left: 20px;
}
.info-title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
}
.content {
  width: 50%;
  margin: 20px 40% 0 20%;
}
.content2 {
  width: 60%;
  margin: 20px 20% 0 20%;
}
.grid1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
}
.info-text {
  margin-top: 3vh;
  margin-left: 3vw;

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 550;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.02em;
}
.info-text span {
  color: #8c939d;
}
.info-text2 {
  margin-top: 0.5vw;
  margin-bottom: 3vh;
  margin-left: 0vw;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 550;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.02em;
}
.btn {
  margin-bottom: 1vh;
  padding: 13px 23px;
  background: linear-gradient(
    90.39deg,
    #246ef3 -28.26%,
    #3bbde7 100.2%,
    #2eddf4 123.43%
  );
  border-radius: 6px;
  color: #ffffff;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 0.1em;
}
.actived {
  background: linear-gradient(
    80.67deg,
    #246ef3 25.61%,
    #3bbde7 93.82%,
    #2eddf4 106.16%
  );
}
::v-deep .el-input__inner {
  background-color: #ffffff;
}
::v-deep .el-form-item__label,
.admin {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.02em;
}
.change-password {
  margin: 60px auto;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.02em;
  text-align: center;
}

.item-3 {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
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
.aaa {
  margin-bottom: 8px;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.02em;
}
.text5 {
  background: #217bf4;
  box-shadow: 0px 7px 22px -6px rgba(0, 72, 168, 0.34);
  border-radius: 8px;
  color: #ffffff;
  padding: 1px;
  margin-right: 8px;
}
.text6 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  /* or 162% */

  color: #2f2c4a;
}

.item-4 {
  background: linear-gradient(250.39deg, #ffffff 10.13%, #ffffff 94%);
  border-radius: 11px;
  box-shadow: 10px 10px 28px -7px #aaaaaa;
  margin: 10px;
  padding: 10px;
}

.text7 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 14px;
}
.text8 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  /* or 145% */

  text-align: center;
  letter-spacing: 0.01em;
}
.text9 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 14px;

  color: rgba(96, 96, 96, 0.69);
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
.item-5 {
  display: flex;
  height: 80px;
}
.text-9 {
  margin-left: 40px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  /* or 162% */

  color: #2f2c4a;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.messageIndex {
  z-index: 9999 !important;
}
</style>
  