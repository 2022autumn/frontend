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
            <div class="citethis" v-on:click="createCitation">生成引用</div>
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
            <el-button class="original3" v-if="this.paper.haspdf" @click="downloadPDF">
              <img src="../assets/paperDetailsImg/pdf.png"
                   style="margin-left: 0vw">
              下载pdf
            </el-button>

            <!--被收藏的次数-->
            <div class="like2" @click="addTagdialog = true" style="cursor:pointer;">
              {{ this.isCollectionTxt }}
            </div>
<!--            <div class="like2" v-else @click="addTagdialog = true" style="cursor:pointer;">-->
<!--              {{ this.notCollectionTxt }}-->
<!--            </div>-->
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
          <div class="commends" v-infinite-scroll="load">
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
            <el-avatar></el-avatar>
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
<!--        <el-menu-->
<!--            mode="vertical"-->
<!--            class="el-menu-vertical-demo"-->
<!--            @open="handleOpen"-->
<!--            @close="handleClose"-->
<!--            @select="handleSelect"-->
<!--            :collapse=false-->

<!--        >-->
<!--&lt;!&ndash;          <el-submenu @click="joinVisible = true" index="create_team">&ndash;&gt;-->
<!--&lt;!&ndash;            <template slot="title">&ndash;&gt;-->
<!--&lt;!&ndash;              <i class="el-icon-plus icons"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                <span slot="title" class="text">新建收藏夹</span>&ndash;&gt;-->
<!--&lt;!&ndash;            </template>&ndash;&gt;-->
<!--&lt;!&ndash;          </el-submenu>&ndash;&gt;-->
<!--          <el-scrollbar>-->
<!--            <el-submenu-->
<!--                v-for="(item, i) in tags"-->
<!--                :key="i"-->
<!--                :index="item.tag_id"-->
<!--                @click="addTagToFile(item)"-->
<!--            >-->
<!--              <span slot="title" class="text">{{ item.tag_name }}-->
<!--              <el-button-->
<!--                  @click="onCollect(item)"-->
<!--                  class="collect_btn"-->
<!--                  :style="{backgroundColor:bg_color, color: ft_color,}"-->
<!--              >-->
<!--                {{collectContent}}-->
<!--              </el-button>-->
<!--              </span>-->
<!--            </el-submenu>-->
<!--          </el-scrollbar>-->
<!--          </el-menu>-->
        <div class="box-set" v-infinite-scroll="load">
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
          <div style="display: inline-block; position: relative;text-align: left">{{this.citation}}</div>
        </div>
        <el-button type="primary"  class="el-buttons" style="color: #FFFFFF;margin-top: 30px;margin-left: 280px;"  @click="clickCopy()">复制到剪切板</el-button>
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
        haspdf: false,
        pdf_url: "",

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
    };
  },
  components: {
    Reference,
    Keyword,
    Note,
    Related,
    Topbar1
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
    downloadPDF() {
      window.open(this.paper.pdf_url, '_blank');
      /*
      let url = this.paper.pdf_url;
      let fileName = "hello";
      let reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~\/])+$/
      if (!reg.test(url)) {
        throw new Error('传入参数不合法,不是标准的文件链接')
      } else {
        let xhr = new XMLHttpRequest()
        xhr.open('get', url, true)
        xhr.setRequestHeader('Content-Type', `application/pdf`)
        console.log("ds")
        xhr.responseType = 'blob'
        let that = this
        xhr.onload = function () {
          if (this.status == 200) {
            //接受二进制文件流
            var blob = this.response
            that.downloadExportFile(blob, fileName)
          }
        }
        xhr.send()
      }

       */
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
      console.log("authors "+this.paper.authors);
      for(var i=0;i<this.paper.authors.length;i++){
        this.citation=this.citation+this.paper.authors.at(i).author.display_name+", ";
      }
      console.log("first "+this.citation);
      this.citation=this.citation+"\""+this.paper.paperTitle+"\" in "+this.paper.host_venue.display_name+", "+this.paper.date;
      console.log("second "+this.citation);
    },
    clickCopy() {
      let msg;
      msg=this.citation;
      const save = function(e) {
        e.clipboardData.setData('text/plain', msg)
        e.preventDefault() // 阻止默认行为
      }
      document.addEventListener('copy', save) // 添加一个copy事件
      document.execCommand('copy') // 执行copy方法
      this.$message({ message: '复制成功', type: 'success' })
    }

  },
  // 挂载时获取
  mounted() {
    this.getTagList();
    let height = this.$refs.ref.offsetHeight;  //100
    this.$axios({//注意是this.$axios
      method: 'get',
      url: '/es/get2',
      params: {//get请求这里是params
        id: window.localStorage.getItem('WID')
        //id: "W2914747780"
      }
    }).then(
        response => {
          console.log("test " + response.data.data.open_access.oa_url);
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
          this.paper.date = response.data.data.publication_date
          this.paper.abstract = response.data.data.abstract
          this.paper.cited_counts = response.data.data.cited_by_count
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
          if ('oa_url' in this.paper.pdf_ids) {
            this.paper.haspdf = response.data.data.open_access.is_oa;
            if (this.paper.haspdf) {
              this.paper.pdf_url = response.data.data.open_access.oa_url;
            }
          }
          console.log("this.paper.pdf_ids "+this.paper.pdf_ids.oa_url);
          console.log("author institution is:")
          console.log(this.paper.authors[0].institutions)
          if (this.paper.authors[0].institutions.length === 0) {
            this.paper.institution = "No belonged institution";
          } else {
            this.paper.institution = this.paper.authors[0].institutions[0].display_name;
          }
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
  margin-top: 40px;
  width: 100%;
  margin-top: 60vh;
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
  font-size: 10px;
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
  background: #accaf1;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
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
</style>
