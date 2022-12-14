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
      <el-tabs v-model="activeName" ref="tabs" @tab-click="handleClick">
        <el-tab-pane label="过去十年发表" name="first">
          <div class="scholar_img" v-if="activeName=='first'" :lazy="true">
            <!--      <div class="echart" id="mychart" :style="myChartStyle"></div>-->
            <barGraph class="graph" ref="graph1" :ycounts="counts" :xcounts="xData"/>
          </div>
        </el-tab-pane>
        <el-tab-pane label="过去十年引用" name="second" :lazy="true">
          <div class="scholar_img" v-if="activeName=='second'">
            <!--      <div class="echart" id="mychart" :style="myChartStyle"></div>-->
            <div id="mychart" :style="myChartStyle"></div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="scholar_domain">
      <div>相关领域</div>
      <div class="domain_set">
        <div class="domain_boxs" v-for="(item,index) in domainList" :key="index">
          <el-popover
              placement="bottom"
              width="280"
              height="500"
              trigger="hover"
              :open-delay=1100
              :close-delay=200
          >
            <div style="height: 20px">
              <div style="margin-left: 10px;cursor: default;float: left"><b>领域描述</b></div>
              <div class="follow_keyword" v-if="item.islike===false" @click="concern(item)">关注</div>
              <div class="unfollow_keyword" v-else @click="concern(item)">已关注</div>
            </div>
            <div style="width: 90%;left:50%;position:absolute;margin-left:-45%;height: 1px;margin-top:10px;background-color:rgba(217, 215, 215, 0.58)"></div>
            <div style="margin-top: 20px;width: 90%;word-break: break-word;text-align: left;margin-left: 5%;cursor: default">{{detail}}</div>
            <div v-if="ifhasImage" style="width: 100%;text-align: center;margin-top: 10px">
              <img :src="image_thumbnail_url" alt="">
            </div>
          <div class="domain-box" slot="reference" @mouseenter="getDetail(item.id)">
<!--            <img src="../../assets/label.png" class="label">-->
            <div class="domain">{{ item.display_name }}</div>
          </div>
          </el-popover>
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
import barGraph from "@/components/barGraph";
export default {
  name: "scholar_p3",
  components: { barGraph},
  props: {
    scholarInfo: {
      type: Object
    },
    domainList: [],
    counts: [],
    counts2: [],
  },
  data() {
    return {
      xData: "",
      yData: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 10],
      myChartStyle: { float: "left", width: "100%", height: "120px"}, //图表样式
      newYData: [],
      activeName: 'first',
      detail: "origin",
      image_thumbnail_url: "",
      ifhasImage: false,
      uid:null,
    }
  },
  watch:{
    // counts:function(newData,oldData){
    //   console.log("newdata",newData)  //newData就是orderData
    //   this.newYData = newData;
    // },
    // 'counts': {
    //   handler (newData,oldData) {
    //     console.log("newdata22",newData)
    //     this.newYData = newData;
    //   },
    //   deep: true,
    //   immediate: true,
    // },
    'counts2': {
      handler (newData,oldData) {
        // console.log("newdata2",newData)
        this.newYData = newData;
      },
      deep: true,
      immediate: true,
    }
  },
  mounted() {
    this.uid=window.localStorage.getItem("uid");
    if(this.xData === ""){
      this.xData = [ '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];
    }
    this.initEcharts();
  },
  created() {
    console.log("oops")
    console.log(this.domainList)
  },
  methods: {
    test(item){
      console.log("waht")
      console.log(item)
    },
    concern(item) {
      if (this.uid != null) {
        if (item.islike === false) {
          item.islike = true
        } else if (item.islike === true) {
          item.islike = false
        }
        console.log(item.display_name)
        this.$axios({//注意是this.$axios
          method: 'post',
          url: '/scholar/concept',
          headers: {
            //token:3,
            token: this.uid,
          },
          data: {//get请求这里是params
            concept_id: item.id,
            //user_id: window.localStorage.getItem('SID'),
          }
        }).then(
            response => {
              console.log(response.data);
              console.log(response)
            }
        )
      } else {
        this.$message.error("请登录后再操作！");
        console.log("未登录");
      }
    },
    getDetail(id) {
      this.$axios({//注意是this.$axios
        method: 'get',
        url: '/es/get2',
        params: {
          id: id,
        }
      }).then(
          response => {
            this.ifhasImage=false;
            this.detail="";
            setTimeout(() =>{
              console.log(response.data.data)
              this.detail = response.data.data.description;
              if (response.data.data.image_thumbnail_url !== null) {
                this.ifhasImage=true
                this.image_thumbnail_url = response.data.data.image_thumbnail_url;
              }else{
                this.ifhasImage=false;
                this.image_thumbnail_url ="";
              }
            },400)
          }
      )
    },
    handleClick(tab, event) {
      // console.log(tab, event);
      this.activeName=tab.name;
      this.$nextTick(() => {
        if(this.activeName === 'second') {
          this.initEcharts();
          echarts.getInstanceByDom(this.$refs.graph2).resize()
        } else if(this.activeName === 'first') {
          echarts.getInstanceByDom(this.$refs.graph1).resize()
        }
      })
    },
    initEcharts() {
      // 基本柱状图
      const option = {
        grid: {
          x: 0,
          y: 17,
          x2: 0,
          y2: 0
        },
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
          confine: true,  //解决浮窗被截断问题
          formatter : function(params){
            // console.log("params",params);//打印断点，会看到自己想要的后台数据
            if(params[0].data < 1) {
              var num = 0;
            }
            else {
              var num = params[0].data;
            }

            let html=`<div style="height:auto;width: 50px;">
                ${params
                .map(
                  (
                    item
                  ) => `<div style="font-size:14px;color:#808080;display:flex;align-items:center;line-height:2;">

            ${item.axisValue}
          </div>`
            )
            .join("")}
                <div style="display:flex;align-items:center;justify-content:space-between;font-size:14px;font-weight: bold;color:#333;padding-top:4px;margin-bottom:7px;line-height:1;">
            <span style="display:inline-block;margin-right:2px;border-radius:7px;width:7px;height:7px;background-color:#217BF4;"></span>
            <span>${num}</span>
          </div>
            </div>`

              return html;
          }
        },
        xAxis: {
          data: this.xData,
          axisLabel:{ show: false },
          axisTick: {		//x轴刻度线
            show: false
          },
          splitLine:{
            show: false
          },
          axisLine:{     //x轴坐标轴，false为隐藏，true为显示
            "show":false
          },
        },
        yAxis: {
          splitLine:{
            show: false
          },
          axisLabel:{
            show: false
          },
          axisTick: {		//x轴刻度线
            show: false
          },
        },
        series: [
          {
            type: "bar", //形状为柱状图
            data: this.newYData,
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius:[2, 2, 2, 2],
                color: function (params) {
                  // console.log("parapms",params);
                  if(params.data < 1) {
                    return "#DFE7F6"
                  } else {
                    return "#217BF4"
                  }
                },
              }
            },
            axisLine:{     //x轴坐标轴，false为隐藏，true为显示
              "show":false
            },
          }
        ],
        // color: "#217BF4"
      };
      const myChart = echarts.init(document.getElementById("mychart"));
      myChart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
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
  position: relative;
  margin-top: 30px;
  height: 195px;
  width: 100%;
}
.scholar_img {
  height: 140px;
  /*width: 100%;*/
  width: 386px;
}
.graph {
  height: 100%;
  /*width: 100%;*/
  width: 386px;
}
.scholar_domain {

}
.scholar_buttons {
  margin-top: 25px;
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
  padding-right: 12px;
  flex-wrap: wrap;
  cursor: default;
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
.graph. .canvas {
  width: 100% !important;
}
.follow_keyword {
  background-color: #458CEB;
  width: 50px;
  float: left;
  margin-left: 110px;
  margin-top: -2px;
  height: 24px;
  color: #FFFFFF;
  line-height: 24px;
  vertical-align: center;
  text-align: center;
  font-size: 12px;
  letter-spacing: 1px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(27, 83, 158, 0.25);
}

.follow_keyword:hover {
  box-shadow: 0px 2px 4px rgba(27, 83, 158, 0.25);
  background-color: #82B7FF;
}

.unfollow_keyword {
  background-color: #F5F8FC;
  width: 58px;
  float: left;
  margin-left: 105px;
  margin-top: -2px;
  height: 24px;
  color: #72819B;
  line-height: 24px;
  vertical-align: center;
  text-align: center;
  font-size: 12px;
  letter-spacing: 1px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(118, 131, 191, 0.25);
}

.unfollow_keyword:hover {
  box-shadow: 0px 1px 4px rgba(118, 131, 191, 0.25);
  background-color: #D0DCEC;
}
</style>
