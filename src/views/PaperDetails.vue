<template >
  <div class="paper-detail">
    <div class="main">
      <div class="paper-header">
          <div class="title">
            <div class="title-txt">疫情冲击下的2020年中国经济形势与政策选择
              <div class="paper-type">期刊</div>
            </div>
          </div>
          <div class=" info location">
            <span>北京航空航天大学xx实验室</span>
          </div>
          <div class=" info authors">
            <span>作者名字1； 作者名字2； 作者名字3；</span>
          </div>
          <div class="info">
            <div class="info2 time">
              发表时间：2022年01月06日
            </div>
            <div class="info2 divide">
              |
            </div>
            <div class="info2 book">
              发表期刊：Anonymous
            </div>
            <div class="info2 divide">
              |
            </div>
            <div class="info2 cite">
              被引次数：51
            </div>
          </div>
          <div class="buttons">
            <el-button class="original" icon="el-icon-my-origin">
              原文地址
            </el-button>
            <div class="right-buttons">
              <el-button class="right-button1"></el-button>
              <el-button class="right-button2"></el-button>
              <el-button class="right-button3"></el-button>
              <el-button class="right-button4"></el-button>
            </div>
          </div>
        </div>
      <div class="content">
        <div class="abstract">
          <div class="abstract-sider"></div>
          <div class="abstract-title">
            摘要Abstract
          </div>
          <div class="abstract-body">
            A three-pole 10-T superconducting wiggler was installed in the 8-GeV electron storage ring at SPring-8 for generating high-energy synchrotron radiation. Beam tests were carried out to check its performance and to investigate the effects on a stored beam. A beam was successfully stored at magnetic fields of the wiggler up to 9.7 T. The beam current was limited to 1 mA to avoid unnecessarily high heat-load on photon absorbers and radiation damage to accelerator components. Beam parameters such as a horizontal beam size, a bunch length, betatron tune shifts were measured. A spectrum of high-energy synchrotron radiation from the wiggler was also measured with the NaI scintillator at an extremely low beam current of about 8 pA.
          </div>
        </div>
      </div>
      <div class="review">
        <div class="commend-title">评论区  Comments</div>
        <div class="comment-tools">
          <div class="total-comments">共 5 条评论</div>
          <div class="filter-comments">筛选条件</div>
          <div class="rank-comments">排序条件</div>
        </div>
<!--        <div class="commends">-->
<!--          <div class="cards">-->

<!--          </div>-->
<!--        </div>-->
        <span class="commending-title">发表评论</span>
        <div class="conmmending">
          <div class="avators">
            <el-avatar></el-avatar>
          </div>
          <div class="right_comment">
            <el-input
                class="input_command"
                placeholder="请输入评论内容">

            </el-input>
            <el-button class="submit-btn">发表</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="right-sider">
      <div class="key">
        <keyword />
      </div>
      <div class="ref">
        <reference />
      </div>
<!--      <div class="notes">-->
<!--        <note />-->
<!--      </div>-->

    </div>
  </div>
</template>
<script>
// import leftBody from "../component/paperDetails/main.vue"
import Note from "@/components/note";
import Keyword from "@/components/keyword";
import Reference from "@/components/reference";
export default {
  name: "paperDetails",
  data() {
    return {

    };
  },
  components: {
    Reference,
    Keyword,
    Note,
  },
  methods: {


  },
  // 挂载时获取
  mounted() {
  },
};
</script>
<style lang="scss" scoped>

.paper-detail {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background: linear-gradient(311.76deg, #D4E7FE, #FFFFFF);
  /*padding-bottom: 87px;*/
}
.main {
  padding-left: 44px;
  //display: flex;
  width: 924px;
}
.paper-header {
  width: 100%;
  padding-top: 61px;
  padding-left: 38px;
  height: 344px;
  border-bottom: 0.5px solid rgba(171, 169, 169, 0.51);
}
.title {

}
.title-txt {
  margin-top: 0;
  text-align: left;
  font-family: Inter;
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
  width: 672px;
}

.paper-type {
  display: inline-block;
  width: 43px;
  height: 26px;
  border-radius: 8px;
  box-shadow: 0px 7px 22px -6px rgba(0, 72, 168, 0.34);
  background-color: #217BF4;
  color: #FFFFFF;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 26px;
  font-family: Inter;
}

.info {
  margin-top: 8px;
  text-align: left;
  height: 26px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  background: transparent !important;
}
.info2 {
  float: left;
  margin-top: 8px;
  text-align: left;
  height: 26px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  margin-right: 28px;
}
.buttons {
  width: 100%;
  padding-top: 22px;
  height: 40px;
}
.el-icon-my-origin{
  background: url('~@/assets/paperDetailsImg/Vector.png') center no-repeat;
}
.original {
  float: left;
  display: inline-block;
  width: 129px;
  height: 38px;
  background: #217BF4;
  box-shadow: 0px 7px 22px -6px rgba(0, 72, 168, 0.34);
  border-radius: 14px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  //line-height: 38px;
  color: #FFFFFF;
}
.right-buttons {
  float: right;
  height:52px;
  width: 200px;
  margin-right: 20px;
  display: flex;
  justify-content: flex-end;
}
.right-button1 {
  margin-right: 5px;
  height: 52px;
  width: 61px;
  align-items: center;
  justify-content: center;
  background: url('~@/assets/paperDetailsImg/image0.png');
  //background-size: 100% 100%;
}
.right-button2 {
  height: 52px;
  width: 61px;
  background: url('~@/assets/paperDetailsImg/image0 (1).png');
  //background-size: 100% 100%;
}
.right-button3 {
  height: 52px;
  width: 65px;
  background: url('~@/assets/paperDetailsImg/image0 (2).png');
  //background-size: 100% 100%;
}
.right-button4 {
  height: 52px;
  width: 70px;
  background: url('~@/assets/paperDetailsImg/image0 (3).png');
  //background-size: 100% 100%;
}
.content {
  width: 100%;
  margin-top: 40px;
  text-align: left;
  position: relative;
  clear: both;
}
.abstract {
  text-align: left;
  margin-top: 32px;
  width: 881px;
  overflow:hidden;
  filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.25));
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.25);
}

.abstract-sider {
  float: left;
  margin-top: 0px;
  margin-bottom: 0px;
  flex: 1;
  width: 15px;
  //height: 100%;
  //height: 353px;
  background: rgba(67, 127, 236, 0.66);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  //margin-right: 38px;
  margin-bottom: -10000px;
  padding-bottom: 10000px;
}

.abstract-title {
  padding-top: 13px;
  text-align: left;
  height: 39px;
  padding-left: 38px;
  margin-top: 13px;
  margin-bottom: 29px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 26px;
  letter-spacing: 0.02em;
}
.abstract-body {
  text-align: left;
  width: 713px;
  padding-bottom: 29px;
  padding-left: 38px;
}
.row {
  background: url("~@/assets/paperDetailsImg/Vector (1).png");
  background-size: 100% 100%;
  left: 2.29%;
  right: 96.79%;
}
.review {
  float: left;
  display: block;
  //width: 100%;
  min-height: 285px;
  width: 792px;
  margin-top: 50px;
  padding-top: 28px;
  padding-left: 31px;
  padding-bottom: 34px;
  margin-bottom: 34px;
  background: linear-gradient(289.09deg, rgba(233, 235, 246, 0.58) 8.18%, rgba(232, 239, 252, 0.68) 42.83%, rgba(240, 242, 247, 0.68) 70.06%, rgba(228, 231, 251, 0.34) 102.01%);
  box-shadow: 0px 0px 8px #C1C9F0;
  border-radius: 12px;
}
.commend-title {
  text-align: left;
  height: 26px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 26px;
}
.comment-tools {
  margin-left: 0;
  margin-right: 0;
  width: 100%;
  margin-top: 15px;
  height: 26px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  /* identical to box height, or 186% */

  letter-spacing: 0.02em;

  color: #818181;
}
.total-comments {
  float: left;
}
.filter-comments {
  display: inline-block;
  margin-left: 380px;
  margin-right: 43px;
}
.rank-comments {
  display: inline-block;
  margin-right: 15px;
}
.commends {
  margin-top: 7px;
  height: 26px;
  width: 710px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
}
.cards {
  width: 710px;
  height: 188px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(180, 180, 180, 0.25);
  border-radius: 8px;
}
.commending-title {
  text-align: left;
  width: 85px;
  height: 26px;
  margin-top: 36px;
  margin-bottom: 15px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
}
.conmmending {
  position: relative;
  margin-top: 15px;
  padding-top: 24px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(180, 180, 180, 0.25);
  border-radius: 8px;
  width: 710px;
  min-height: 149px;
}
.avators {
  display: inline-block;
  float: left;
  width: 94px;
  height: 100%;
  margin-top: 16px;
  margin-left: 23px;
}
.right-comment {
  display: inline-block;
  float: left;
  margin-left: 5px;
}
.input_command {
  width: 543px;
  height: 72px;
  border: 1.4px solid rgba(198, 198, 198, 0.6);
  border-radius: 8px;
}
.submit-btn {
  float: right;
  margin-right: 45px;
  margin-top: 14px;
  width: 98px;
  height: 28px;
  background: linear-gradient(94.95deg, #288CD6 -43.46%, rgba(108, 155, 247, 0.56) 168.08%);
  box-shadow: 0px 0px 6px rgba(153, 166, 213, 0.57);
  border-radius: 5px;
  color: #FFFFFF;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.right-sider {
  display: flex;
  float: right;
  clear: both;
  margin-right: 80px;
  margin-left: 104px;
  //padding-top: 83px;
  width: 100%;
  display: table-cell;
  vertical-align: middle;
  flex-direction:column;
}
.key {
  width: 100%;
  height: 100%;
  height: auto;
}
.ref {
  float: left;
  margin-top: 64px;
  width: 100%;
  height: auto;
  margin-right: 0px;
}
.notes {
  width: 100%;
  height: 100%;
  margin-top: 64px;
  clear: both;
}
</style>
<style>
.el-input__inner {
  border: none !important;
}
</style>
