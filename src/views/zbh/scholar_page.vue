<template>
  <div>
    <Topbar1></Topbar1>
    <div class="top">
      <img src="../../../src/img/unsplash_yapBRdPWxik.svg" style="width: 100vw">
      <div class="top_hello"><b>Hello</b></div>
      <div class="top_I_am"> I Am </div>
      <div class="top_scholar">Scholar</div>
    </div>
    <div>
      <testScolar :scholar-info="scholarInfo" :areas="areas" :counts="counts"></testScolar>
    </div>
    <div class="net_top">. 专家关系网络 .</div>
    <div>
      <testnet></testnet>
    </div>
    <div class="cloud_top">. 词云图 .</div>
    <div>
      <trycloud style="height: 40vh;position: absolute;top:220vh"></trycloud>
    </div>
    <div class="wenxian_top">. 已发表文献 .</div>
    <div style="position:absolute;left:25vw;height: 95vh;top:275vh;width: 50vw;">
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
              <img src="../../../src/img/yinhao.svg" style="width: 2vw;height: 2vh">
            </div>
            <div style="display: inline-block">
              {{item.numyin}}次被引
            </div>
          </div>
          <div style="display: inline-block;color: rgba(96, 96, 96, 0.69);margin-left: 3vw">
            <div style="display: inline-block;"><img src="../../../src/img/shoucang.svg" style="width: 2vw;height: 2vh"></div>
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
import Topbar1 from "@/components/topbar1";
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min.js";
import Trycloud from "@/views/zbh/trycloud2";
import Testnet from "@/views/zbh/test/testnet";
import testScolar from "@/views/testScolar";
export default {
  name: "scholar_page",
  components: {Testnet, Trycloud, Topbar1, testScolar},
  data(){
    return{
      num_exact_page:8,
      total: 1000,//返回的检索结果的总量
      total_page:0,
      //id: "A4261893083",
      id: window.localStorage.getItem('SID'),
      scholarInfo: {
        cited_by_count: 0,
        counts_by_year: [
          {
            cited_by_count: 0,
            works_count: "",
            year: ""
          }
        ],
        display_name: "Dharma Yanti",
        id: "A4220294553",
        ids: {},
        last_known_institution: null,
        most_cited_work: "IDENTIFIKASI SENYAWA ANTI MIKROBA EKSTRAK ETANOL BATANG BROTOWALI (Tinospra crispa (L.) TERHADAP Staphylococcus aureus, Bacillus substillis, DAN Candida albicans DENGAN ... (2022)",
        works_api_url: "https://api.openalex.org/works?filter=author.id:A4220294553",
        works_count: 1,
        x_concepts: [
        ]
      },

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
      ],
      areas: "",
      counts: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
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
  },
  mounted() {
    let that = this;
    console.log("id is "+this.id);
    that.$axios({
      method:'get',
      url:'/es/get',
      params:{
        id: "A4220294553"
      }
    }).then(
        response=> {
          // console.log("userinfo",response.data);
          this.scholarInfo = response.data.data;
          //console.log("get userInfo", this.scholarInfo);
          if(this.scholarInfo.last_known_institution===null){
            this.scholarInfo.last_known_institution ="No belonged institution";
          }
          console.log("get userInfo", this.scholarInfo);
          for (var i = 0; i<this.scholarInfo.x_concepts.length; i++) {
            this.areas = this.areas + this.scholarInfo.x_concepts[i].display_name;
            this.areas= this.areas + ", ";
          }
          var l = this.areas.length;
          var str = this.areas.substring(0, l-2)
          this.areas= str;
          console.log("areas", this.areas)

          for(var i = 0; i < this.scholarInfo.counts_by_year.length; i++) {
            this.counts[this.scholarInfo.counts_by_year[i].year-2013]=this.scholarInfo.counts_by_year[i].works_count;
          }
          console.log("counts",this.counts);
        }
    )
  },
}
</script>

<style scoped>
.top_hello{
  position: absolute;
  width: 71px;
  height: 42px;
  left: 684px;
  top: 121px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  /* identical to box height */
  color: #0352FF;
}
.top_I_am{
  position: absolute;
  width: 145px;
  height: 96px;
  left: 530px;
  top: 165px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  line-height: 96px;
  /* identical to box height */
  color: #FFFFFF;
}
.top_scholar{
  position: absolute;
  width: 712px;
  height: 93px;
  left: 736px;
  top: 165px;
  font-family: 'Leelawadee UI';
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  line-height: 93px;
  color: #FFFFFF;
}
.net_top{
  position: absolute;
  width: 196px;
  height: 36px;
  left: 645px;
  top: 135vh;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */
  color: #0352FF;
}
.cloud_top{
  position: absolute;
  width: 196px;
  height: 36px;
  left: 675px;
  top: 215vh;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */
  color: #0352FF;
}
.wenxian_top{
  position: absolute;
  width: 296px;
  height: 36px;
  left: 655px;
  top: 265vh;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */
  color: #0352FF;
}
</style>
