
<template>
  <div id="char2" ref="chart" :style="{ width: '100%', height: '78%' }"></div>
</template>
<script>
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min.js";

export default {
  props: ["concepts"],
  name: "WordCloudChart",
  data() {
    return {
      worddata: [
        {
          name: "creative",
          value: 15000,
        },
        {
          name: "absolute",
          value: 10081,
        },
        {
          name: "leader",
          value: 9386,
        },
        {
          name: "physics",
          value: 7500,
        },
        {
          name: "chemistry",
          value: 7500,
        },
        {
          name: "hr",
          value: 6500,
        },
        {
          name: "hr",
          value: 6500,
        },
        {
          name: "so great",
          value: 6000,
        },
        {
          name: "excellent",
          value: 4500,
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      console.log("=====>");
      console.log(this.concepts);
      this.worddata = new Array();
      for (var i = 0; i < this.concepts.length; i++) {
        this.worddata.push({
          id: this.concepts[i].id,
          name: this.concepts[i].display_name,
          value: this.concepts[i].score,
        });
      }
      this.initCharts(); //初始化
    }, 0);
  },
  beforeDestroy() {
    // if (!this.chart) {
    //   return;
    // }
    // this.chart.dispose();
    // this.chart = null;
  },
  // // 监听父组件传递的数据 concepts不为空时，才执行初始化
  // watch: {
  //   concepts: {
  //     handler: function (val, oldVal) {
  //       console.log("监听到父组件传值", this.concepts);
  //       this.initCharts(); //初始化
  //     },
  //     deep: true,
  //   },
  // },
  methods: {
    initCharts() {
      let a = this.$refs.chart;

      let myChart2 = this.$echarts.init(a);
      myChart2.setOption({
        title: {
          //text: "center"
        },
        backgroundColor: "white",//词云的背景颜色
        tooltip: {},

        series: [
          {
            type: "wordCloud",
            //用来调整词之间的距离
            gridSize: 10,
            // //用来调整字的大小范围

            sizeRange: [14, 60],
            // //用来调整词的旋转方向，，[0,0]--代表着没有角度，也就是词为水平方向，需要设置角度参考注释内容
            rotationRange: [-90, 90],
            // rotationRange: [ 0,90],
            // rotationRange: [0, 0],
            //随机生成字体颜色
            textStyle: {
              fontFamily: "sans-serif",
              fontWeight: "bold",
              // Color can be a callback function or a color string
              color: function () {
                // Random color
                return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                    ].join(",") +
                    ")"
                );
              },
            },
            emphasis: {
              focus: "self",

              textStyle: {
                shadowBlur: 10,
                shadowColor: "#333",
              },
            },
            //位置相关设置
            left: "center",
            top: "center",
            right: null,
            bottom: null,
            width: "200%",
            height: "200%",
            //数据
            data: this.worddata,
          },
        ],
      });
      //点击事件
      myChart2.on('click', function (params) {
        console.log(params.data.id);
      });
    },
  },
};
</script>
<style  scoped>
</style>

