<template >
  <div class="paper-detail">
    <div width="880px" class="main">
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
        <div class="details">
          <div class="part">
            <div class="detail-header1">
              <div class="row"></div>
              <div class="detail-header1">引言</div>
            </div>
            <div class="detail-content1">To create the needed standards, the antenna equation was introduced by this author in [2]–[5]. The antenna equation simplifies the equations that describe antennas in both the time and frequency domains. However, before new standards are established, it would be helpful to show that the antenna equation applies to a broad spectrum of problems. To that end, 10 fundamental antenna-theory puzzles are solved here on a wide variety of subjects.
              Besides showing how to describe antenna performance in the time domain, the antenna equation also shows how to characterize phase in more detail in the frequency domain. One might think that the frequency domain description of antennas has been fully developed. However, almost no mention of phase appears in the antenna definitions standard [1], and what is there is incomplete. Once phase is clarified in the frequency domain, expressions in the time domain become straightforward.
              Other very fundamental problems are addressed. Because an antenna can be described in terms of (something like) scattering parameters, it can be modeled with signal-flow graphs. This makes it easy to solve a wide variety of complicated problems with the aid of Mason’s rule. For example, this approach can be used to reformulate the Friis transmission equation, which normally describes scalar power flow, into a power wave expression that includes both magnitude and phase.
              Various approaches have been used previously to describe antennas in the time domain [6]–[15]. However, none describes the complete antenna equation, as presented here, and none solves complicated antenna problems using signal-flow graphs. A detailed comparison of this article to previous papers is provided in the “Comparison to Previous Formulations” section.
            </div>
          </div>
          <div class="part">
            <div class="detail-header1">
              结论Conclusion
            </div>
            <div class="detail-content1">
              The antenna equation solves a remarkable array of antenna-theory puzzles. It defines the time domain analog of gain, so one can compare the time domain performance of various antennas. It shows how to combine gain with a meaningful phase. It generalizes expressions so they work naturally with waveguide feeds. It allows one to reformulate the Friis transmission equation into a power wave expression that includes both magnitude and phase. It also works naturally with signal-flow graphs to easily solve complicated problems.
            </div>
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
<style scoped>
.paper-detail {
  display: flex;
  height: 100%;
  width: 100%;
  left: 0px;
  top: 0px;
  background: linear-gradient(311.76deg, #D4E7FE, #FFFFFF);
  padding-bottom: 87px;
}
.main {
  margin-left: 44px;
  width: 924px;
}
.paper-header {
  padding-top: 61px;
  padding-left: 38px;
  height: 275px;
  width: 880px;
  border-bottom: 0.5px solid rgba(171, 169, 169, 0.51);;
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
  line-height: 35px;
  color: #FFFFFF;
}
.right-buttons {
  float: right;
  height: 52px;
  width: 200px;
  display: flex;
  justify-content: flex-end;
}
.right-button1 {
  margin-right: 5px;
  height: 52px;
  width: 61px;
  background: url('~@/assets/paperDetailsImg/image0.png');
  background-size: 100% 100%;
}
.right-button2 {
  height: 52px;
  width: 61px;
  background: url('~@/assets/paperDetailsImg/image0 (1).png');
  background-size: 100% 100%;
}
.right-button3 {
  height: 52px;
  width: 61px;
  background: url('~@/assets/paperDetailsImg/image0 (2).png');
  background-size: 100% 100%;
}
.right-button4 {
  height: 52px;
  width: 61px;
  background: url('~@/assets/paperDetailsImg/image0 (3).png');
  background-size: 100% 100%;
}
.content {
  margin-top: 30px;
}
.abstract {
  text-align: left;
  display: inline-block;
  margin-top: 32px;
  padding-left: 38px;
  padding-bottom: 29px;
  /*width: 881px;*/
  height: 353px;
  filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.25));
}
.abstract-sider {
  float: left;
  width: 15px;
  height: 353px;
  background: rgba(67, 127, 236, 0.66);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}
.abstract-title {
  text-align: left;
  height: 39px;
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
}
.row {
  background: url("~@/assets/paperDetailsImg/Vector (1).png");
  background-size: 100% 100%;
  left: 2.29%;
  right: 96.79%;
}
.details {
  margin-left: 0px;
}
.part {
  padding-bottom: 45px;
  text-align: left;
}
.detail-header1 {
  height: 26px;
  text-align: left;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 26px;
}
.detail-content1 {
  padding-top: 19px;
  padding-left: 35px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
}

.review {
  width: 792px;
  padding-top: 28px;
  padding-left: 31px;
  padding-bottom: 34px;
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
  margin-right: 43px;
}
.rank-comments {
  display: inline-block;
  margin-right: 15px;
}
.commends {
  margin-top: 34px;
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
  margin-bottom: 34px;

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
  margin-top: 15px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(180, 180, 180, 0.25);
  border-radius: 8px;
  width: 710px;
  min-height: 149px;
}
</style>