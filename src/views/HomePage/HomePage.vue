<template>
  <div>
    <Topbar1></Topbar1>
    <div class="top-background">
      <el-row style="height: 600px">
        <!-- 顶部展示页面的左侧 -->
        <el-col :span="13">
          <div class="title-text" style="margin-top: 18vh; margin-left: -12%">
            search efficiently &
          </div>
          <div class="title-text">communicate together</div>

          <div style="margin-top: 7vh; margin-bottom: 5vh;display: inline-block">
            <div style="text-align: center">
              <el-input placeholder="请输入检索内容" v-model="input1">
                <template slot="prepend">高级检索</template>
                 <i slot="suffix" class="el-input__icon el-icon-search" @click="j_search_outcome"></i>
              </el-input>
            </div>
          </div>

          <div style="margin: 3vh auto; padding-left: 5%; padding-right: 5%;">
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

        <!-- 顶部展示页面的右侧，只有两张图片 -->
        <el-col :span="11" style="display: fix">
          <div>
            <span>
              <img
                src="../../HomePage_svg/top-left.svg"
                style="width: 50%; height: 50%; margin-top: 40%"
            /></span>
            <span>
              <img
                src="../../HomePage_svg/top-right.svg"
                style="width: 50%; height: 50%; margin-bottom: 14%"
            /></span>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 下部内容页 -->
    <div>
      <el-row :gutter="10" class="content-panel">

        <!-- 左侧推荐文章栏 -->
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
            <PaperItem></PaperItem>
            <PaperItem></PaperItem>
            <PaperItem></PaperItem>
          </div>

          <div class="pages">
            <el-pagination
                layout="prev, pager, next"
                :total=this.total_page
                @current-change="handlechange"
                background="white"
              >
            </el-pagination>
          </div>
        </el-col>

        <!-- 右侧导航栏 -->
        <el-col :span="7">
          <!-- 导航栏标题 -->
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

          <!-- 导航栏内容框 -->
          <div class="right-item">
            <img
              src="../../HomePage_svg/right-icon1.svg"
              style="vertical-align: middle;"
            />
            <span style="vertical-align: super"> 学者主页 </span>
          </div>
          <div class="right-item">
            <img
              src="../../HomePage_svg/right-icon2.svg"
              style="vertical-align: middle;"
            />
            <span style="vertical-align: super"> 学术分析 </span>
          </div>
          <div class="right-item">
            <img
              src="../../HomePage_svg/right-icon3.svg"
              style="vertical-align: middle;"
            />
            <span style="vertical-align: super"> 期刊频道 </span>
          </div>

          <!-- 导航栏滚动框 -->
          <el-carousel height="25vh" interval="2000" style="margin-top: 5vh">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="slides">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>

          <!-- 导航栏热门排行 -->
          <div class="hot-list">
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
import Topbar1 from "@/components/topbar1";
import PaperItem from "@/components/paperItem";
export default {
  components: {Topbar1, PaperItem},
  data(){
    return{
      input1:"",
      num_exact_page:8,
      total: 1000,//返回的检索结果的总量
      total_page:0,
    }
  },
  methods:{
    j_search_outcome(){
      console.log(this.input1);
      var cond = {};
      sessionStorage.setItem('Cond',JSON.stringify(cond));
      sessionStorage.setItem('search_name1',this.input1);
      sessionStorage.setItem('now_page',JSON.stringify(1));
      window.open('/search_outcome');
       //window.location.replace("/search_outcome");
    }
  },
  created() {
    if(this.total%4===0){
      this.total_page = this.total/8*10;
    }
    else{
      this.total_page = (this.total/8+1)*10;
    }
  }
}
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
  margin-top: -9vh;
  padding-left: 5%;
  padding-right: 5%;
  margin: 0 auto;
  text-align: center;

  font-family: "Plus Jakarta Sans";
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  /* identical to box height, or 36px */

  letter-spacing: -0.01em;

  color: #217bf4;
}

/* 搜索框样式 */
.el-input-group__prepend {
  background: rgba(117, 167, 235, 0.52);
  font-weight: 400;
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
  font-weight: 300;
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
  /* height: 600px; */
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
  padding:0% 12%;
  /* padding-left: 12%;
  padding-right: 12%; */

  margin: auto;
  margin-bottom: 3vh;
  width: 80%;
  height: 10vh;
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
  width: 80%;
  height: 100%;
  margin: auto;
  background: #accaf1;
}
.el-carousel__button {
  height: 5px;
  width: 1vw;
  border: none;
  background-color: rgba(97, 93, 93, 0.3);
}

/* 热榜 */
.hot-list {
  margin: 0 auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
  width: 80%;
  height: 80vh;

  background:#FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
}
.hot-titile1 {
  padding-top: 4vh;
  padding-bottom: 1vh;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  color: #217bf4;
}
.hot-titile2 {
  margin-bottom: 3vh;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #0A093D;
}
.hot-item{
  width: auto;
  margin-bottom: 1vh;
  text-align: center;
}
.hot-number{
  font-weight: 400;
  font-size: 20px;
  line-height: 180%;
  text-align: center;
  color: rgba(86, 72, 72, 0.67);
}
.hot-content{
  font-weight: 400;
  font-size: 16px;
  line-height: 123%;
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

/* 翻页器 */
.pages {
  width: inherit;
  text-align: center;
  margin: 4vh auto;
}
.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  background-color: #fff; /*进行修改未选中背景和字体*/
}
</style>
