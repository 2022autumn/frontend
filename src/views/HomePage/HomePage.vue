<template>
  <div>
    <div class="top-background">
      <el-row style="height: 600px">
        <el-col :span="13">
          <div class="title-text" style="margin-top: 100px; margin-left: -12%">
            search efficiently &
          </div>
          <div class="title-text">communicate together</div>

          <div style="margin-top: 50px; display: inline-block">
            <div style="text-align: center">
              <el-input placeholder="请输入检索内容" v-model="input1">
                <template slot="prepend">高级检索</template>
                <i slot="suffix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </div>
          </div>

          <div style="margin: 70px">
            <el-row :gutter="20">
              <el-col :span="6">
                <div>
                  <img
                    src="../../HomePage_svg/top-icon-1.svg"
                    style="width: 60px; height: 60px; text-align: bottom"
                  />
                </div>
              </el-col>
              <el-col :span="6">
                <div>
                  <img
                    src="../../HomePage_svg/top-icon-2.svg"
                    style="width: 60px; height: 60px; text-align: bottom"
                  />
                </div>
              </el-col>
              <el-col :span="6">
                <div>
                  <img
                    src="../../HomePage_svg/top-icon-3.svg"
                    style="width: 60px; height: 60px; text-align: bottom"
                  />
                </div>
              </el-col>
              <el-col :span="6">
                <div>
                  <img
                    src="../../HomePage_svg/top-icon-4.svg"
                    style="width: 60px; height: 60px; text-align: bottom"
                  />
                </div>
              </el-col>
            </el-row>
          </div>

          <div class="icon-text">
            <el-row :gutter="20">
              <el-col :span="6">
                <div>50k+ 学者</div>
              </el-col>
              <el-col :span="6">
                <div>100k+ 论文</div>
              </el-col>
              <el-col :span="6">
                <div>10k+ 期刊</div>
              </el-col>
              <el-col :span="6">
                <div>1k+ 组织</div>
              </el-col>
            </el-row>
          </div>
        </el-col>

        <el-col :span="11" style="display: fix">
          <div>
            <span>
              <img
                src="../../HomePage_svg/top-left.svg"
                style="width: 50%; height: 50%; margin-top: 30%"
            /></span>
            <span>
              <img
                src="../../HomePage_svg/top-right.svg"
                style="width: 50%; height: 50%; margin-bottom: 15%"
            /></span>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="content-panel">
      <el-row :gutter="10">
        <el-col :span="17">
          <div class="reference">
            <el-row>
              <el-col :span="6">
                <div class="button">推荐</div>
              </el-col>
              <el-col :span="18">
                <div class="ref-tag">
                  <img
                    src="../../HomePage_svg/ref-head.svg"
                    style="
                      vertical-align: middle;
                      margin-left: -10%;
                      margin-top: 5px;
                    "
                  />
                  <span style="vertical-align: top">
                    订阅主题词，相关内容主页推荐~</span
                  >
                </div>
              </el-col>
            </el-row>
          </div>

          <div class="itemlist">
            <div class="item" style="margin-bottom: 20px">
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
                  src="../../HomePage_svg/info-div.svg"
                  style="vertical-align: middle"
                />
                <span style="margin-left: 10px; margin-right: 10px"
                  >所属机构名称</span
                >
                <img
                  src="../../HomePage_svg/info-div.svg"
                  style="vertical-align: middle"
                />
                <span style="margin-left: 10px; margin-right: 10px"
                  >发表时间</span
                >
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
                  <el-col :span="9"
                    ><div class="item-placeholder">a</div></el-col
                  >
                  <el-col :span="3">
                    <div class="item-site" style="margin-top: 17px">
                      <img
                        src="../../HomePage_svg/site.svg"
                        style="vertical-align: top"
                      />
                      <span
                        style="vertical-align: text-bottom; padding-left: 7px"
                        >引用次数</span
                      >
                    </div>
                  </el-col>
                  <el-col :span="3">
                    <div class="item-site" style="margin-top: 13px">
                      <img
                        src="../../HomePage_svg/star.svg"
                        style="vertical-align: middle"
                      />
                      <span
                        style="vertical-align: text-bottom; padding-left: 5px"
                        >收藏次数</span
                      >
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>

            <div class="item" style="margin-bottom: 20px">
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
                  src="../../HomePage_svg/info-div.svg"
                  style="vertical-align: middle"
                />
                <span style="margin-left: 10px; margin-right: 10px"
                  >所属机构名称</span
                >
                <img
                  src="../../HomePage_svg/info-div.svg"
                  style="vertical-align: middle"
                />
                <span style="margin-left: 10px; margin-right: 10px"
                  >发表时间</span
                >
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
                  <el-col :span="9"
                    ><div class="item-placeholder">a</div></el-col
                  >
                  <el-col :span="3">
                    <div class="item-site" style="margin-top: 17px">
                      <img
                        src="../../HomePage_svg/site.svg"
                        style="vertical-align: top"
                      />
                      <span
                        style="vertical-align: text-bottom; padding-left: 7px"
                        >引用次数</span
                      >
                    </div>
                  </el-col>
                  <el-col :span="3">
                    <div class="item-site" style="margin-top: 13px">
                      <img
                        src="../../HomePage_svg/star.svg"
                        style="vertical-align: middle"
                      />
                      <span
                        style="vertical-align: text-bottom; padding-left: 5px"
                        >收藏次数</span
                      >
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>

            <div class="item" style="margin-bottom: 20px">
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
                  src="../../HomePage_svg/info-div.svg"
                  style="vertical-align: middle"
                />
                <span style="margin-left: 10px; margin-right: 10px"
                  >所属机构名称</span
                >
                <img
                  src="../../HomePage_svg/info-div.svg"
                  style="vertical-align: middle"
                />
                <span style="margin-left: 10px; margin-right: 10px"
                  >发表时间</span
                >
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
                  <el-col :span="9"
                    ><div class="item-placeholder">a</div></el-col
                  >
                  <el-col :span="3">
                    <div class="item-site" style="margin-top: 17px">
                      <img
                        src="../../HomePage_svg/site.svg"
                        style="vertical-align: top"
                      />
                      <span
                        style="vertical-align: text-bottom; padding-left: 7px"
                        >引用次数</span
                      >
                    </div>
                  </el-col>
                  <el-col :span="3">
                    <div class="item-site" style="margin-top: 13px">
                      <img
                        src="../../HomePage_svg/star.svg"
                        style="vertical-align: middle"
                      />
                      <span
                        style="vertical-align: text-bottom; padding-left: 5px"
                        >收藏次数</span
                      >
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </el-col>

        <el-col :span="7">
          <!-- 右边栏的标题 -->
          <div class="bar-title1" style="margin-left: 50px">
            I SAHRE
            <img
              src="../../HomePage_svg/vector5.svg"
              style="
                margin-bottom: -10px;
                margin-left: 15px;
                margin-right: -20px;
              "
            />
          </div>
          <div class="bar-title2" style="margin-top: 20px; margin-bottom: 20px">
            站内功能
          </div>
          <!-- 右边栏的导航栏 -->
          <div class="right-item">
            <img
              src="../../HomePage_svg/right-icon1.svg"
              style="vertical-align: middle; margin-left: -20px"
            />
            <span style="vertical-align: text-top"> 学者主页 </span>
          </div>
          <div class="right-item">
            <img
              src="../../HomePage_svg/right-icon2.svg"
              style="vertical-align: middle; margin-left: -20px"
            />
            <span style="vertical-align: text-top"> 学术分析 </span>
          </div>
          <div class="right-item">
            <img
              src="../../HomePage_svg/right-icon3.svg"
              style="vertical-align: middle; margin-left: -20px"
            />
            <span style="vertical-align: text-top"> 期刊频道 </span>
          </div>

          <!-- 右边栏的滚动框 -->
          <el-carousel height="150px" interval="2000" style="margin-top: 20px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="slides">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>

          <!-- 右边栏的热门排行 -->
          <div class="hot-list" style="margin-top: 20px">
            <div class="hot-titile1">I SHARE</div>
            <div class="hot-titile2">热门排行</div>
            <div class="hot-item">
              <span class="hot-number" style="color: #FA1616">01 </span>
              <span class="hot-content"> 疫情冲击下的2020年中国经济形势...</span>
            </div>
            <div class="hot-item">
              <span class="hot-number" style="color: #FD9B40">02 </span>
              <span class="hot-content"> 疫情冲击下的2020年中国经济形势...</span>
            </div>
            <div class="hot-item">
              <span class="hot-number" style="color: #F6DA95">03 </span>
              <span class="hot-content"> 疫情冲击下的2020年中国经济形势...</span>
            </div>
            <div class="hot-item">
              <span class="hot-number">04 </span>
              <span class="hot-content"> 疫情冲击下的2020年中国经济形势...</span>
            </div>
            <div class="hot-item">
              <span class="hot-number">05 </span>
              <span class="hot-content"> 疫情冲击下的2020年中国经济形势...</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
  
<script>
// @ is an alias to /src
</script>
  
<style>
.top-background {
  display: inline-block;
  text-align: center;
  width: 100%;
  height: 600px;
  left: 0px;
  top: 0px;

  font-family: "Inter";
  font-style: normal;
  background: linear-gradient(311.76deg, #d4e7fe -15.24%, #ffffff 78.85%);
}
.title-text {
  /* margin-left: 10%; */
  margin-top: 30px;
  /* margin-bottom: 20px; */

  /* text-align: left; */
  font-weight: 700;
  font-size: 52px;
  line-height: 48px;
  /* or 118% */

  color: #0a093d;
}
.icon-text {
  margin-top: -20px;
  margin-left: 50px;
  margin-right: 50px;
  text-align: center;

  font-family: "Plus Jakarta Sans";
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  /* identical to box height, or 36px */

  letter-spacing: -0.01em;

  color: #217bf4;
}

.el-input-group__prepend {
  background: rgba(117, 167, 235, 0.52);
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #fcfcff;
}
.el-input__inner {
  background: rgba(117, 167, 235, 0.52);
  height: 45px; /*调整inner的高度*/
  width: 500px;
  border-radius: 7px;
}
.el-input__inner::placeholder {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #fcfcff;
}
.el-input__icon {
  width: 40px;
}
.el-input__suffix {
  color: white;
}

/* 页面中下部底色*/
.content-panel {
  font-family: "Inter";
  font-style: normal;

  width: 100%;
  height: 600px;
  background: linear-gradient(
    0deg,
    rgba(225, 233, 245, 0) 1.63%,
    #f1f6fd 20.5%,
    #f1f6fd 58.57%,
    #ffffff 100%
  );

  padding-top: 30px;
  padding-right: 10px;
  padding-left: 10px;
}

/* 右边工具栏 */
.bar-title1 {
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height, or 100% */

  text-align: center;

  color: #217bf4;
}
.bar-title2 {
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  /* identical to box height, or 112% */

  text-align: center;
  color: #0a093d;
}
.right-item {
  display: inline-block;

  margin: 10px;
  width: 310px;
  height: 70px;
  background: #ffffff;
  border-radius: 14px;

  font-weight: 600;
  font-size: 24px;
  line-height: 108%;
  color: #2f2c4a;

  box-shadow: 0px 7px 22px -6px rgba(0, 72, 168, 0.34);
}
/* 图片切换slides */
.slides {
  width: 75%;
  height: 100%;
  margin: auto;
  background: #accaf1;
}
.el-carousel__button {
  height: 5px;
  width: 40px;
  border: none;
  background-color: rgb(84, 84, 84, 0.3);
}
/* 热榜 */
.hot-list {
  margin: auto;
  padding: auto;
  width: 90%;
  height: 550px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
}
.hot-titile1 {
  padding-top: 20px;
  padding-bottom: 10px;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  color: #217bf4;
}
.hot-titile2 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #0A093D;
}
.hot-item{
  margin-top: 5px;
  margin-bottom: 10px;
}
.hot-number{
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  text-align: center;
  color: rgba(86, 72, 72, 0.67);
}
.hot-content{
  font-weight: 400;
  font-size: 18px;
  line-height: 16px;
  text-align: center;
  color: #000000;
}

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
  width: 120px;
  height: 50px;
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
  padding: 15px;
  width: 95%;
  height: 180px;

  background: linear-gradient(250.39deg, #ffffff 10.13%, #ffffff 94%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
}
.item-type {
  margin: auto;
  width: 50px;
  height: 35px;
  background: #217bf4;
  box-shadow: 0px 7px 22px -6px rgba(0, 72, 168, 0.34);
  border-radius: 14px;

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