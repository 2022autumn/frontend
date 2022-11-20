<template>
  <div class="all">
    <topbar2></topbar2>
    <div style="position: absolute;width:23.2vw;height: 88vh;left:5vw;top:11vh;">
    <el-card class="box-card" style="position: absolute;width:22vw;height: 108vh;background-color: rgba(99, 162, 247, 0.15);" shadow="hover">
      <img src="../img/Fill.svg" style="position: absolute;left:-0.5vw;top:1vh">
      <img src="../img/Funnel.svg" style="position: absolute;left:1.25vw;top:3.4vh">
      <div style="margin-left: 2.5vw"><b>排序条件</b></div>
      <el-checkbox v-model="checked1"><b>按匹配程度递减</b></el-checkbox>
      <el-checkbox v-model="checked2"><b>按被引用量递减</b></el-checkbox>
      <el-checkbox v-model="checked3"><b>按发表时间递减</b></el-checkbox>
      <el-divider></el-divider>
      <img src="../img/Fill.svg" style="position: absolute;left:-0.5vw;top:20vh">
      <img src="../img/Vector.svg" style="position: absolute;left:1.4vw;top:22.3vh">
      <div style="margin-left: 2.5vw"><b>发表年份</b></div>
      <div>
      <el-checkbox v-model="checked4">
        <div style="width: 5vw;display: inline-block">
          <el-input v-model="input1" placeholder="" size="mini"></el-input>
        </div>
        <div style="display: inline-block">
          <b>&nbsp;年</b>
        </div>
      </el-checkbox>
      </div>
      <div>
        <el-checkbox v-model="checked5">
          <div style="width: 5vw;display: inline-block">
            <el-input v-model="input2" placeholder="" size="mini"></el-input>
          </div>
          <div style="display: inline-block">
            <b>&nbsp;年&nbsp;&nbsp;~&nbsp;&nbsp;</b>
          </div>
          <div style="width: 5vw;display: inline-block">
            <el-input v-model="input3" placeholder="" size="mini"></el-input>
          </div>
          <div style="display: inline-block">
            <b>&nbsp;年</b>
          </div>
        </el-checkbox>
      </div>
      <div>
        <el-checkbox v-model="checked6">
          <div style="width: 5vw;display: inline-block">
            <el-input v-model="input4" placeholder="" size="mini"></el-input>
          </div>
          <div style="display: inline-block">
            <b>&nbsp;年之前</b>
          </div>
        </el-checkbox>
      </div>
      <el-divider></el-divider>
      <img src="../img/Fill.svg" style="position: absolute;left:-0.5vw;top:41vh">
      <img src="../img/wenhao.svg" style="position: absolute;left:1.4vw;top:43.2vh">
      <div style="margin-left: 2.5vw"><b>文献类型</b></div>
      <el-checkbox v-model="checked7"><b>学术期刊</b></el-checkbox>
      <el-checkbox v-model="checked8"><b>学位论文</b></el-checkbox>
      <el-checkbox v-model="checked9"><b>会议</b></el-checkbox>
      <el-checkbox v-model="checked10"><b>图书</b></el-checkbox>
      <el-checkbox v-model="checked11"><b>报纸</b></el-checkbox>
      <el-divider></el-divider>
      <img src="../img/Fill.svg" style="position: absolute;left:-0.5vw;top:57vh">
      <img src="../img/star.svg" style="position: absolute;left:1.4vw;top:59.4vh">
      <div style="margin-left: 2.5vw"><b>关键词</b></div>
      <el-checkbox v-model="checked12"><b>关键词一</b></el-checkbox>
      <el-checkbox v-model="checked13"><b>关键词二</b></el-checkbox>
      <el-checkbox v-model="checked14"><b>关键词三</b></el-checkbox>
      <el-divider></el-divider>
      <img src="../img/Fill.svg" style="position: absolute;left:-0.5vw;top:73vh">
      <img src="../img/jigou.svg" style="position: absolute;left:1.4vw;top:75.4vh">
      <div style="margin-left: 2.5vw"><b>机构</b></div>
      <el-checkbox v-model="checked15"><b>高校</b></el-checkbox>
      <el-checkbox v-model="checked16"><b>研究所</b></el-checkbox>
      <el-checkbox v-model="checked17"><b>企业</b></el-checkbox>
      <el-divider></el-divider>
      <div style="margin-left: 2.5vw"><b>领域</b></div>
      <el-checkbox v-model="checked18"><b>相关领域一</b></el-checkbox>
      <el-checkbox v-model="checked19"><b>相关领域二</b></el-checkbox>
      <el-checkbox v-model="checked20"><b>相关领域三</b></el-checkbox>
      <el-divider></el-divider>
      <div style="margin-left: 6.5vw;margin-top: -2vh"><v-btn style="background-color: #217BF4;" class="white--text">确认</v-btn></div>
    </el-card>
    </div>
    <div style="position:absolute;left:40vw;height: 88vh;top:11vh;width: 50vw;">
      <div v-for="item in items" style="width: 50vw;height:35vh;">
      <el-card  style="width: 50vw;height:30vh;background-color: whitesmoke" shadow="hover">
        <el-tag style="display: inline-block">{{item.type}}</el-tag>
        <div style="display: inline-block;font-size: large;">
          &nbsp;
          <b>
          {{item.title}}
          </b>
        </div>
        <div>
          <div style="display: inline-block;margin-top: 1vh;color: grey">
            {{item.author}}&nbsp;&nbsp;|
          </div>
          <div style="display: inline-block;color: grey">
            &nbsp;&nbsp;{{item.institution}}&nbsp;&nbsp;|
          </div>
          <div style="display: inline-block;color: grey">
            &nbsp;&nbsp;{{item.time}}
          </div>
        </div>
        <div style="font-size: small;color: grey">
          {{item.zhaiyao}}
        </div>
        <div style="margin-top: 2vh;display: inline-block">
          <div v-for="tags in item.tags" style="display: inline-block">
            <el-tag>{{tags}}</el-tag>
            &nbsp;
          </div>
        </div>
        <div style="display: inline-block;color: rgba(96, 96, 96, 0.69);margin-left: 19vw">
          <div style="display: inline-block;top:3vh">
          <img src="../img/yinhao.svg" style="width: 2vw;height: 2vh">
          </div>
          <div style="display: inline-block">
          {{item.numyin}}次被引
          </div>
        </div>
        <div style="display: inline-block;color: rgba(96, 96, 96, 0.69);margin-left: 3vw">
          <div style="display: inline-block;"><img src="../img/shoucang.svg" style="width: 2vw;height: 2vh"></div>
          <div style="display: inline-block">{{item.numyin}}次收藏</div>
        </div>
      </el-card>
      </div>
      <div class="block">
        <el-pagination
            layout="prev, pager, next"
            :total=this.total_page
            @current-change="handlechange"
            background
          >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar2 from "@/components/topbar2";
import Topbar1 from "@/components/topbar1";
export default {
  name: "search_outcome",
  components: {Topbar2, Topbar1},
  data(){
    return{
      checked1:false,
      checked2:false,
      checked3:false,
      checked4:false,
      checked5:false,
      checked6:false,
      checked7:false,
      checked8:false,
      checked9:false,
      checked10:false,
      checked11:false,
      checked12:false,
      checked13:false,
      checked14:false,
      checked15:false,
      checked16:false,
      checked17:false,
      checked18:false,
      checked19:false,
      checked20:false,
      input1:"",
      input2:"",
      input3:"",
      input4:"",
      input5:"",
      num_exact_page:8,
      total: 1000,//返回的检索结果的总量
      total_page:0,
      items:[
        {
            type:"期刊",
            title:"疫情冲击下2020年中国新经济形势与政策",
            author:"horik",
            time:"2020/9/23",
            institution:"北京航空航天大学",
            zhaiyao:"这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要",
            tags:[
               "数学",
                "物理",
                "化学",
            ],
            numyin:0,
            numstore:0,
        },
        {
          type:"期刊",
          title:"疫情冲击下2020年中国新经济形势与政策",
          author:"horik",
          time:"2020/9/23",
          institution:"北京航空航天大学",
          zhaiyao:"这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要",
          tags:[
            "数学",
            "物理",
            "化学",
          ],
          numyin:0,
          numstore:0,
        },
        {
          type:"期刊",
          title:"疫情冲击下2020年中国新经济形势与政策",
          author:"horik",
          time:"2020/9/23",
          institution:"北京航空航天大学",
          zhaiyao:"这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要",
          tags:[
            "数学",
            "物理",
            "化学",
          ],
          numyin:0,
          numstore:0,
        },
        {
          type:"期刊",
          title:"疫情冲击下2020年中国新经济形势与政策",
          author:"horik",
          time:"2020/9/23",
          institution:"北京航空航天大学",
          zhaiyao:"这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要",
          tags:[
            "数学",
            "物理",
            "化学",
          ],
          numyin:0,
          numstore:0,
        },
        {
          type:"期刊",
          title:"疫情冲击下2020年中国新经济形势与政策",
          author:"horik",
          time:"2020/9/23",
          institution:"北京航空航天大学",
          zhaiyao:"这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要",
          tags:[
            "数学",
            "物理",
            "化学",
          ],
          numyin:0,
          numstore:0,
        },
        {
          type:"期刊",
          title:"疫情冲击下2020年中国新经济形势与政策",
          author:"horik",
          time:"2020/9/23",
          institution:"北京航空航天大学",
          zhaiyao:"这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要",
          tags:[
            "数学",
            "物理",
            "化学",
          ],
          numyin:0,
          numstore:0,
        },
        {
          type:"期刊",
          title:"疫情冲击下2020年中国新经济形势与政策",
          author:"horik",
          time:"2020/9/23",
          institution:"北京航空航天大学",
          zhaiyao:"这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要",
          tags:[
            "数学",
            "物理",
            "化学",
          ],
          numyin:0,
          numstore:0,
        },
        {
          type:"期刊",
          title:"疫情冲击下2020年中国新经济形势与政策",
          author:"horik",
          time:"2020/9/23",
          institution:"北京航空航天大学",
          zhaiyao:"这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要这是一个摘要",
          tags:[
            "数学",
            "物理",
            "化学",
          ],
          numyin:0,
          numstore:0,
        },
      ]
    }
  },
  methods:{
      handlechange(page){//处理跳转，page为当前选中的页面
        //alert(page);
      }
  },
  created() {

    if(this.total%4===0){
      this.total_page = this.total/8*10;
    }
    else{
      this.total_page = (this.total/8+1)*10;
    }

    this.num_exact_page = this.items.length;
    var i;
    for(i=0;i<this.num_exact_page;i++){
      if(this.items[i].zhaiyao.length>100){//处理一下过长的摘要
        this.items[i].zhaiyao = this.items[i].zhaiyao.substring(0,100)+"...";
      }
    }
  }
}
</script>

<style scoped>
.all{
  width: 100vw;
  height: 300vh;
  background: linear-gradient(311.76deg, #D4E7FE -15.24%, #FFFFFF 78.85%);
}
.scroll-area::-webkit-scrollbar {
  width: 10px;
}

/* --- 滚动条里面的滚动块 --- */
.scroll-area::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px #eee;
  background: #eee;
}

/* --- 滚动条里面轨道 --- */
.scroll-area::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 10px;
  background: #FFEB3B;
  /* border: none;
  background: none; */
}

</style>
