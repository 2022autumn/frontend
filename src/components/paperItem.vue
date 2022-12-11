<template>
  <div class="item">
    <div style="margin-top: 1vh">
        <div class="item-type" style="display: inline-block">
          {{ this.type }}
        </div>
        <div class="item-title" style="display: inline-block">
          {{ this.title }}
        </div>
      <!-- <el-row>
        <el-col :span="2">
          <div class="item-type">{{ this.type }}</div>
        </el-col>
        <el-col :span="22">
          <div class="item-title">{{this.title}}</div>
        </el-col>
      </el-row> -->
    </div>
    <div class="item-info" style="text-align: left">
      <span style="margin-right: 10px">{{ this.author }}</span>
      <img src="../HomePage_svg/info-div.svg" style="vertical-align: middle" />
      <span style="margin-left: 10px; margin-right: 10px">{{
        this.jigou
      }}</span>
      <img src="../HomePage_svg/info-div.svg" style="vertical-align: middle" />
      <span style="margin-left: 10px; margin-right: 10px">{{ this.time }}</span>
    </div>
    <div class="item-content">
      {{ this.abstract }}
    </div>
    <!--<div style="width: 100%">
      <el-row>
        <el-col :span="3">
          <div class="item-keyword">标签/关键词</div>
        </el-col>
        <el-col :span="3">
          <div class="item-keyword">标签/关键词</div>
        </el-col>
        <el-col :span="3">
          <div class="item-keyword">标签/关键词</div>
        </el-col>
        <el-col :span="9"><div class="item-placeholder">a</div></el-col>
        <el-col :span="3">
          <div class="item-site" style="margin-top: 17px">
            <img
              src="../HomePage_svg/site.svg"
              style="vertical-align: top"
            />
            <span style="vertical-align: text-bottom; padding-left: 7px"
              >引用次数</span
            >
          </div>
        </el-col>
        <el-col :span="3">
          <div class="item-site" style="margin-top: 13px">
            <img
              src="../HomePage_svg/star.svg"
              style="vertical-align: middle"
            />
            <span style="vertical-align: text-bottom; padding-left: 5px"
              >收藏次数</span
            >
          </div>
        </el-col>
      </el-row>
    </div>-->
  </div>
</template>
<script>
export default {
  name: "paperItem",
  props: ["title", "author", "jigou", "time", "abstract", "type"],
  data() {
    return {};
  },
};
</script>

<style>
/* 下方中间推荐内容 */
.item {
  margin: auto;
  margin-left: 3%;
  margin-bottom: 4vh;
  padding: 2%;
  width: 95%;
  height: 230px;

  background: linear-gradient(250.39deg, #ffffff 10.13%, #ffffff 94%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
}
.item-type {
  margin: auto;
  padding: 6px 5px;
  height: 4vh;
  background: #217bf4;
  box-shadow: 0px 7px 22px -6px rgba(0, 72, 168, 0.34);
  border-radius: 6px;

  font-weight: 700;
  font-size: 16px;
  line-height: 2vh;
  letter-spacing: 0.01em;
  color: #ffffff;
}
.item-title {
  margin-left: 1vw;
  font-weight: 600;
  font-size: 22px;
  line-height: 108%;
  color: #2f2c4a;
}
.item-info {
  vertical-align: top;
  /* padding-left: 2%; */
  padding-top: 2vh;
  padding-bottom: 2vh;
  width: 100%;

  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: rgba(96, 96, 96, 0.69);
}
.item-content {
  width: auto;
  /* margin: auto; */
  /* padding-left: 15px; */
  padding-bottom: 2vh;

  align-items: center;
  text-align: left;

  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: rgba(96, 96, 96, 0.69);
}
.item-keyword {
  margin: 10px;
  width: 93px;
  height: 30px;

  background: rgba(99, 162, 247, 0.1);
  font-weight: 700;
  font-size: 13px;
  line-height: 30px;

  text-align: center;
  letter-spacing: 0.01em;
  border-radius: 14px;
}
.item-site {
  float: right;
  margin: 10px;
  font-weight: 500;
  font-size: 15px;
  line-height: 14px;
  /* identical to box height, or 93% */
  text-align: center;
  color: rgba(96, 96, 96, 0.69);
}
.item-placeholder {
  opacity: 0;
  width: 100%;
}
</style>
