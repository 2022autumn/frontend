<template >
  <div class="paper-detail">
    <div class="main">
      <div class="paper-header">
          <div class="title">
            <span class="title-txt">
              {{ this.paper.paperTitle }}
              <div class="paper-type">{{ this.paper.type }}</div>
            </span>
          </div>
          <div class=" info location">
            <!--<span>北京航空航天大学xx实验室</span>-->
            {{this.paper.institution}}
          </div>
          <div class=" info authors" @click="jscholar" style="cursor: pointer">
            <!--<span>作者名字1； 作者名字2； 作者名字3；</span>-->
            <!--<span>{{this.paper.authors[0].author.display_name}}</span>-->
            {{this.author_name}}
          </div>
          <div class="info">
            <div class="info2 time">
              <!--发表时间：2022年01月06日-->
              {{this.paper.date}}
            </div>
            <div class="info2 divide">
              |
            </div>
            <div class="info2 book">
              发表期刊：{{ this.paper.host_venue.display_name }}
            </div>
            <div class="info2 divide">

            </div>
            <div class="info2 cite">
              被引次数：{{ this.paper.cited_counts }}
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

            <!--是否被收藏的样式-->
            <div class="like1" v-model="key">
              <span class="iconfont">
                  <i v-if = "!isCollection" class="el-icon-star-off" :key="0" @click="onCollection"></i>
                  <i v-else class="el-icon-star-on" :key="1" @click="onCollection"></i>
              </span>
            </div>
            <!--被收藏的次数-->
            <div class="like2" v-if="isCollection">
              <span class="iconfont">&#xe663;</span>
              {{ this.isCollectionTxt }}
            </div>
            <div class="like2" v-else>
              {{ this.notCollectionTxt }}
            </div>
            <!--            <div class="right-buttons">-->
<!--              <el-button class="right-button1"></el-button>-->
<!--              <el-button class="right-button2"></el-button>-->
<!--              <el-button class="right-button3"></el-button>-->
<!--              <el-button class="right-button4"></el-button>-->
<!--            </div>-->
          </div>
        </div>
      <div class="content">
        <div class="abstract">
          <div class="abstract-sider"></div>
          <div class="abstract-title">
            摘要Abstract
          </div>
          <div class="abstract-body">
            {{this.paper.abstract}}
          </div>
        </div>
      </div>
      <div class="ref">
        <reference ref="ref"/>
      </div>
      <div class="relate">
        <related />
      </div>
      <div class="review">
        <div class="commend-title">评论区  Comments</div>
        <div class="comment-tools">
          <div class="total-comments">共 5 条评论</div>
<!--          <el-dropdown>-->
<!--            <span class="filter-comments">-->
<!--              筛选条件<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
<!--            </span>-->
<!--            <el-dropdown-menu slot="dropdown">-->
<!--              <el-dropdown-item>黄金糕</el-dropdown-item>-->
<!--              <el-dropdown-item>狮子头</el-dropdown-item>-->
<!--              <el-dropdown-item>螺蛳粉</el-dropdown-item>-->
<!--            </el-dropdown-menu>-->
<!--          </el-dropdown>-->
          <el-dropdown>
            <span class="rank-comments">
              排序条件<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>发布时间</el-dropdown-item>
              <el-dropdown-item>发布用户</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="commends">
          <div class="cards">
            <div class="user-info">
              <el-avatar class="commenter-avator">

              </el-avatar>
              <div class="left-info">
                <span class="commenter-id">
                  一个不重要的用户id
                </span>
                  <span class="commenter-info">
                  个性签名
                </span>
              </div>
              <span class="comment-time">10.17.2022, 19:27</span>
            </div>
            <div class="comment-content">
              The antenna equation also solves other fundamental problems.
              <div class="comment-divider"></div>
            </div>
            <div class="reply">

            </div>
          </div>
        </div>
        <span class="commending-title">发表评论</span>
        <div class="conmmending">
          <div class="avators">
            <el-avatar></el-avatar>
          </div>
          <div class="right_comment">
            <el-input
                class="input_command"
                placeholder="请输入评论内容">
            </el-input>
            <el-button class="submit-btn">发表</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="right-sider">
      <div class="recent">

      </div>
      <div class="key">
        <keyword />
      </div>

      <div class="notes">
        <note />
      </div>
    </div>
  </div>
</template>
<script>
// import leftBody from "../component/paperDetails/main.vue"
import Note from "@/components/xyj/note";
import Keyword from "@/components/xyj/keyword";
import Reference from "@/components/xyj/reference";
import Related from "@/components/xyj/related";
export default {
  name: "paperDetails",
  data() {
    return {
      paper: {
        paperTitle: "",
        paperFrom: "",
        paperUnit: "",
        height: "",
        authors:[],
        abstract:"",
        cited_counts:0,
        host_venue:"",
        institution:"",
        cited_by_count: "",
        ids: {},
        hasIds: false,
        url: "",
        doi: "",
        type: "unknown",
      },
      author_name:'',
      author_id:0,
      isCollection: false,
      isCollectionTxt: "已收藏",
      notCollectionTxt: "收藏",
      command: {

      }
    };
  },
  components: {
    Reference,
    Keyword,
    Note,
    Related
  },
  methods: {
    jscholar(){
      window.localStorage.setItem('SID',this.author_id);
      window.open('/scholar_page');
    },

    jumpPaper() {
      this.$router.push(this.paper.url);
    },
    onCollection() {

    }
  },
  // 挂载时获取
  mounted() {
    let height= this.$refs.ref.offsetHeight;  //100
    this.$axios({//注意是this.$axios
      method:'get',
      url:'/es/get',
      params:{//get请求这里是params
        // id:window.localStorage.getItem('WID')
        id: "W31001126"
      }
    }).then(
        response =>{
          console.log(response.data);
          this.paper.paperTitle=response.data.data.title
          this.paper.type=response.data.data.type
          this.paper.authors=response.data.data.authorships
          console.log(this.paper.authors[0].author.id)
          this.author_name= this.paper.authors[0].author.display_name//存储作者名称
          this.author_id = this.paper.authors[0].author.id//存储作者id
          this.paper.date=response.data.data.publication_date
          this.paper.abstract=response.data.data.abstract
          this.paper.cited_counts=response.data.data.cited_by_count
          this.paper.host_venue=response.data.data.host_venue
          if(response.data.data.type != null) {
            this.paper.type = response.data.data.type
          } else{
            this.paper.type = "unknown";
          }
          this.paper.ids = response.data.data.ids
          this.paper.doi = response.data.data.doi
          if(this.paper.doi != null) {
            this.paper.hasIds = true;
            this.paper.url = this.paper.doi;
          } else if('pmid' in this.paper.ids) {
            this.paper.hasIds = true;
            this.paper.url = this.paper.ids.pmid;
          } else  {
            this.paper.hasIds = false;
          }
          console.log("author institution is:")
          console.log(this.paper.authors[0].institutions)
          if(this.paper.authors[0].institutions.length===0){
            this.paper.institution = "No belonged institution";
          }
          else{
            this.paper.institution = this.paper.authors[0].institutions[0].display_name;
          }
        }
    )
    this.$axios({//注意是this.$axios
      method:'post',
      url:'/social/comment/list',
      data:{//get请求这里是params
        paper_id: "",
        user_id: 2
      }
    }).then(
        response =>{
        }
    )
  },
};
</script>
<style lang="scss" scoped>

.paper-detail {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background: linear-gradient(311.76deg, #D4E7FE, #FFFFFF);
  /*padding-bottom: 87px;*/
}
.main {
  //padding-left: 44px; //44px
  padding-left: 4.84vw;
  //display: flex;
  width: 59.64vw;
}
.paper-header {
  width: 100%;
  //padding-top: 61px;
  padding-top: 7.92vh;
  padding-left: 0.45vw;
  padding-bottom: 3.5vh;
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
  width: 48.37vw;
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

.info {
  margin-top: 1.04vh;
  text-align: left;
  min-height: 3.38vh;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 3.38vh;
  background: transparent !important;
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
.info2 #outer:after{
content:".";
height:0;
visibility:hidden;
display:block;
clear:both;
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
  float: left;
  margin-left: 2vw;
  color: #FD9B40;
}
.like2 {
  float: left;
  margin-left: 0.5vw;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  //color: #FD9B40;
}
.el-icon-my-origin{
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
.original img {
  float: left;
  padding-left: 10px;
  margin-top: 6px;
}
.right-buttons {
  float: right;
  height:6.75vh;
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
  overflow:hidden;
  filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.25));
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.25);
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
  width: 55.12vw;
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
  margin-left: 34.53vw;
  margin-right: 0.97vw;
}
.commends {
  margin-top: 7px;
  height: 3.38vh;
  width: 45.83vw;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 3.38vh;
}
.cards {
  display: flex;
  display: table-cell;
  width: 45.83vw;
  height: 24.41vh;
  padding-left: 1.48vw;
  padding-top: 16px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(180, 180, 180, 0.25);
  border-radius: 8px;
}
.user-info {
  float: left;
  position: relative;;
  height: 7.79vh;
  width: 41.31vw;
}
.commenter-avator {
  float: left;
  display: inline-block;
  height: 5.32vh;
  width: 2.65vw;
}
.left-info {
  height: 7.79vh;
  width: 28vw;
  float: left;
  display: table-cell;
  margin-left: 0.9vw;
}
.commenter-id {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 3.38vh;
  margin-left: 0.9vw;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 3.38vh;
}
.commenter-info {
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

  letter-spacing: 0.02em;

  color: #7D7D7D;
}
.comment-time {
  position: relative;
  display: flex;
  float: right;
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
  position: absolute;
  //display: flex;
  margin-top: 9.61vh;
  margin-left: 1.74vw;
  width: 39.37vw;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
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
  margin-top: 25vh;//4.67vh
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
  width: 45.83vw;
  //min-height: 19.35vh;
  min-height: 22vh;
}
.avators {
  display: inline-block;
  float: left;
  width: 6.07vw;
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
  width: 35.05vw;
  height: 9.35vh;
  border: 1.4px solid rgba(198, 198, 198, 0.6);
  border-radius: 8px;
}
.submit-btn {
  float: right;
  margin-right: 2.90vw;
  margin-top: 1.8vh;
  width: 6.33vw;
  //height: 3.64vh;
  background: linear-gradient(94.95deg, #288CD6 -43.46%, rgba(108, 155, 247, 0.56) 168.08%);
  box-shadow: 0px 0px 6px rgba(153, 166, 213, 0.57);
  border-radius: 5px;
  color: #FFFFFF;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  justify-content: center;
  align-items: center;
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
  flex-direction:column;
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
  margin-top: 40px;
  width: 100%;
  height: 383px;
  margin-right: 0vw;
}
.notes {
  width: 100%;
  height: auto;
  margin-top: 60vh;
  //margin-bottom: 10vh;
  clear: both;
}
</style>
<style>
.el-input__inner {
  border: none !important;
}
.original {
  padding: 0 2px 2px 0 !important;
}
</style>
