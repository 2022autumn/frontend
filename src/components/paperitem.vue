<template>
  <div class="item">
    <div style="margin-top: 10px">
      <el-row>
        <el-col :span="2">
          <div class="item-type">期刊</div>
        </el-col>
        <el-col :span="22">
          <div class="item-title">这是文章的标题位置</div>
        </el-col>
      </el-row>
    </div>
    <div class="item-info" style="text-align: left">
      <span style="margin-right: 10px">作者</span>
      <img
        src="../HomePage_svg/info-div.svg"
        style="vertical-align: middle"
      />
      <span style="margin-left: 10px; margin-right: 10px">所属机构名称</span>
      <img
        src="../HomePage_svg/info-div.svg"
        style="vertical-align: middle"
      />
      <span style="margin-left: 10px; margin-right: 10px">发表时间</span>
    </div>
    <div class="item-content">
      新冠肺炎疫情的出现是个"黑天鹅"事件.通过对疫情影响下的总供给
      ,总需求及CPI的测算,并综合自然走势和政策效果分析,预计2020年的中国经济增速为5.5%-6.0%,
      CPI上涨率能够控制在4.0%以内.疫情对中国经济自然走势的负面影响很大,2020年增增速目标的扩...
    </div>
    <div style="width: 100%">
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
    </div>
  </div>
</template>
<style>
/* 下方中间推荐内容 */
.reference {
  font-family: "Inter";
  font-style: normal;
  display: inline-block;
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
}
.button {
  margin: auto;
  width: 8vw;
  height: 6vh;
  background: #217bf4;
  box-shadow: 0px 7px 22px -6px rgba(0, 72, 168, 0.34);
  border-radius: 14px;

  font-weight: 700;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  letter-spacing: 0.01em;

  color: #ffffff;
}
.ref-tag {
  width: 50%;
  height: 40px;
  margin-top: 5px;
  background: rgba(117, 167, 235, 0.1);
  color: rgb(47, 44, 74);
  border-radius: 14px;

  font-weight: 700;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 0.01em;
}
.item {
  margin: auto;
  margin-left: 3%;
  margin-bottom: 4vh;
  padding: 1%;
  width: 95%;
  height: 28vh;

  background: linear-gradient(250.39deg, #ffffff 10.13%, #ffffff 94%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
}
.item-type {
  margin: auto;
  width: 4vw;
  height: 4vh;
  background: #217bf4;
  box-shadow: 0px 7px 22px -6px rgba(0, 72, 168, 0.34);
  border-radius: 12px;

  font-weight: 700;
  font-size: 14px;
  line-height: 35px;
  text-align: center;
  letter-spacing: 0.01em;

  color: #ffffff;
}
.item-title {
  float: left;
  padding-top: 4px;
  font-weight: 600;
  font-size: 24px;
  line-height: 26px;
  /* or 108% */
  color: #2f2c4a;
}
.item-info {
  /* text-align: left; */
  vertical-align: top;
  padding-left: 2%;
  padding-top: 10px;
  padding-bottom: 10px;
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
  padding-left: 15px;
  padding-bottom: 8px;

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