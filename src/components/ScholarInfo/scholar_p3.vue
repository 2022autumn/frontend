<template>
  <div class="scholar_p3">
    <div class="scholar_count">
      <div class="block b1">
        <span class="tit">发表数</span>
        <span class="num">{{scholarInfo.works_count}}</span>
      </div>
      <div class="divide"></div>
      <div class="block b2">
        <span class="tit">被引用量</span>
        <span class="num">{{ scholarInfo.cited_by_count }}</span>
      </div>
    </div>
    <div class="history">
      过去十年发表
    </div>
    <div class="scholar_img">

    </div>
    <div class="scholar_domain">
      <div>相关领域</div>
      <div class="domain_set">
        <div class="domain_boxs" v-for="(item,index) in domainList" :key="index">
          <div class="domain-box">
<!--            <img src="../../assets/label.png" class="label">-->
            <div class="domain">{{ item.display_name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="scholar_buttons">
      <span>
        <el-button v-if="'orcid' in scholarInfo.ids"
            class="buttons orcid_button"
                   icon="el-icon-my-orcid">
          <a
              :href=scholarInfo.ids.orcid
              target="_blank"
              style="color: black;text-decoration-line: none">orcid</a>
        </el-button>
        <el-button v-if="'scopus' in scholarInfo.ids"
            class="buttons openalex_button"
                   icon="el-icon-my-openalex">
          <a
              :href=scholarInfo.ids.scopus
              target="_blank"
              style="color: black;text-decoration-line: none">scopus</a>
        </el-button>
      </span>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";

export default {
  name: "scholar_p3",
  props: {
    scholarInfo: {
      type: Object
    },
    domainList: []
  },
  data() {
    var option = {
      xAxis: {
        data: [ '', '', '', '', '', '', '', '', '', '']
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: [0, 0, 0, 0, 0, 0, 0]
        }
      ]
    };
    return {
      option,
    }
  },
  created() {
  }
}
</script>
<style scoped>
.scholar_p3 {
  width: 455px;
  height: 621px;
  align-items: center;

  padding-top: 33px;
  padding-left: 36px;
  padding-right: 33px;

  background: #FFFFFF;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.scholar_count {
  display: flex;
  height: 90px;
}
.divide {
  position: relative;
  margin-top: 62px;
  vertical-align: center;
  width: 42px;
  height: 0px;
  border: 0.8px solid rgba(96, 96, 96, 0.75);
  transform: rotate(90deg);
}
.block {
  width: 50%;
  display: table-cell;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-right: 8px;
  /*padding-left: 10px;*/
}

.tit {
  width: 100%;
  text-align: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  float: left;
  color: #606060;

}
.num {
  width: 100%;
  text-align: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 72px;
  float: left;
  color: #606060;

}
.history {
  margin-top: 30px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  color: #606060;
}
.scholar_img {
  height: 100px;
  width: 100%;
}
.scholar_domain {

}
.scholar_buttons {
  margin-top: 48px;
}
.buttons {
  border: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
}
.domain_set {
  display: flex;
  width: 400px;
  height: 163px;
  overflow-y: auto;
  padding-top: 17px;
  flex-wrap: wrap;
}
.domain_boxs {
  display: flex;
  max-height: 153px;
  padding-top: 10px;
  padding-left: 12px;
  flex-wrap: wrap;
}
.domain-box {
  display: flex;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  line-height: 27px;

  color: #0352FF;
  background: #DFE7F6;
  border-radius: 2px
}

</style>
<style>
.block .span{
  position: relative;
  width: 100%;
  text-align: center;
  float: left;
  margin-top: 5px;
}
.el-icon-my-mag {
  background: url("~@/assets/acholarPage/mag.png") no-repeat;
  width: 24px;
  height: 20px;
  /*background-size: cover;*/
}
.el-icon-my-orcid {
  background: url("~@/assets/acholarPage/orcid.png") no-repeat;
  width: 24px;
  height: 20px;
  background-size: cover;
}
.el-icon-my-openalex {
   background: url("~@/assets/acholarPage/opengaex.png") no-repeat;
  width: 24px;
  height: 22px;
  background-size: cover;
 }
.el-button+.el-button, .el-checkbox.is-bordered+.el-checkbox.is-bordered {
  margin-left: 0px;
}
</style>