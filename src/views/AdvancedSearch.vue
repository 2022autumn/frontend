<template>
    <div>
        <topbar2></topbar2>
        <el-row style="height: 600px" class="background">
            <el-col :span="11">
                <div class="left-img" style="margin-top: 150px; margin-left: 30%">
                    <img preview-disabled
                        src="../../public/advanced_img/Advanced Search.svg"
                    />
                </div>
                <div class="title-text" style="margin-top: 50px; margin-left: 30%">
                    高级检索
                </div>
                 <div class="left-img" style="margin-top: 70px; margin-left: 30%">
                    <img preview-disabled
                        src="../../public/advanced_img/illustration1.svg"
                    />
                </div>
            </el-col>
            <el-col :span="13">
                <div class="hot-list" style="margin-top: 200px">
                    <!-- <div class="hot-titile1">I SHARE</div>
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
                    </div> -->
                </div>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
import Topbar2 from "@/components/topbar2";
import Topbar1 from "@/components/topbar1";
export default {
  name: "advanced_search",
  components: {Topbar2, Topbar1},
  data() {
    return {

    };
  },
  methods: {


  },
  // 挂载时获取
  mounted() {
  },
}
</script>

<style>
  .el-col {
    border-radius: 4px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #9ac746;
  }
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .title-text {
  /* margin-left: 10%; */
  margin-top: 30px;
  /* margin-bottom: 20px; */

  /* text-align: left; */
  font-weight: 700;
  font-size: 65px;
  line-height: 48px;
  /* or 118% */

  color: #0a093d;
}
.hot-list {
  margin-top: 100px;
  margin: auto;
  padding: auto;
  width: 90%;
  height: 650px;

  background: #ffffff;
  box-shadow: 7px 7px 7px 7px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
}
.background{
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
</style>