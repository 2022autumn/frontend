<template>
  <div>
    <Topbar1 ref="topbar"></Topbar1>
    <div class="paper-detail">

      <div class="main">
        <div class="paper-header">
          <div class="title">
            <span class="title-txt" v-html="paper.paperTitle">
<!--              {{ this.paper.paperTitle }}-->
              <div class="paper-type">{{ this.paper.type }}</div>
            </span>
          </div>
          <div class=" info1 authors"
               v-for="(item,index) in this.paper.authors"
               :key="index"
               style="cursor: pointer;display: inline-block; position: relative;"
          >
            <div class="names" @click="jscholar(index)">
              {{ item.author.display_name }};
            </div>
            {{ "\xa0\xa0" }}
            <!--<span>作者名字1； 作者名字2； 作者名字3；</span>-->
            <!--<span>{{this.paper.authors[0].author.display_name}}</span>-->
          </div>
          <div class=" info1 location">
            <!--<span>北京航空航天大学xx实验室</span>-->
            {{ this.paper.institution }}
          </div>
          <div class="info1">
            <div class="info2 time">
              <!--发表时间：2022年01月06日-->
              {{ this.paper.date }}
            </div>
            <div class="info2 divide">
              |
            </div>
            <div class="info2 book">
              发表期刊：{{ this.paper.host_venue.display_name }}
            </div>
            <div class="info2 divide">
              |
            </div>
            <div class="info2 cite" >
              被引次数：{{ this.paper.cited_counts }}
            </div>
            <div class="citethis" v-on:click="createCitation">
              <img src="../assets/paperDetailsImg/citation.png" style="margin-top: 5px;margin-left: 7px;float: left">
              <div class="citeword">生成引用</div>
            </div>
          </div>

          <div style="clear: both"></div>
          <div class="buttons">
            <!--            <el-button class="original" icon="el-icon-my-origin">-->
            <el-button class="original" v-if="this.paper.hasIds" @click="jumpPaper">
              <img src="../assets/paperDetailsImg/original.png"
                   style="margin-left: 0vw">
              原文地址
            </el-button>
            <el-button class="original2" v-else disabled>
              <img src="../assets/paperDetailsImg/original.png"
                   style="margin-left: 0vw">
              暂无原文地址
            </el-button>
            <el-popover
                placement="bottom"
                width="150"
                height="500"
                trigger="hover"
                v-if="this.paper.haspdf"
            >
              <div v-for="(item,index) in this.paper.pdf_urls">
              <div class="pdf_button"  @click="downloadPDF(index)">
                pdf地址{{index+1}}
              </div>
              </div>
            <el-button class="original3"  @click="downloadPDF(0)" slot="reference" >
              <img src="../assets/paperDetailsImg/pdf.png"
                   style="margin-left: 0vw">
              下载pdf
            </el-button>
            </el-popover>

            <!--被收藏的次数-->
            <div class="like2" @click="addTagdialog = true" style="cursor:pointer;">
              {{ this.isCollectionTxt }}
            </div>
            <!--是否被收藏的样式-->
            <div class="like1" v-model="key" style="cursor:pointer;">
              <span class="iconfont">
                  <i v-if="!isCollection" class="el-icon-star-off" :key="0" @click="addTagdialog = true"></i>
                  <i v-else class="el-icon-star-on" :key="1" @click="addTagdialog = true"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="abstract">
            <div class="abstract-sider"></div>
            <div class="abstract-title">
              摘要Abstract
            </div>
            <div class="abstract-body">
              {{ this.paper.abstract }}
            </div>
          </div>
        </div>
        <div class="ref">
          <reference ref="ref"/>
        </div>
        <!--      <div class="relate">-->
        <!--        <related />-->
        <!--      </div>-->
        <div class="review">
          <div class="commend-title">评论区 Comments</div>
          <div class="comment-tools">
            <div class="total-comments">共 {{ this.comment_num }} 条评论</div>
          </div>
          <div class="commends" v-if="comment_num === 0">
            <div class="cards">
              <div class="empty">
                快来发表评论吧~
              </div>
            </div>
          </div>
          <div class="commends">
            <div class="cards" v-for="(item,index) in command" :key="index">
              <div class="user-info">
                <el-avatar class="commenter-avator" :src=strcatHeadshot(item)>
                </el-avatar>
                <div class="left-info">
                <span class="commenter-id">
                  {{ item.username }}
                  <!--                  一个不重要的用户id-->
                </span>
                  <span class="comment-time">{{ dateTime(item.time) }}</span>
                  <span class="commenter-info">
                  {{ item.userinfo }}
                </span>
                </div>

              </div>
              <div class="comment-content">
                {{ item.content }}
                <!--              <div class="comment-divider"></div>-->
              </div>
              <div style="clear: both;"></div>
            </div>
          </div>
          <span class="commending-title">发表评论</span>
          <div class="conmmending">
          <span style="width: 100%">
            <div class="avators">
            <el-avatar :src="this.photourl"></el-avatar>
          </div>
          <div class="right_comment">
            <el-input
                class="input_command"
                type="textarea"
                placeholder="请输入评论内容"
                v-model="myComment">
            </el-input>

          </div>
          </span>
            <span class="btn">
            <el-button class="submit-btn" @click="pushCommand">发表</el-button>
          </span>
          </div>
        </div>
      </div>
      <div class="right-sider">
        <div class="recent">
          <div class="title-cited">近年引用</div>
          <div class="title-cited-en">Citation Time Distribution</div>
          <barGraph2 class="graph" ref="graph1" :ycounts="counts" :xcounts="xData"/>
          <div class="line"></div>
          <div class="year-2013">{{ this.xData[0] }}</div>
          <div class="year-2022">{{this.xData[9]}}</div>
        </div>
        <div class="key">
          <keyword/>
        </div>

        <div class="relate">
          <related/>
        </div>
      </div>
    </div>
    <el-dialog
        title="添加到我的收藏"
       :visible.sync="addTagdialog"
       width="30%"
    >
    <div>
      <span>
        <div class="box-set">
          <div class="keyword-box" v-for="(item,index) in tags" :key="index">
            <div class="kk keyword" v-if="item.isCollect === false"  @click="addTagToFile(item)">{{item.tag_name}}</div>
            <div class="kk keyword1" v-else  @click="removeCollection(item)">{{item.tag_name}}</div>
<!--            <div class="keyword1"  v-if="item.islike===true" @click="concern(item)">{{item.display_name}}</div>-->
<!--            <div class="keyword"  v-else @click="concern(item)">{{item.display_name}}</div>-->
          </div>
        </div>
<!--        <el-select value="" v-model="selectedTag">-->
<!--          <el-option-->
<!--              v-for="item in tags"-->
<!--              :key="item.tag_id"-->
<!--              :label="item.tag_name"-->
<!--              :value="item.tag_id"-->
<!--              @click="this.selectedTag = item.tag_id">-->
<!--          </el-option>-->
<!--        </el-select>-->
      </span>
      <span slot="footer" class="dialog-footer" style="padding-left: 80%;">
        <el-button type="primary" @click="addTagdialog = false" class="el-buttons">确 定</el-button>
      </span>
    </div>
    </el-dialog>
    <el-dialog
        title="生成引用格式"
        :visible.sync="createCite"
        width="30%"
    >
      <div>
        <div class="copyText">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Plain Text" name="first" style="display: inline-block; position: relative;text-align: left" v-html="this.citation"></el-tab-pane>
            <el-tab-pane label="MLA" name="second">
              <span v-html="this.MLA">
              </span>
              <span style="font-style: italic">
                {{this.MLAM}}
              </span>
              <span>
                {{this.MLAE}}
              </span>
            </el-tab-pane>
            <el-tab-pane label="APA" name="third">
              <span v-html="this.apa">
              </span>
              <span style="font-style: italic">
                {{this.apam}}
              </span>
              <span>
                {{this.apae}}
              </span>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="copy-button">
          <el-button type="primary" icon="el-icon-copy-document" class="el-buttons" style="color: #FFFFFF;margin-top: 30px;margin-left: 280px;"  @click="clickCopy()">复制</el-button>
        </div>

      </div>
    </el-dialog>
  </div>
</template>
<script>
// import leftBody from "../component/paperDetails/main.vue"
import Note from "@/components/xyj/note";
import Keyword from "@/components/xyj/keyword";
import Reference from "@/components/xyj/reference";
import Related from "@/components/xyj/related";
import dateTime from "@/composables/calculationTime";
import Topbar1 from "@/components/topbar1.vue";
import * as echarts from "echarts";
import barGraph2 from "@/components/barGraph2";

export default {
  name: "paperDetails",
  data() {
    return {
      tags: [],
      myTag: "",
      myTagCnt: 0,
      addTagdialog: false,//添加到我的收藏 控制dialog
      createCite: false,
      selectedTag: "",
      paper: {
        paperTitle: "",
        paperFrom: "",
        paperUnit: "",
        height: "",
        authors: [],
        abstract: "",
        cited_counts: 0,
        host_venue: "",
        institution: "",
        cited_by_count: "",
        ids: {},
        hasIds: false,
        url: "",
        doi: "",
        type: "unknown",
        pdf_ids: {},
        pdf_links:{},
        haspdf: false,
        pdf_url: "",
        pdf_urls:{},
        pdfGT1:"false",
      },
      author_name: '',
      author_id: 0,
      isCollection: false,
      isCollectionTxt: "已收藏",
      notCollectionTxt: "收藏",
      command: {},
      space: ";",
      comment_num: 0,
      myComment: "",
      dateTime,
      author_len: 0,
      citation:"",
      counts:[0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
      xData: "",
      yData: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
      myChartStyle: { float: "left", width: "90%", height: "120px"}, //图表样式
      BibTex:"",
      MLA:"",
      MLAM:"",
      MLAE:"",
      apa:"",
      apam:"",
      apae:"",
      activeName:"first",
      cited:"",
      key:"",
      photourl: "https://ishare.horik.cn/api/media/headshot/default.jpg"
    };
  },
  components: {
    Reference,
    Keyword,
    Note,
    Related,
    Topbar1,
    barGraph2,
  },
  watch:{
    'isCollection': {
      handler (newData,oldData) {
        console.log("newdata2",newData)
        this.isCollection = newData;
      },
      deep: true,
      immediate: true,
    }
  },
  methods: {
    get_data(){
      this.$axios({//注意是this.$axios
        method:'get',
        url:'/user/info',
        params:{//get请求这里是params
          user_id:parseInt(window.localStorage.getItem('uid'))
        }
      }).then(
          response =>{
            console.log("得到个人信息1")
            console.log(response.data);
            this.photourl = response.data.data.head_shot;
            this.photourl = 'https://ishare.horik.cn/api/media/headshot/'+this.photourl;
          }
      )
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    onCollect(item) {
      if(this.isCollection === true) {
        this.removeCollection(item);
      } else {
        this.addTagdialog = true;
      }
    },
    getTagList() {
      this.$axios({//注意是this.$axios
        method:'post',
        url:'/social/tag/paperTagList',
        data: {//get请求这里是params
          user_id: parseInt(window.localStorage.getItem('uid')),
          paper_id: window.localStorage.getItem('WID')
        },
      }).then(
          response =>{
            console.log("tags", response.data);
            this.tags = response.data.data;
            for(var i = 0; i < this.tags.length; i++) {
              if(this.tags[i].isCollect == true) {
                this.myTagCnt++;
              }
            }
            this.updateTxt();
          }
      )
    },
    addTagToFile(item) {
      let that = this;
      that.$axios({//注意是this.$axios
        method:'post',
        url:'/social/tag/collectPaper',
        data:{//get请求这里是params
          paper_id:window.localStorage.getItem('WID'),
          tag_id: item.tag_id,
          user_id: parseInt(window.localStorage.getItem('uid')),
        }
      }).then(res => {
        this.myTagCnt++;
        console.log("cnt", this.myTagCnt);
        this.updateTxt();
        this.getTagList()
        this.$message({
          type: "success",
          message: res.data.msg,
          customClass:'messageIndex'
        });
      }).catch(err => {
        console.log(err);
        this.$message({
          message: '好像出了点问题诶',
          type: 'error'
        });
      });
    },
    removeCollection(item) {
      let that = this;
      that.$axios({//注意是this.$axios
        method:'post',
        url:'/social/tag/cancelCollectPaper',
        data:{//get请求这里是params
          paper_id:window.localStorage.getItem('WID'),
          tag_id: item.tag_id,
          user_id: parseInt(window.localStorage.getItem('uid')),
        }
      }).then(res => {
        this.getTagList()
        this.myTagCnt--;
        console.log("cnt", this.myTagCnt);
        this.updateTxt();
        this.$message({
          type: "success",
          message: res.data.msg,
          customClass:'messageIndex'
        });
      }).catch(err => {
        console.log(err);
        this.$message({
          message: '好像出了点问题诶',
          type: 'error'
        });
      });
    },
    strcatHeadshot(item) {
      console.log("headshot", "https://ishare.horik.cn/api/media/headshot/" + item.headshot)
      return "https://ishare.horik.cn/api/media/headshot/" + item.headshot;
    },
    jscholar(index) {
      // window.localStorage.setItem('SID',this.author_id);
      console.log(this.paper.authors[index].author.id)
      window.localStorage.setItem('SID', this.paper.authors[index].author.id);
      window.open('/scholar_page');
    },

    jumpPaper() {
      window.open(this.paper.url, '_blank');
      // this.$router.push(this.paper.url);
    },
    downloadPDF(index) {
      console.log("allPDFS");
      console.log(this.paper.pdf_urls);
      console.log("index is "+index);
      window.open(this.paper.pdf_urls[index], '_blank');
    },
    downloadExportFile(blob, tagFileName) {
      let downloadElement = document.createElement('a')
      let href = blob
      if (typeof blob == 'string') {
        downloadElement.target = '_blank'
      } else {
        href = window.URL.createObjectURL(blob) //创建下载的链接
      }
      downloadElement.href = href
      downloadElement.download =
          tagFileName +
          //下载后文件名
          document.body.appendChild(downloadElement)
      downloadElement.click() //点击下载
      document.body.removeChild(downloadElement) //下载完成移除元素
      if (typeof blob != 'string') {
        window.URL.revokeObjectURL(href) //释放掉blob对象
      }
    },

    getCommentList() {
      this.$axios({//注意是this.$axios
        method: 'post',
        url: '/social/comment/list',
        data: {//get请求这里是params
          // paper_id: "W2914747780",
          paper_id: window.localStorage.getItem('WID'),
          //user_id: window.localStorage.getItem('SID'),
          user_id: parseInt(window.localStorage.getItem('uid')),
        }
      }).then(
          response => {
            console.log("get comment", response.data)
            this.command = response.data.data.comments;
            this.comment_num = this.command.length;
          }
      )
    },
    updateTxt() {
      if(this.myTagCnt > 0) {
        this.isCollectionTxt = "已收藏";
        this.isCollection = true;
      } else {
        this.isCollectionTxt = "收藏";
        this.isCollection = false;
      }
    },
    pushCommand() {
      if(window.localStorage.getItem('iflogin') === "0") {
        this.$refs.topbar.open_login();
        this.$message.error("尚未登陆");
      } else {
        this.$axios({//注意是this.$axios
          method: 'post',
          url: '/social/comment/create',
          data: {//get请求这里是params
            content: this.myComment,
            // paper_id: "W2914747780",
            user_id: parseInt(window.localStorage.getItem('uid')),
            paper_id: window.localStorage.getItem('WID'),
            //user_id: window.localStorage.getItem('SID'),
          },
          headers: {
            'token': parseInt(window.localStorage.getItem('uid'))
          },
        }).then(
            response => {
              console.log(response.data);
              this.myComment = "";
              this.$message({
                type: "success",
                message: response.data.msg,
                customClass: 'messageIndex'
              })
              this.getCommentList();
            }
        ).catch(error=> {
          console.log("error", error)
          console.log("error", error.response.status)
          if(error.response.status === 502) {
            this.$refs.topbar.open_login();
            this.$message.error(error.msg);
          }
        })
      }
    },
    createCitation(){
      this.createCite=true;
      this.citation="";
      this.BibTex="";
      this.MLAM="";
      this.MLAE="";
      //this.BibTex=this.BibTex+"@"+this.paper.type+"{"+window.localStorage.getItem('WID')+","+"\n"+"author={";
      this.MLA="";
      this.apa="";
      this.apae="";
      this.apam="";
      console.log("authors "+this.paper.authors);
      for(var i=0;i<this.paper.authors.length;i++){
        this.citation=this.citation+this.paper.authors.at(i).author.display_name+", ";

      }
      /*for(var i=0;i<this.paper.authors.length-1;i++){
        this.BibTex=this.BibTex+this.paper.authors.at(i).author.display_name+" and"
      }
      if(this.paper.authors.length>=1){
        this.BibTex=this.BibTex+this.paper.authors.at(this.paper.authors.length-1).author.display_name+"},\n";
      }*/

      if(this.paper.authors.length<=3){
        for(var i=0;i<this.paper.authors.length-1;i++){
          this.MLA=this.MLA+this.paper.authors.at(i).author.display_name+" and "
        }
        if(this.paper.authors.length>=1){
          this.MLA=this.MLA+this.paper.authors.at(this.paper.authors.length-1).author.display_name+",";
        }
      }else{
        this.MLA=this.MLA+this.paper.authors.at(0).author.display_name+",et al."
      }
      this.MLA=this.MLA+"\""+this.paper.paperTitle+".\""
      this.MLAM=this.MLAM+this.paper.host_venue.display_name;
      this.MLAE="("+this.paper.publication_year+")."

      if(this.paper.authors.length>=4){
        for(var i=0;i<this.paper.authors.length-2;i++){
          this.apa=this.apa+this.paper.authors.at(i).author.display_name+","
        }
        this.apa=this.apa+this.paper.authors.at(this.paper.authors.length-2).author.display_name+"&";
        this.apa=this.apa+this.paper.authors.at(this.paper.authors.length-1).author.display_name+".";
      }else{
        for(var i=0;i<this.paper.authors.length-1;i++){
          this.apa=this.apa+this.paper.authors.at(i).author.display_name+","
        }
        this.apa=this.apa+this.paper.authors.at(this.paper.authors.length-1).author.display_name+".";
      }
      this.apa+="("+this.paper.publication_year+")."+this.paper.paperTitle+"."
      this.apam+=this.paper.host_venue.display_name+".";
      this.paper.doi=this.paper.doi.replace("https://doi.org/","");
      if(this.paper.doi!=null){
        this.apae="doi:"+this.paper.doi;
        this.MLAE+="doi:"+this.paper.doi
      }


      console.log("first "+this.citation);
      this.citation=this.citation+"\""+this.paper.paperTitle+"\" in "+this.paper.host_venue.display_name+", "+this.paper.date;
      console.log("second "+this.citation);
      this.cited=this.citation;
    },
    clickCopy() {
      let msg;
      msg=this.cited;
      const save = function(e) {
        e.clipboardData.setData('text/plain', msg)
        e.preventDefault() // 阻止默认行为
      }
      document.addEventListener('copy', save) // 添加一个copy事件
      document.execCommand('copy') // 执行copy方法
      this.$message({ message: '复制成功', type: 'success' })
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
            data: this.counts,
            barWidth: '80%',
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
    handleClick(tab, event) {
      this.activeName=tab.name;
      if(this.activeName==="first"){
        this.cited=this.citation;
      }else if(this.activeName==="second"){
        this.cited=this.MLA+this.MLAM+this.MLAE;
      }else{
        this.cited=this.apa+this.apam+this.apae;
      }
      console.log(tab, event);
    }

  },
  // 挂载时获取
  mounted() {
    console.log("iflogin",window.localStorage.getItem('iflogin'))
    if(window.localStorage.getItem('iflogin') === "0") {
      this.photourl="https://ishare.horik.cn/api/media/headshot/default.jpg";
    }else {
      this.get_data();
    }
    this.getTagList();
    let height = this.$refs.ref.offsetHeight;  //100
    if(this.xData === ""){
      this.xData = [ '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];
    }
    this.$axios({//注意是this.$axios
      method: 'get',
      url: '/es/get2',
      params: {//get请求这里是params
         id: window.localStorage.getItem('WID')
      //  id: "W2152458990"
      }
    }).then(
        response => {
          console.log(response.data.data);
          this.paper.paperTitle = response.data.data.title
          this.paper.type = response.data.data.type
          this.paper.authors = response.data.data.authorships
          // var len = Math.min(3, this.paper.authors.length)
          // for(var i = 0; i < len; i++) {
          //   this.author_name += this.paper.authors[i].author.display_name
          //   if(i != len-1)
          //     this.author_name += ', '
          // }
          // if (len < this.paper.authors.length) {
          //   this.author_name += "..."
          // }
          // this.author_name= this.paper.authors[0].author.display_name//存储作者名称
          // this.author_id = this.paper.authors[0].author.id//存储作者id
          this.paper.cited_string=response.data.data.cited_string
          this.paper.doi=response.data.data.doi
          this.paper.date = response.data.data.publication_date
          this.paper.abstract = response.data.data.abstract
          this.paper.cited_counts = response.data.data.cited_by_count
          this.paper.publication_year=response.data.data.publication_year
          if (response.data.data.host_venue.display_name != null) {
            this.paper.host_venue = response.data.data.host_venue
          } else {
            this.paper.host_venue = new Object();
            this.paper.host_venue.display_name = "Unknown";
          }
          if (response.data.data.type != null) {
            this.paper.type = response.data.data.type
          } else {
            this.paper.type = "unknown";
          }
          this.paper.ids = response.data.data.ids
          this.paper.doi = response.data.data.doi
          if (this.paper.doi != null) {
            this.paper.hasIds = true;
            this.paper.url = this.paper.doi;
          } else if ('pmid' in this.paper.ids) {
            this.paper.hasIds = true;
            this.paper.url = this.paper.ids.pmid;
          } else {
            this.paper.hasIds = false;
          }
          this.paper.pdf_ids = response.data.data.open_access;
          this.paper.pdf_links=response.data.data.pdflinks;
          if(this.paper.pdf_links.length!==0){
            this.paper.haspdf=true;
           // this.paper.pdf_url=this.paper.pdf_links[0];
            this.paper.pdf_urls=this.paper.pdf_links;
            console.log(this.paper.pdf_urls);

          }
          /*
          if ('oa_url' in this.paper.pdf_ids) {
            this.paper.haspdf = response.data.data.open_access.is_oa;
            if (this.paper.haspdf) {
              this.paper.pdf_url = response.data.data.open_access.oa_url;
            }
          }
          */
          console.log("this.paper.pdf_ids "+this.paper.pdf_ids.oa_url);
          console.log("author institution is:")
          console.log(this.paper.authors[0].institutions)
          if (this.paper.authors[0].institutions.length === 0) {
            this.paper.institution = "No belonged institution";
          } else {
            this.paper.institution = this.paper.authors[0].institutions[0].display_name;
          }
          this.paper.counts_by_year=response.data.data.counts_by_year
          console.log("year"+this.paper.counts_by_year)
          console.log(this.paper.counts_by_year)
          for(var i = 0; i < this.paper.counts_by_year.length; i++) {
            if(this.paper.counts_by_year[i].cited_by_count != 0) {
              this.counts[this.paper.counts_by_year[i].year-2013]=this.paper.counts_by_year[i].cited_by_count;
            }
          }
          this.initEcharts();
          //echarts.getInstanceByDom(this.$refs.graph1).resize()
        }
    )
    this.getCommentList();
  },

};
</script>
<style lang="scss" scoped>

.paper-detail {

  //paddong-top: 11vh;
  display: flex;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background: linear-gradient(311.76deg, #D4E7FE, #FFFFFF);
  /*padding-bottom: 87px;*/
}

.main {
  margin-top: 4vh;
  //margin-top: 10vh;
  //padding-left: 44px; //44px
  padding-left: 5.84vw;
  //display: flex;
  width: 61vw;
}

.paper-header {
  width: 100%;
  //padding-top: 61px;
  padding-top: 7.92vh;
  padding-left: 0.45vw;
  padding-bottom: 2.5vh;
  height: auto;
  border-bottom: 0.5px solid rgba(171, 169, 169, 0.51);
}

.title {

}

.title-txt {
  display: inline-block;
  margin-top: 0;
  text-align: left;
  font-family: Inter;
  font-size: 2.32vw;
  font-weight: 600;
  line-height: 5.71vh;
  width: 100%;
  //width: 53.37vw;
  vertical-align: center;
  justify-content: center;
}

.paper-type {
  //margin-top: 5px;
  display: inline-block;
  position: relative;
  padding-bottom: 5px;
  width: auto;
  height: 3.38vh;
  padding-bottom: 6px;
  padding-left: 0.7vw;
  padding-right: 0.7vw;
  border-radius: 8px;
  box-shadow: 0px 7px 22px -6px rgba(0, 72, 168, 0.34);
  background-color: #217BF4;
  color: #FFFFFF;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 3.38vh;
  font-family: Inter;
}

.info1 {
  margin-top: 1.04vh;
  text-align: left;
  min-height: 3.38vh;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 3.38vh;
  background: transparent !important;
  background-color: transparent !important;
}

.names {
  display: inline;
  float: left;
  color: #778192;
}

.names:hover {
  text-decoration: underline;
  color: #53a2e3;
}

.info2 {
  float: left;
  margin-top: 1.04vh;
  text-align: left;
  height: auto;
  min-height: 3.38vh;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 2.08vh;
  line-height: 3.38vh;
  margin-right: 1.81vw;
  padding: 0 0 0 0;
}

.info2 #outer:after {
  content: ".";
  height: 0;
  visibility: hidden;
  display: block;
  clear: both;
}

.buttons {
  width: 100%;
  margin-top: 0vh;
  padding-top: 2.86vh;
  height: 8.19vh;
  vertical-align: center;
  justify-content: center;
  line-height: 5.19vh;
}

.like1 {
  float: right;
  margin-left: 2vw;
  color: #FD9B40;
}

.like2 {
  float: right;
  margin-left: 0.5vw;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  //color: #FD9B40;
}

.el-icon-my-origin {
  background: url('~@/assets/paperDetailsImg/Vector.png') center no-repeat;
}

.original {
  float: left;
  align-items: center;
  vertical-align: center;
  justify-content: center;
  display: inline-block;
  width: 8.03vw;
  height: 4.93vh;
  background: #217BF4;
  box-shadow: 0px 7px 22px -6px rgba(0, 72, 168, 0.34);
  border-radius: 14px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 4.93vh;
  color: #FFFFFF;
}

.original2 {
  background-color: #C8C9CC;
  color: #FFFFFF;
  float: left;
  align-items: center;
  vertical-align: center;
  justify-content: center;
  display: inline-block;
  width: 9.53vw;
  height: 4.93vh;
  box-shadow: 0px 7px 22px -6px rgba(0, 72, 168, 0.34);
  border-radius: 14px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 4.93vh;
}

.original3 {
  float: left;
  margin-left: 1vw;
  align-items: center;
  vertical-align: center;
  justify-content: center;
  display: inline-block;
  width: 8.03vw;
  height: 4.93vh;
  background: #D2585F;
  box-shadow: 0px 7px 22px -6px rgba(118, 62, 65, 0.34);
  border-radius: 14px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 4.93vh;
  color: #FFFFFF;
}

.original img {
  float: left;
  padding-left: 10px;
  margin-top: 6px;
}

.original2 img {
  float: left;
  padding-left: 10px;
  margin-top: 6px;
}

.original3 img {
  float: left;
  padding-left: 10px;
  margin-top: 6px;
}

.right-buttons {
  float: right;
  height: 6.75vh;
  width: 12.91vw;
  margin-right: 1.29vw;
  display: flex;
  justify-content: flex-end;
}

.right-button1 {
  border: none;
  height: 6.25vh;
  width: 3.94vw;
  //height: 52px;
  //width: 61px;
  align-items: center;
  justify-content: center;
  background: url('~@/assets/paperDetailsImg/image0.png');
  background-size: 100% 100%;
}

.right-button2 {
  border: none;
  height: 6.25vh;
  width: 3.94vw;
  background: url('~@/assets/paperDetailsImg/image0 (1).png');
  background-size: 100% 100%;
}

.right-button3 {
  border: none;
  height: 6.15vh;
  width: 3.94vw;
  background: url('~@/assets/paperDetailsImg/image0 (2).png');
  background-size: 100% 100%;
}

.right-button4 {
  border: none;
  height: 6.15vh;
  width: 4.24vw;
  background: url('~@/assets/paperDetailsImg/image0 (3).png');
  background-size: 100% 100%;
}

.content {
  width: 100%;
  margin-top: 5.19vh;
  text-align: left;
  position: relative;
  clear: both;
}

.abstract {
  text-align: left;
  margin-top: 4.15vh;
  width: 56.86vw;
  overflow: hidden;
  filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.25));
  box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.25);
}

.abstract-sider {
  float: left;
  margin-top: 0vh;
  margin-bottom: 0vh;
  flex: 1;
  width: 0.97vw;
  //height: 100%;
  //height: 353px;
  background: rgba(67, 127, 236, 0.66);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  //margin-right: 38px;
  margin-bottom: -10000px;
  padding-bottom: 10000px;
}

.abstract-title {
  padding-top: 1.69vh;
  text-align: left;
  height: 5.06vh;
  padding-left: 4.45vw;
  margin-top: 1.69vh;
  margin-bottom: 3.77vh;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 3.38vh;
  letter-spacing: 0.02em;
}

.abstract-body {
  text-align: left;
  width: 54.02vw;
  padding-bottom: 3.77vh;
  padding-left: 4.45vw;
}

.row {
  background: url("~@/assets/paperDetailsImg/Vector (1).png");
  background-size: 100% 100%;
  left: 2.29%;
  right: 96.79%;
}

.review {
  float: left;
  display: block;
  //width: 100%;
  min-height: 37vh;
  width: 56.92vw;
  margin-top: 6.49vh;
  padding-top: 3.64vh;
  padding-left: 2vw;
  padding-bottom: 4.41vh;
  margin-bottom: 4.41vh;
  background: linear-gradient(289.09deg, rgba(233, 235, 246, 0.58) 8.18%, rgba(232, 239, 252, 0.68) 42.83%, rgba(240, 242, 247, 0.68) 70.06%, rgba(228, 231, 251, 0.34) 102.01%);
  box-shadow: 0px 0px 8px #C1C9F0;
  border-radius: 12px;
}

.commend-title {
  text-align: left;
  height: 3.38vh;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 3.38vh;
}

.comment-tools {
  margin-left: 0;
  margin-right: 0;
  width: 100%;
  margin-top: 1.95vh;
  height: 3.38vh;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 3.38vh;
  /* identical to box height, or 186% */

  letter-spacing: 0.02em;

  color: #818181;
}

.total-comments {
  float: left;
}

.filter-comments {
  display: inline-block;
  margin-left: 24.53vw;
  margin-right: 2.78vw;
}

.rank-comments {
  display: inline-block;
  margin-left: 39.53vw;
  margin-right: 0.97vw;
}

.commends {
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  margin-top: 7px;
  height: auto;
  //height: 350px;
  max-height: 350px;
  width: 51.83vw;
}

::-webkit-scrollbar {
  width: 7px;
  height: 18px;
  border-radius: 8px;
}

::-webkit-scrollbar-thumb {
  width: 7px;
  height: 20px;
  background-color: #E8E8E8;
  border-radius: 8px;
}

.cards {
  position: relative;
  margin-top: 10px;
  display: inline-block;
  overflow: hidden;
  width: 51.83vw;
  height: auto;
  min-height: 135px;
  //height: 24.41vh;
  padding-left: 1.48vw;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(180, 180, 180, 0.25);
  border-radius: 8px;
}

.user-info {
  float: left;
  position: absolute;;
  height: 7.79vh;
  width: 47.31vw;
}

.commenter-avator {
  float: left;
  display: inline-block;
  height: 5.32vh;
  width: 2.65vw;
}

.left-info {
  height: 7.79vh;
  //width: 28vw;
  width: 230px;
  width: 43.7vw;
  float: left;
  display: inline;
  margin-left: 0.9vw;
}

.commenter-id {
  position: relative;
  display: inline-block;
  width: 45%;
  height: 3.38vh;
  margin-left: 0.9vw;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 3.38vh;
}

.commenter-info {
  float: left;
  position: relative;
  margin-left: 0.9vw;
  height: 3.38vh;
  width: 100%;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 3.38vh;
  /* identical to box height, or 217% */
  padding-bottom: 10px;
  margin-bottom: 10px;
  letter-spacing: 0.02em;

  color: #7D7D7D;
}

.comment-time {
  position: relative;
  width: auto;
  //display: flex;
  float: right;
  text-align: right;
  //margin-right: 2.58vw;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 3.38vh;
  /* identical to box height, or 186% */

  letter-spacing: 0.02em;

  color: #8A8A8A;
}

.comment-content {
  display: flex;
  position: absolute;
  width: 47.87vw;
  height: auto;
  height: 80px;
  line-height: 26px;
  overflow: hidden;
  word-wrap: break-word;
  text-justify: distribute;
  word-break: break-all;
  min-height: 30px;;
  margin-top: 8.61vh;
  margin-bottom: 20px;
  //margin-left: 0.74vw;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 26px;
}

.comment-divider {
  position: relative;
  width: 100%;
  height: 0px;
  margin-top: 2.5vh;
  //top: 5px;
  border-bottom: 1.4px solid rgba(217, 215, 215, 0.58);
}

.commending-title {
  display: flex;
  text-align: left;
  width: 5.49vw;
  height: 3.38vh;
  margin-top: 4.67vh; //4.67vh
  margin-bottom: 1.95vh;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 2.6vh;
  line-height: 3.38vh;
}

.conmmending {
  position: relative;
  margin-top: 1.95vh;
  padding-top: 3.12vh;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(180, 180, 180, 0.25);
  border-radius: 8px;
  width: 51.83vw;
  //min-height: 19.35vh;
  min-height: 22vh;
}

.avators {
  display: inline-block;
  float: left;
  width: 5.07vw;
  height: 100%;
  margin-top: 2.08vh;
  margin-left: 1.48vw;
}

.right-comment {
  display: inline-block;
  float: left;
  margin-left: 0.32vw;
}

.input_command {
  width: 42.05vw;
  height: 11.35vh;
  border: 1.4px solid rgba(198, 198, 198, 0.6);
  border-radius: 8px;
}

.btn {
  height: 3.64vh;
  width: 100%;
}

.submit-btn {
  float: right;
  margin-right: 2.90vw;
  margin-top: 1.8vh;
  width: 6.33vw;
  height: 3.64vh;
  line-height: 3.64vh;
  background: linear-gradient(94.95deg, #288CD6 -43.46%, rgba(108, 155, 247, 0.56) 168.08%);
  box-shadow: 0px 0px 6px rgba(153, 166, 213, 0.57);
  border-radius: 5px;
  color: #FFFFFF;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
}

.right-sider {
  display: flex;
  float: right;
  clear: both;
  margin-right: 5.16vw;
  margin-left: 6.71vw;
  //padding-top: 83px;
  width: 100%;
  display: table-cell;
  vertical-align: middle;
  flex-direction: column;
}

.key {
  width: 100%;
  height: 100%;
  height: auto;
}

.ref {
  display: block;
  float: left;
  margin-top: 40px;
  width: 100%;
  height: 383px;
  margin-right: 0vw;
}

.relate {
  display: block;
  float: left;
  width: 100%;
  margin-top: 800px;
  //height: 383px;
  margin-right: 0vw;
}

.notes {
  width: 100%;
  height: auto;
  margin-top: 60vh;
  //margin-bottom: 10vh;
  clear: both;
}

.empty {
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
.box-set{
  display: flex;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  //padding-left:10px ;
  overflow-y:scroll;
  overflow-x: hidden;
  max-height: 265px;
  padding-bottom: 50px;
  align-items: flex-start;
  align-content: flex-start;
}
::-webkit-scrollbar {

  width: 7px;
  height: 18px;
  border-radius: 8px;
}
::-webkit-scrollbar-thumb {
  width: 7px;
  height: 20px;
  background-color: #E8E8E8;
  border-radius: 8px;
}
.keyword-box{
  display: flex;
  padding-top: 12px;
  padding-left: 20px;
  flex-wrap: wrap;
  align-items: flex-start;
}
.keyword{
  border-radius: 2px;
  transition: 0.5s;
  display: flex;
  left: 15px;
  padding-top: 6px;
  padding-bottom: 4px;
  padding-left: 15px;
  padding-right: 18px;
  background: #F5F8FC;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  align-items: center;
  justify-content: center;
  /* identical to box height, or 144% */
  letter-spacing: 0.04em;
  color: #858FA0;
  cursor:pointer;
}
.kk:hover {
  box-shadow: 0px 0px 8px #C1C9F0;
}
.keyword1{
  border-radius: 2px;
  transition: 0.5s;
  display: flex;
  left: 15px;
  padding-top: 6px;
  padding-bottom: 4px;
  padding-left: 15px;
  padding-right: 18px;
  background: rgba(67, 127, 236, 0.66);
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  align-items: center;
  justify-content: center;
  /* identical to box height, or 144% */
  letter-spacing: 0.04em;
  color: #F5F8FC;
  cursor:pointer;
}
</style>
<style>
.el-input__inner {
  border: none !important;
}

.original {
  padding: 0 2px 2px 0 !important;
}

.original2 {
  padding: 0 2px 2px 0 !important;
  border: none;
}

.original2 .el-button.is-disabled, .el-button.is-disabled:focus, .el-button.is-disabled:hover {
  background-color: #C8C9CC !important;
  color: #FFFFFF !important;
}

.original3 {
  padding: 0 2px 2px 0 !important;
}
.pdf_button{
  width: 100%;
  height: 36px;
  cursor: pointer;
  text-align: center;
  line-height: 36px;
  vertical-align: center;
  letter-spacing: 1px;
  color: #6D6D6D;
}
.pdf_button:hover{
  background-color: #F5F8FC;
}
.underline{
  width: 100%;
  height: 2px;
  background-color: #2eddf4;
}
.submit-btn {
  padding: 0 2px 2px 0 !important;
}

.el-textarea__inner {
  border: none;
  height: 10.35vh;
}
.el-scrollbar .el-scrollbar__wrap {
  max-height: 400px;
  /*height: 400px;*/
}
.el-menu-vertical-demo .el-submenu__icon-arrow el-icon-arrow-down{
  display: none !important;
  content: "" !important;
  width: 0px;
}
.el-menu-vertical-demo .el-submenu__icon-arrow {
  display: none !important;
}
.dialog-footer .el-button--primary {
  color: white !important;
}
.citethis{
  background: #D5DFF2;
  box-shadow: 0px 2px 22px rgba(144, 148, 177, 0.25);
  border-radius: 6px;
  width: 97px;
  height: 28px;
  margin-top: 4px;
  margin-left: 5px;
  float: left;
  cursor: pointer;
}
.citethis:hover{
  background: #D5DFF2;
  box-shadow: 0px 2px 7px rgba(144, 148, 177, 0.25);
  border-radius: 6px;
  width: 97px;
  height: 28px;
  margin-top: 4px;
  margin-left: 5px;
  float: left;
  cursor: pointer;
}
.citeword{
  font-family: 'inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  float: left;
  color: #7B7D8B;
  letter-spacing: 1px;
  margin-top: 6px;
  margin-left: 4px;
}
.recent{
  float:right;
  margin-top:96px;
  position: absolute;
  width: 392px;
  height: 230px;
  background: #FFFFFF;
  box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}
.title-cited{
  position: relative;
  width: 120px;
  height: 26px;
  left: 20px;
  top: 20px;

  font-family:Poppins;
  font-style: normal;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.06em;
}
.title-cited-en{
  position: relative;
  width: 210px;
  height: 52px;
  left: 150px;
  top: 0px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  /* or 162% */

  letter-spacing: 0.02em;

  color: #928E8E;

}
.graph{
  left: 20px;
  top:-17px;
}
.year-2013{
  position: relative;
  width: 30px;
  height: 26px;
  left: 23px;
  top: -10px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  /* identical to box height, or 186% */


  color: #928E8E;

}
.year-2022{
  position: relative;
  width: 30px;
  height: 26px;
  left: 339px;
  top: -10px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  /* identical to box height, or 186% */


  color: #928E8E;

}
.line{
  position: relative;
  width: 370px;
  height: 0px;
  left: 15px;
  top:101px;
  border-bottom: 3px solid rgba(217, 215, 215, 0.58);
  transform: rotate(0.09deg);
}
.el-buttons{

}
.copy-button{
  position: relative;
  left: 35px
}
.el-dialog__body{
  margin-top: -30px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 60px;
}
</style>
