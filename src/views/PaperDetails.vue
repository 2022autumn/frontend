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
      <div class="border"></div>
      <div class="content">
        <div class="abstract-sider"></div>
        <div class="abstract">
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
        <div class="commends">
          <div class="cards">

          </div>
        </div>
        <span class="commending-title">发表评论</span>
        <div class="conmmending"></div>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>
<script>
// import leftBody from "../component/paperDetails/main.vue"
export default {
  name: "paperDetails",
  data() {
    return {

    };
  },
  components: {
  },
  methods: {


  },
  // 挂载时获取团队列表
  mounted() {
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/css/global.scss";
.paper-detail {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background: linear-gradient(311.76deg, #D4E7FE, #FFFFFF);
  /*padding-bottom: vh(87);*/
}
.main {
  padding-left: vw(44);
  display: flex;
  width: vw(924);
}
.paper-header {
  float: left;
  clear: both;
  //display: flex;
  //width: 100%;
  //flex: 1;
  padding-top: vh(61);
  padding-left: vw(38);
  height: vh(275);
  width: vw(880);
  border-bottom: 0.5px solid rgba(171, 169, 169, 0.51);;
}
.title {

}
.title-txt {
  margin-top: 0;
  text-align: left;
  font-family: Inter;
  font-size: vw(36);
  font-weight: 600;
  line-height: vh(44);
  width: vw(672);
}

.paper-type {
  display: inline-block;
  width: vw(43);
  height: vh(26);
  border-radius: 8px;
  box-shadow: 0px 7px 22px -6px rgba(0, 72, 168, 0.34);
  background-color: #217BF4;
  color: #FFFFFF;
  text-align: center;
  font-size: vw(14);
  font-weight: 600;
  line-height: vh(26);
  font-family: Inter;
}

.info {
  margin-top: vh(8);
  text-align: left;
  height: vh(26);
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: vw(16);
  line-height: vh(26);
}
.info2 {
  float: left;
  margin-top: vh(8);
  text-align: left;
  height: vh(26);
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: vw(16);
  line-height: vh(26);
  margin-right: vw(28);
}
.buttons {
  padding-top: vh(22);
  height: vh(40);
}
.el-icon-my-origin{
  background: url('~@/assets/paperDetailsImg/Vector.png') center no-repeat;
}
.original {
  float: left;
  display: inline-block;
  width: vw(129);
  height: vh(38);
  background: #217BF4;
  box-shadow: 0px 7px 22px -6px rgba(0, 72, 168, 0.34);
  border-radius: 14px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: vw(16);
  line-height: vh(35);
  color: #FFFFFF;
}
.right-buttons {
  float: right;
  height:vh(52);
  width: vw(200);
  display: flex;
  justify-content: flex-end;
}
.right-button1 {
  margin-right: vw(5);
  height: vh(52);
  width: vw(61);
  background: url('~@/assets/paperDetailsImg/image0.png');
  background-size: 100% 100%;
}
.right-button2 {
  height: vh(52);
  width: vw(61);
  background: url('~@/assets/paperDetailsImg/image0 (1).png');
  background-size: 100% 100%;
}
.right-button3 {
  height: vh(52);
  width: vw(61);
  background: url('~@/assets/paperDetailsImg/image0 (2).png');
  background-size: 100% 100%;
}
.right-button4 {
  height: vh(52);
  width: vw(61);
  background: url('~@/assets/paperDetailsImg/image0 (3).png');
  background-size: 100% 100%;
}
.content {
  float: left;
  clear: both;
  //height: vh(275);
  margin-top: vh(30);
  text-align: left;
  display: block;
  width: vw(880);
  //flex: 1;
}
.abstract {
  text-align: left;
  display: inline-block;
  margin-top: vh(32);
  padding-left: vw(38);
  padding-bottom: vh(29);
  width: vw(881);
  filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.25));
}
.abstract-sider {
  float: left;
  flex: 1;
  width: vw(15);
  height: vh(353);
  background: rgba(67, 127, 236, 0.66);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}
.abstract-title {
  text-align: left;
  height: vh(39);
  margin-bottom: vh(29);
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: vw(32);
  line-height: vh(26);
  letter-spacing: 0.02em;
}
.abstract-body {
  text-align: left;
  width: vw(713);
}
.row {
  background: url("~@/assets/paperDetailsImg/Vector (1).png");
  background-size: 100% 100%;
  left: 2.29%;
  right: 96.79%;
}
.review {
  float: left;
  width: vw(792);
  padding-top: vh(28);
  padding-left: vw(31);
  padding-bottom: vh(34);
  background: linear-gradient(289.09deg, rgba(233, 235, 246, 0.58) 8.18%, rgba(232, 239, 252, 0.68) 42.83%, rgba(240, 242, 247, 0.68) 70.06%, rgba(228, 231, 251, 0.34) 102.01%);
  box-shadow: 0px 0px 8px #C1C9F0;
  border-radius: 12px;
}
.commend-title {
  text-align: left;
  height: vh(26);
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: vw(26);
  line-height: vh(26);
}
.comment-tools {
  margin-left: 0;
  margin-right: 0;
  width: 100%;
  margin-top: vh(15);
  height: vh(26);
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: vw(14);
  line-height: vh(26);
  /* identical to box height, or 186% */

  letter-spacing: 0.02em;

  color: #818181;
}
.total-comments {
  float: left;
}
.filter-comments {
  display: inline-block;
  margin-right: vw(43);
}
.rank-comments {
  display: inline-block;
  margin-right: vw(15);
}
.commends {
  margin-top: vh(34);
  height: vh(26);
  width: vw(710);
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: vw(14);
  line-height: vh(26);
}
.cards {
  width: vw(710);
  height: vh(188);
  margin-bottom: vh(34);

  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(180, 180, 180, 0.25);
  border-radius: 8px;
}
.commending-title {
  text-align: left;
  width: vw(85);
  height: vh(26);
  margin-top: vh(36);
  margin-bottom: vh(15);

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: vw(20);
  line-height: vh(26);
}
.conmmending {
  margin-top: vh(15);
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(180, 180, 180, 0.25);
  border-radius: 8px;
  width: vw(710);
  min-height: vh(149);
}
</style>