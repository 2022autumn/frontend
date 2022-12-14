
<template>
  <div>
    <Topbar1></Topbar1>
    <div class="top">
      <img src="../../../src/img/unsplash_yapBRdPWxik.svg" style="width: 100vw">
      <div class="top_hello"><b>Hello</b></div>
      <div class="top_I_am"> I Am </div>
      <div class="top_scholar">Scholar</div>
    </div>
    <div v-if="empty" class="empty-page">
        404 未找到该学者
    </div>
    <div v-else>
      <div>
        <testScolar v-if="this.show" :scholar-info="scholarInfo" :areas="areas" :counts="counts" :counts2="counts2">
        </testScolar>
      </div>
      <div class="net_top">. 专家关系网络 .</div>
      <div>
        <testnet></testnet>
      </div>
      <div class="cloud_top">. 词云图 .</div>
      <div>
        <trycloud style="height: 40vh;position: absolute;top:220vh" v-if="is_ready" :concepts="scholarInfo.x_concepts"></trycloud>
      </div>
      <div class="wenxian_top">. 已发表文献 .</div>

    <div style="position:absolute;left:20vw;height: 75vh;top:275vh;width: 100vw;">
      <div v-for=" (item , index) in items" style="width: 50vw;height:240px;">
        <el-card v-if="index < item.lenth" class="outcome-card" style="width:60vw;height:228px; " shadow="hover"  >
              <el-tag class="item-type2" style="display: inline-block;vertical-align: middle;">{{item.type}}</el-tag>
              <div style="display: inline-block;font-size: large;">
                &nbsp;
                <b>
                  <div style="display: inline-block;" v-html="item.title"  @click="jdetail(item.id)"></div>
                </b>
              </div>

              <div v-if="is_mine || verified" style="display: inline-block;float: right;">
                <div style="display: inline-block;margin-right:2vh;float: right;" @click="paperDown(item.id)" >
                  <el-tooltip content="下移文章" placement="top" effect="light">
                    <img src="../../assets/Vector (2).svg"/>
                  </el-tooltip>
                </div>
                <div  style="display: inline-block;margin-right:2vh;float: right;" @click="paperUp(item.id)">
                  <el-tooltip content="上移文章" placement="top" effect="light">
                    <img src="../../assets/Vector (1).svg"/>
                  </el-tooltip>
                </div>
                <div  style="display: inline-block;margin-right:2vh;float: right;" >

                  <el-tooltip v-if="item.isTop==-1" content="置顶文章" placement="top" effect="light">
                    <img src="../../assets/Vector.svg" @click="paperTop(item)"/>
                  </el-tooltip>
                  <el-tooltip v-if="item.isTop==1" content="取消置顶" placement="top" effect="light">
                    <img src="../../assets/Vector (3).svg" @click="paperTopCancel(item)"/>
                  </el-tooltip>
                </div>

                <div v-if="item.pdf===0" style="display: inline-block;margin-right:2vh;margin-top:-1vh;float: right;" >
                  <el-upload
                    accept=".pdf"
                    :show-file-list="false"
                    slot="append"
                    ref="upload"
                    name="file"
                    :multiple="false"
                    action="htttps://ishare.horik.cn/api/"
                    :on-change="onChange"
                    :auto-upload="false"
                  >
                    <el-tag class="item-type3" style="display: inline-block;vertical-align: middle;" @click="setpdfid(item.id)">
                      上传原文
                    </el-tag>
                  </el-upload>
                </div>

                <div v-if="item.pdf===1" style="display: inline-block;margin-right:2vh;margin-top:-1vh;float: right;" >
                  <el-tag class="item-type4" style="display: inline-block;vertical-align: middle;" @click="delePdf(item.id)">
                      删除原文
                    </el-tag>
                </div>

              </div>

              <div>
                <div style="display: inline-block;margin-top: 1vh;color: grey" v-for="(aus,index) in item.authors">
                  <div style="display: inline-block" v-if="index<item.author.length-1"><b>{{aus}}</b>&nbsp;;&nbsp;&nbsp</div>
                  <div style="display: inline-block" v-if="index===item.author.length-1"><b>{{aus}}</b>&nbsp;&nbsp;&nbsp</div>
                </div>
                <div>
                <div style="display: inline-block; color: grey">
                  {{item.institution}}&nbsp;&nbsp;|
                </div>
                <div style="display: inline-block;color: grey">
                  &nbsp;&nbsp;{{item.time}}
                </div>
                </div>
              </div>
              <div style="font-size: small;color: grey">
                <!--{{item.zhaiyao}}-->
                <div style="display: inline-block;" v-html="item.zhaiyao"  @click="jdetail(item.id)"></div>
              </div>
              <div  style="margin-top: 2vh;display: inline-block">
                <div v-for="tags in item.tags" v-if="tags!==''" style="display: inline-block">
                  <el-tag>{{tags}}</el-tag>
                  &nbsp;
                </div>
              </div>

              <div style="display: inline-block;color: rgba(96, 96, 96, 0.69);">
                <div style="display: inline-block;top:3vh">
                <img src="../../img/yinhao.svg" style="width: 2vw;height: 2vh">
                </div>
                <div style="display: inline-block;">
                {{item.numyin}}次被引
                </div>
              </div>
              <div style="display: inline-block;color: rgba(96, 96, 96, 0.69); ">
                <div style="display: inline-block;">
                  <img src="../../img/shoucang.svg" style="width: 2vw;height: 2vh">
                </div>
                <div style="display: inline-block">{{item.numstore}}次收藏</div>
              </div>
            </el-card>

      </div>

      <el-row style="margin:auto; top:2vh">
        <el-col :span="3">
          <div>&nbsp</div>
        </el-col>
        <el-col :span="16">
            <div class="block">
              <el-pagination
                  layout="prev, pager, next"
                  :total=this.total_page
                  @current-change="handlechange"
                  :current-page=this.now_page
                  background
              >
              </el-pagination>
            </div>
        </el-col>
        <el-col :span="3">
          <div>&nbsp</div>
        </el-col>
      </el-row>


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
import PaperManage from "@/components/PaperManage";
export default {
  name: "scholar_page",
  components: {Testnet, Trycloud, Topbar1, testScolar,PaperManage},
  data(){
    return{
      is_ready:false,
      detail:"",
      num_exact_page:8,
      ture_len:5,
      total: 1000,//返回的检索结果的总量
      total_page:0,
      now_page:1,
      verified:false,
      is_mine:false,
      is_Display:false,
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
        // id: "A4220294553",
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
              "",
              "",
              "",
            ],
            numyin:0,
            numstore:0,
            id:"",
            authors:[],
            isTop:-1,
            pdf:0,
            lenth:5,
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
          id:"",
          authors:[],
          isTop:-1,
          pdf:0,
          lenth:5,
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
          id:"",
          authors:[],
          isTop:-1,
          pdf:0,
          lenth:5,
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
          id:"",
          authors:[],
          isTop:-1,
          pdf:0,
          lenth:5,
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
          id:"",
          authors:[],
          isTop:-1,
          pdf:0,
          lenth:5,
        },
      ],
      empty: false,
      show: false,
      areas: "",
      counts: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
      counts2: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
    }
  },
  methods:{
    setpdfid(id){
      console.log("setpdfid1",id);
      this.pdf_work_id=id;
      console.log("this.pdf_work_id",this.pdf_work_id);
    },
    onChange(file) {
        // 校验格式
        console.log("OnChange");
        if (['application/pdf'].indexOf(file.raw.type) == -1) {
            this.$message.error('请上传正确的pdf格式');
            return false;
        }

        const formData = new FormData();
        formData.append('PDF',file.raw);//file.file
        formData.append("work_id", this.pdf_work_id);
        formData.append("author_id", this.id);

        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        this.$axios.post("/scholar/works/upload", formData, config)
        .then(
              response=> {
                window.location.reload();
                this.$message({
                  type:"success",
                  message: "上传成功",
                })
          });
    },

    handlechange(page){//处理跳转，page为当前选中的页面
          this.now_page = page;
          console.log("this.now_page",page);
          //sessionStorage.setItem('now_page',JSON.stringify(page));
          //this.openFullScreen2();
          this.paperGet();
        },
    jdetail(id){
        // console.log("文章id为:");
        // console.log(id);
        window.localStorage.setItem('WID',id);
        window.open('/paper_details');
      },
      paperDown(id){
        // console.log("文章id为:");
        // console.log(id);
        //window.localStorage.setItem('WID',id);
        this.$axios({
            method:'post',
            url:'/scholar/works/modify',
            data:{//post请求这里是data
              author_id: this.id,
              work_id:id,
              direction:-1,

            }
        }).then(
            response=> {
              window.location.reload();
              this.$message({
                type:"success",
                message: "下移成功",
              })
        })
      },
      paperUp(id){
        // console.log("文章id为:");
        // console.log(id);
        //window.localStorage.setItem('WID',id);
        this.$axios({
            method:'post',
            url:'/scholar/works/modify',
            data:{//post请求这里是data
              author_id: this.id,
              work_id:id,
              direction:1,
            }
        }).then(
            response=> {
              window.location.reload();
              this.$message({
                type:"success",
                message: "上移成功",
              })
        })
      },
      paperTop(item){
        // console.log("文章id为:");
        // console.log(id);
        //window.localStorage.setItem('WID',id);
        this.$axios({
            method:'post',
            url:'/scholar/works/top',
            data:{//post请求这里是data
              author_id: this.id,
              work_id:item.id,
            }
        }).then(
            response=> {
              console.log("11111111111")
              console.log("paperTop isTop1",item.isTop);
              item.isTop=1;
              console.log("paperTop isTop2",item.isTop);
              window.location.reload();
              this.$message({
                type:"success",
                message: "置顶成功",
              })
        })
      },
      paperTopCancel(item){
        // console.log("文章id为:");
        // console.log(id);
        //window.localStorage.setItem('WID',id);
        this.$axios({
            method:'post',
            url:'/scholar/works/untop',
            data:{//post请求这里是data
              author_id: this.id,
              work_id:item.id,
            }
        }).then(
            response=> {
              console.log("222222222222")
              console.log("paperTopCancel isTop1",item.isTop);
              item.isTop=-1;
              console.log("paperTopCancel isTop2",item.isTop);
              window.location.reload();
              this.$message({
                type:"success",
                message: "取消置顶成功",
              })
        })
      },
      delePdf(id){
        const formData = new FormData();
        formData.append('author_id',this.id);//file.file
        formData.append("work_id", id);

        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        this.$axios.post("/scholar/works/unupload", formData, config)
        .then(
              response=> {
                window.location.reload();
                this.$message({
                  type:"success",
                  message: "删除原文成功",
                })
          });
      },
      paperGet(){
        //var page = JSON.parse(sessionStorage.getItem('now_page'));
        this.$axios({
            method:'post',
            url:'/scholar/works/get',
            data:{//post请求这里是data
              author_id: this.id,
              display:1,
              page:this.now_page,
              page_size:5,
            }
          }).then(
            response=> {
              console.log("response.data.data",response.data.data);
              var len = 0;
              len = response.data.data.length;
              //console.log("len",len);
              //console.log("response.data.data.pages",response.data.data.pages);
              //this.total_page = response.data.data.pages;
              //console.log("response.data.data.pages",this.total_page);
              for(var i=0;i<len;i++){
                //console.log("iiiii", i);
                this.items[i].pdf= response.data.data[i].isupdatepdf;
                this.items[i].id = response.data.data[i].id;
                this.items[i].zhaiyao = response.data.data[i].abstract;
                //console.log("zhaiyao", this.items[i].zhaiyao);
                if(this.items[i].zhaiyao.length>400){//处理一下过长的摘要
                  //console.log(this.items[i].zhaiyao);
                  this.items[i].zhaiyao = this.items[i].zhaiyao.substring(0,400)+"...";
                }
                var oldzhaiyao = "";
                oldzhaiyao = this.items[i].zhaiyao;
                if(this.items[i].zhaiyao!=="") {
                  if (this.items[i].zhaiyao === -1) {
                    this.items[i].zhaiyao = oldzhaiyao;
                  }
                }
                this.items[i].title = response.data.data[i].title;
                //console.log("title",this.items[i].title)
                  if(this.items[i].title.length>55){//处理一下过长的题目
                    //console.log(this.items[i].zhaiyao);
                    console.log("过长")
                    this.items[i].title = this.items[i].title.substring(0,55)+"...";
                  }
                  var oldtittle = "";
                  oldtittle = this.items[i].title;
                  if(this.items[i].title===-1){
                    this.items[i].title = oldtittle;
                  }
                  this.items[i].institution = response.data.data[i].host_venue.display_name;
                  if(this.items[i].institution===null){
                    this.items[i].institution = "无所属机构";
                  }
                  if(this.items[i].institution.length>50){
                    //console.log(this.items[i].zhaiyao);
                    this.items[i].institution = this.items[i].institution.substring(0,50)+"...";
                  }
                  this.items[i].time = response.data.data[i].publication_date;
                  for(var j=0;j<3&&j<response.data.data[i].concepts.length;j++){
                    //console.log("response.data.data.docs[i]._source.concepts[j].display_name",response.data.data[i].concepts[j].display_name)
                    //console.log("this.items[i].tags[j]",this.items[i]);
                    this.items[i].tags[j] = response.data.data[i].concepts[j].display_name;
                  }
                  this.items[i].type =  response.data.data[i].type;
                  if(this.items[i].type === null){
                    this.items[i].type = "unknown"
                  }
                  this.items[i].numyin = response.data.data[i].cited_by_count;
                  //console.log("response.data.data[i].Top",response.data.data[i].Top);
                  this.items[i].isTop=response.data.data[i].Top;
                  //console.log("1111 this.item[i].isTop",this.items[i].isTop);

                  if(response.data.data[i].authorships.length!==0) {
                    this.items[i].author = response.data.data[i].authorships[0].author.display_name;
                    var t = response.data.data[i].authorships.length;
                    if(t>4){
                      t=4;
                    }
                    //console.log("jjjjj",t);
                    for(var j=0;j<t;j++){
                      this.items[i].authors[j] = response.data.data[i].authorships[j].author.display_name;
                    }
                  }


                  //this.items[i].numstore = Math.ceil(Math.random()*100);
              }
            }

        )
      },


      beforeStudtUpload (file, type) {//可以获取上传的大小和类型
      const fileSuffix = file.name.substring(file.name.lastIndexOf('.') + 1)
      const whiteList = ['pdf']
       if (whiteList.indexOf(fileSuffix) === -1) {
        this.$message({
          message: '上传文件只能是 pdf',
          type: 'warning'
        })
        return false
       }
    },
      paperUpLoad(id,res){
        this.$axios({
            method:'post',
            url:'/scholar/works/upload',
            data:{//post请求这里是data
              author_id: this.id,
              work_id:id,
              PDF:res
            }
        }).then(
            response=> {
              this.$message({
                type:"success",
                message: "上传成功",
              })
        })
      }
  },
  mounted() {
    // const loading = this.$loading({
    //   lock: true,
    //   text: 'Loading',
    //   spinner: 'el-icon-loading',
    //   background: 'rgba(0, 0, 0, 0.7)'
    // });
    setTimeout(() => {
      this.show=true;
      //loading.close();
    }, 300);
    let that = this;
    console.log("id is "+this.id);
    that.$axios({
      method:'get',
      url:'/es/get2',
      params:{
        id: this.id,
        // id: "A4221478216"
        userid: window.localStorage.getItem("uid"),
      },
      headers: {
        'token': parseInt(window.localStorage.getItem('uid'))
      },
    }).then(
        response=> {
            console.log("is mine")
            console.log("userinfo",response.data);
            this.scholarInfo = response.data.data;
            this.verified = response.data.info.verified;
            this.is_mine=response.data.info.is_mine;
            console.log("verified",this.verified);
            console.log("is_mine",this.is_mine);
            // if(this.verified===ture && this.is_mine ===ture){
            //   this.is_Display = ture;
            // }
            // console.log("isDisplay",this.is_Display);
            if(this.scholarInfo.last_known_institution===null){
              this.scholarInfo.last_known_institution ="No belonged institution";
            }
            //console.log("get userInfo", this.scholarInfo);
            //获取领域字符串
            for (var i = 0; i<this.scholarInfo.x_concepts.length; i++) {
              this.areas = this.areas + this.scholarInfo.x_concepts[i].display_name;
              this.areas= this.areas + ", ";
            }
            var l = this.areas.length;
            var str = this.areas.substring(0, l-2)
            this.areas= str;
            //console.log("areas", this.areas)
            //获取近十年引用、发表
            for(var i = 0; i < this.scholarInfo.counts_by_year.length; i++) {
              if(this.scholarInfo.counts_by_year[i].works_count != 0) {
                this.counts[this.scholarInfo.counts_by_year[i].year-2013]=this.scholarInfo.counts_by_year[i].works_count;
              }
              if(this.scholarInfo.counts_by_year[i].cited_by_count != 0) {
                this.counts2[this.scholarInfo.counts_by_year[i].year-2013]=this.scholarInfo.counts_by_year[i].cited_by_count;
              }
            }
            //console.log("counts",this.counts);
            //
            this.is_ready = true;
        }

    ).catch(error=> {
      // console.log("error", error)
      // console.log("error", error.response.status)
      if(error.response.status === 404) {
        this.empty = true;
      }
    })
    // sessionStorage.setItem('now_page',JSON.stringify(1));
    // this.now_page=1;

    this.$axios({

            method:'post',
            url:'/scholar/works/get',
            data:{//post请求这里是data
              author_id: this.id,
              display:1,
              page:this.now_page,
              page_size:5,
            }
          }).then(
            response=> {
              //console.log("1111111111")
              //this.items =  response.data;
              console.log("ttttttt")
              console.log(response.data);
              //console.log("response.data.data",this.items);
              var len = 0;
              len = response.data.data.length;
              if(len<5){
                for(var i=0;i<5;i++){
                  this.items[i].lenth=len;
                }
              }
              console.log("len",len);
              this.total_page=response.data.total/5*10;
              console.log("response.data.pages",response.data.pages);
              //console.log("response.data.pages",this.total_page);
              console.log("response.data.data.pages",response.data.pages);
              console.log("response.data.data.pages",this.total_page);
              for(var i=0;i<len;i++){
                //console.log("iiiii", i);
                this.items[i].pdf= response.data.data[i].isupdatepdf;
                this.items[i].id = response.data.data[i].id;
                this.items[i].zhaiyao = response.data.data[i].abstract;
                //console.log("zhaiyao", this.items[i].zhaiyao);
                if(this.items[i].zhaiyao === ""){
                  this.items[i].zhaiyao = "This article has no abstract";
                }
                if(this.items[i].zhaiyao.length>400){//处理一下过长的摘要
                  //console.log(this.items[i].zhaiyao);
                  this.items[i].zhaiyao = this.items[i].zhaiyao.substring(0,400)+"...";
                }
                var oldzhaiyao = "";
                oldzhaiyao = this.items[i].zhaiyao;
                if(this.items[i].zhaiyao!=="") {
                  if (this.items[i].zhaiyao === -1) {
                    this.items[i].zhaiyao = oldzhaiyao;
                  }
                }
                this.items[i].title = response.data.data[i].title;
                //console.log("title",this.items[i].title)
                //console.log()
                  if(this.items[i].title.length>55){//处理一下过长的题目
                    //console.log(this.items[i].zhaiyao);
                    //console.log("过长")
                    this.items[i].title = this.items[i].title.substring(0,55)+"...";
                  }
                  var oldtittle = "";
                  oldtittle = this.items[i].title;
                  if(this.items[i].title===-1){
                    this.items[i].title = oldtittle;
                  }
                  this.items[i].institution = response.data.data[i].host_venue.display_name;
                  if(this.items[i].institution===null){
                    this.items[i].institution = "无所属机构";
                  }
                  if(this.items[i].institution.length>50){
                    //console.log(this.items[i].zhaiyao);
                    this.items[i].institution = this.items[i].institution.substring(0,50)+"...";
                  }
                  this.items[i].time = response.data.data[i].publication_date;
                  for(var j=0;j<3&&j<response.data.data[i].concepts.length;j++){
                    //console.log("response.data.data.docs[i]._source.concepts[j].display_name",response.data.data[i].concepts[j].display_name)
                    //console.log("this.items[i].tags[j]",this.items[i]);
                    this.items[i].tags[j] = response.data.data[i].concepts[j].display_name;
                  }
                  this.items[i].type =  response.data.data[i].type;
                  if(this.items[i].type === null){
                    this.items[i].type = "unknown"
                  }
                  this.items[i].numyin = response.data.data[i].cited_by_count;
                  //console.log("response.data.data[i].Top",response.data.data[i].Top);
                  this.items[i].isTop=response.data.data[i].Top;
                  //console.log("1111 this.item[i].isTop",this.items[i].isTop);


                  if(response.data.data[i].authorships.length!==0) {
                    this.items[i].author = response.data.data[i].authorships[0].author.display_name;
                    var t = response.data.data[i].authorships.length;
                    if(t>4){
                      t=4;
                    }
                    //console.log("jjjjj",t);
                    for(var j=0;j<t;j++){
                      this.items[i].authors[j] = response.data.data[i].authorships[j].author.display_name;
                    }
                  }
              }
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
.empty-page {
  height: 150px;
  line-height: 120px;
  text-align: center;
  justify-content: center;
  vertical-align: center;
  color: #0E84F4;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
}
.outcome-card {
    margin-top: 10px;

    width: 90%;
    height: 550px;

    background: #ffffff;
    box-shadow: 3px 3px 3px 3px rgba(107, 106, 106, 0.25);
    border-radius: 7px;
  }
  .item-type {
  margin: auto;
  padding:0.5vw,0.2vh;
  background: #217bf4;
  box-shadow: 0px 7px 22px -6px rgba(0, 72, 168, 0.34);
  border-radius: 9px;

  font-weight: 700;
  font-size: 15px;
  line-height: 4vh;
  text-align: center;
  letter-spacing: 0.01em;

  color: #ffffff;
}
.item-type2 {
  margin: auto;

  background: #217bf4;
  box-shadow: 0px 7px 22px -6px rgba(0, 72, 168, 0.34);
  border-radius: 9px;
  vertical-align:middle;
  font-weight: 700;
  font-size: 15px;
  line-height: 4vh;
  text-align: center;
  letter-spacing: 0.01em;

  color: #ffffff;
}
.item-type3 {
  margin: auto;

  background: #15BA84;
  box-shadow: 0px 7px 22px -6px rgba(3, 85, 54, 0.34);
  border-radius: 9px;
  vertical-align:middle;
  font-weight: 700;
  font-size: 15px;
  line-height: 4vh;
  text-align: center;
  letter-spacing: 0.01em;

  color: #ffffff;
}

.item-type4 {
  margin: auto;

  background: #e66a5a;
  box-shadow: 0px 7px 22px -6px rgba(3, 85, 54, 0.34);
  border-radius: 9px;
  vertical-align:middle;
  font-weight: 700;
  font-size: 15px;
  line-height: 4vh;
  text-align: center;
  letter-spacing: 0.01em;

  color: #ffffff;
}
</style>
