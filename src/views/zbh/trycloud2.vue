
<template>
  <div id="char2" ref="chart" :style="{ width: '100%', height: '78%' }"></div>
</template>
<script>
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min.js";

export default {
  name: "WordCloudChart",
  data() {
    return {
      worddata: [
        {
          name: "老婆产假",
          value: 15000,
        },
        {
          name: "产假",
          value: 10081,
        },
        {
          name: "身体不舒服",
          value: 9386,
        },
        {
          name: "生病",
          value: 7500,
        },
        {
          name: "休假休息",
          value: 7500,
        },
        {
          name: "亲人去世",
          value: 6500,
        },
        {
          name: "腹泻",
          value: 6500,
        },
        {
          name: "头痛",
          value: 6000,
        },
        {
          name: "朋友婚礼",
          value: 4500,
        },
        {
          name: "亲戚来了",
          value: 3800,
        },
        {
          name: "办理证件",
          value: 3000,
        },
        {
          name: "家里有事",
          value: 2500,
        },
        {
          name: "老婆坐月子",
          value: 2300,
        },
        {
          name: "急性阑尾炎",
          value: 2000,
        },
        {
          name: "呕吐",
          value: 1900,
        },
        {
          name: "感冒",
          value: 1800,
        },
        {
          name: "拉肚子",
          value: 1700,
        },
        {
          name: "小孩生病",
          value: 1600,
        },
        {
          name: "搬家",
          value: 1500,
        },
        {
          name: "工作疲惫",
          value: 1200,
        },
        {
          name: "喜酒",
          value: 1100,
        },
        {
          name: "堵车",
          value: 900,
        },
        {
          name: "睡过头",
          value: 800,
        }
      ],
    };
  },
  mounted() {
    setTimeout(() => {
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
  methods: {
    initCharts() {
      console.log(this.worddata);

      let a = this.$refs.chart;

      let myChart2 = this.$echarts.init(a);
      myChart2.setOption({
        title: {
          //text: "center"
        },
        backgroundColor: "#E6E6FA",
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
        alert(params.name);
      });
    },
  },
};
</script>
<style  scoped>
</style>

