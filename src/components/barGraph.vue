<template>
  <div class="echart" id="mychart" ref="ch" :style="myChartStyle"></div>
</template>
<script>
import * as echarts from "echarts";

export default  {
  name: "baiGraph",
  props: {
    xcounts: [],
    ycounts: [],
  },
  data() {
    return {
      xData: [ '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
      yData: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 10],
      myChartStyle: { float: "left", width: "100%", height: "120px"}, //图表样式
      newYData: []
    }
  },
  watch:{
    // counts:function(newData,oldData){
    //   console.log("newdata",newData)  //newData就是orderData
    //   this.newYData = newData;
    // },
    'ycounts': {
      handler (newData,oldData) {
        // console.log("newdata",newData)
        this.yData = newData;
        this.initEcharts()
      },
      deep: true,
      immediate: true,
    },
    'xcounts': {
      handler (newData,oldData) {
        // console.log("newdata",newData)
        this.xData = newData;
        this.initEcharts();
      },
      deep: true,
      immediate: true,
    }
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
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

            let html=`<div style="height:auto;width: 50px;position:relative;z-index: 1000">
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
            data: this.yData,
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
      // const myChart = this.$echarts.init(this.$refs.ch);
      // document.getElementById('mychart').removeAttribute('_echarts_instance_');
      let myChart = echarts.init(document.getElementById("mychart"));
      //为了好看放了一个加载
      myChart.showLoading();
      // 利用setTimeout延迟获取和赋值图表
      setTimeout(()=>{
        myChart.hideLoading();
        myChart.setOption(option, true);
      },2000)


      // myChart.setOption(option, true);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
  }

}
</script>