<template>
  <div>
    <Topbar1></Topbar1>
    <div class="top-background">
      <el-row style="height: 600px">
        <!-- 顶部展示页面的左侧 -->
        <el-col :span="13">
          <div class="title-text" style="margin-top: 25vh; margin-left: 3%">
            Search , then Communicate
          </div>

          <div style="margin-top: 6vh; margin-bottom: 5vh;display: inline-block">
            <div style="text-align: center">
              <el-autocomplete :trigger-on-focus="false" :fetch-suggestions="querySearch" @select="handleSelect"
                               class="home-search" placeholder="请输入检索内容" v-model="input1"
                               @keyup.enter.native="j_search_outcome" @input="inputchange" style="width: 40vw">
                <!--<template slot="prepend" style="cursor: pointer">
                  <span @click="jadvance" style="width:inherit">高级检索</span>
                </template>-->
                <el-select class="search_header" v-model="select" slot="prepend" placeholder="请选择字段"
                           style="width: 10vw;">
                  <el-option label="标题" value="1"></el-option>
                  <el-option label="摘要" value="2"></el-option>
                  <el-option label="刊物" value="3"></el-option>
                  <el-option label="机构" value="4"></el-option>
                </el-select>
                <i slot="suffix" class="el-input__icon el-icon-search" @click="j_search_outcome"></i>
              </el-autocomplete>
            </div>
          </div>

          <div style="position: absolute;top:58vh;padding-left: 5%; padding-right: 5%;">

            <div style="position: absolute;left: 7vw;">
              <img
                  src="../../HomePage_svg/top-icon-1.svg"
                  style="width: 60px; height: 60px; text-align:bottom"
              />
            </div>

            <div style="position: absolute;left: 20vw;">
              <img
                  src="../../HomePage_svg/top-icon-2.svg"
                  style="width: 60px; height: 60px; text-align: bottom"
              />
            </div>

            <div style="position: absolute;left: 33vw;">
              <img
                  src="../../HomePage_svg/top-icon-3.svg"
                  style="width: 60px; height: 60px; text-align: bottom"
              />
            </div>

            <div style="position: absolute;left: 46vw;">
              <img
                  src="../../HomePage_svg/top-icon-4.svg"
                  style="width: 60px; height: 60px; text-align: bottom"
              />
            </div>

          </div>

          <div class="icon-text">
            <div style="position: absolute;left: 4vw; white-space:nowrap">216,389,416学者</div>
            <div style="position: absolute;left: 17vw; white-space:nowrap">170,358,065论文</div>
            <div style="position: absolute;left: 31vw; white-space:nowrap">226,726期刊</div>
            <div style="position: absolute;left: 44vw; white-space:nowrap">108,618组织</div>
          </div>
        </el-col>

        <!-- 顶部展示页面的右侧，只有两张图片 -->
        <el-col :span="11" style="display: fix">
          <div>
            <span>
              <img
                  src="../../HomePage_svg/top-left.svg"
                  style="width: 50%; height: 50%; margin-top: 40%"
              /></span>
            <span>
              <img
                  src="../../HomePage_svg/top-right.svg"
                  style="width: 50%; height: 50%; margin-bottom: 20%"
              /></span>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 下部内容页 -->
    <div>
      <el-row :gutter="10" class="content-panel">

        <!-- 左侧推荐文章栏 -->
        <el-col :span="17">
          <div class="reference">
            <el-row>
              <el-col :span="1">
                <!--<div class="button" >{{this.keyname}}</div>-->
                <div>&nbsp</div>
              </el-col>
              <el-col :span="18">
                <div class="ref-tag">
                  <img
                      src="../../HomePage_svg/ref-head.svg"
                      style="
                      vertical-align: middle;
                      margin-left: -10%;
                      margin-top: 5px;"
                  />
                  <el-popover
                      placement="right"
                      width="500"
                      height="500"
                      trigger="hover"
                  >
                    <div style="margin-left: 10px"><b>我订阅的主题词</b></div>
                    <div v-for="item in this.keys"  style="display: inline-block;margin-left: 10px;margin-top: 8px" >
                      <el-popover
                          placement="bottom"
                          width="280"
                          height="500"
                          trigger="hover"
                          :open-delay=800
                          :close-delay=0
                      >
                        <div style="margin-left: 10px;cursor: default"><b>关键词描述</b></div>
                        <div style="width: 90%;left:50%;position:absolute;margin-left:-45%;height: 1px;margin-top:10px;background-color:rgba(217, 215, 215, 0.58)"></div>
                        <div style="margin-top: 20px;width: 90%;word-break: break-word;text-align: left;margin-left: 5%;cursor: default">{{detail}}</div>
                        <div v-if="ifhasImage" style="width: 100%;text-align: center;margin-top: 10px">
                          <img :src="image_thumbnail_url" alt="">
                        </div>
                        <el-button style="width: auto;" @click="choosekey(item)" slot="reference" @mouseenter.native="getDetail(item.concept_id)"  >{{ item.concept_name }}</el-button>
                      </el-popover>
                    </div>
                    <span style="vertical-align: top;cursor: pointer" slot="reference">
                    {{ this.keyname }}</span></el-popover>
                </div>
              </el-col>
            </el-row>
          </div>

          <div class="itemlist">
            <PaperItem @click.native="jpaper1(0)" :title="this.tuijianlist[0].work.title"
                       :author="this.tuijianlist[0].work.authorships[0].author.display_name"
                       :jigou="this.tuijianlist[0].work.host_venue.display_name"
                       :time="this.tuijianlist[0].work.publication_date" :abstract="this.tuijianlist[0].work.abstract"
                       :type="this.tuijianlist[0].work.type" :key1="this.tuijianlist[0].work.concepts[0].display_name"
                       :keyid1="this.tuijianlist[0].work.concepts[0].id"
                       :key2="this.tuijianlist[0].work.concepts[1].display_name"
                       :key3="this.tuijianlist[0].work.concepts[2].display_name"
                       :num="this.tuijianlist[0].work.cited_by_count"></PaperItem>
            <PaperItem @click.native="jpaper1(1)" :title="this.tuijianlist[1].work.title"
                       :author="this.tuijianlist[1].work.authorships[0].author.display_name"
                       :jigou="this.tuijianlist[1].work.host_venue.display_name"
                       :time="this.tuijianlist[1].work.publication_date" :abstract="this.tuijianlist[1].work.abstract"
                       :type="this.tuijianlist[1].work.type" :key1="this.tuijianlist[1].work.concepts[0].display_name"
                       :keyid1="this.tuijianlist[0].work.concepts[0].id"
                       :key2="this.tuijianlist[1].work.concepts[1].display_name"
                       :key3="this.tuijianlist[1].work.concepts[2].display_name"
                       :num="this.tuijianlist[1].work.cited_by_count"></PaperItem>
            <PaperItem @click.native="jpaper1(2)" :title="this.tuijianlist[2].work.title"
                       :author="this.tuijianlist[2].work.authorships[0].author.display_name"
                       :jigou="this.tuijianlist[2].work.host_venue.display_name"
                       :time="this.tuijianlist[2].work.publication_date" :abstract="this.tuijianlist[2].work.abstract"
                       :type="this.tuijianlist[2].work.type" :key1="this.tuijianlist[2].work.concepts[0].display_name"
                       :keyid1="this.tuijianlist[0].work.concepts[0].id"
                       :key2="this.tuijianlist[2].work.concepts[1].display_name"
                       :key3="this.tuijianlist[2].work.concepts[2].display_name"
                       :num="this.tuijianlist[2].work.cited_by_count"></PaperItem>
            <PaperItem @click.native="jpaper1(3)" :title="this.tuijianlist[3].work.title"
                       :author="this.tuijianlist[3].work.authorships[0].author.display_name"
                       :jigou="this.tuijianlist[3].work.host_venue.display_name"
                       :time="this.tuijianlist[3].work.publication_date" :abstract="this.tuijianlist[3].work.abstract"
                       :type="this.tuijianlist[3].work.type" :key1="this.tuijianlist[3].work.concepts[0].display_name"
                       :keyid1="this.tuijianlist[0].work.concepts[0].id"
                       :key2="this.tuijianlist[3].work.concepts[1].display_name"
                       :key3="this.tuijianlist[3].work.concepts[2].display_name"
                       :num="this.tuijianlist[3].work.cited_by_count"></PaperItem>
            <PaperItem @click.native="jpaper1(4)" :title="this.tuijianlist[4].work.title"
                       :author="this.tuijianlist[4].work.authorships[0].author.display_name"
                       :jigou="this.tuijianlist[4].work.host_venue.display_name"
                       :time="this.tuijianlist[4].work.publication_date" :abstract="this.tuijianlist[4].work.abstract"
                       :type="this.tuijianlist[4].work.type" :key1="this.tuijianlist[4].work.concepts[0].display_name"
                       :keyid1="this.tuijianlist[0].work.concepts[0].id"
                       :key2="this.tuijianlist[4].work.concepts[1].display_name"
                       :key3="this.tuijianlist[4].work.concepts[2].display_name"
                       :num="this.tuijianlist[4].work.cited_by_count"></PaperItem>
            <PaperItem @click.native="jpaper1(5)" :title="this.tuijianlist[5].work.title"
                       :author="this.tuijianlist[5].work.authorships[0].author.display_name"
                       :jigou="this.tuijianlist[5].work.host_venue.display_name"
                       :time="this.tuijianlist[5].work.publication_date" :abstract="this.tuijianlist[5].work.abstract"
                       :type="this.tuijianlist[5].work.type" :key1="this.tuijianlist[5].work.concepts[0].display_name"
                       :key2="this.tuijianlist[5].work.concepts[1].display_name"
                       :key3="this.tuijianlist[5].work.concepts[2].display_name"
                       :num="this.tuijianlist[5].work.cited_by_count"></PaperItem>
          </div>

          <!--<div class="pages">
            <el-pagination
                layout="prev, pager, next"
                :total=this.total_page
                @current-change="handlechange"
                background="white"
              >
            </el-pagination>
          </div>-->
        </el-col>

        <!-- 右侧导航栏 -->
        <el-col :span="7">
          <!-- 导航栏标题 -->
          <div class="bar-title1" style="margin-left: 50px">
            I SHARE
            <img
                src="../../HomePage_svg/vector5.svg"
                style="
                margin-bottom: -10px;
                margin-left: 15px;
                margin-right: -20px;
              "
            />
          </div>
          <div class="bar-title2" style="margin-top: 20px; margin-bottom: 20px">
            站内功能
          </div>

          <!-- 导航栏内容框 -->
          <div class="right-item">
            <img
                src="../../HomePage_svg/right-icon1.svg"
                style="vertical-align: middle;"
            />
            <span style="vertical-align: super"> 学者主页 </span>
          </div>
          <div class="right-item">
            <img
                src="../../HomePage_svg/right-icon2.svg"
                style="vertical-align: middle;"
            />
            <span style="vertical-align: super"> 学术分析 </span>
          </div>
          <div class="right-item">
            <img
                src="../../HomePage_svg/right-icon3.svg"
                style="vertical-align: middle;"
            />
            <span style="vertical-align: super"> 高级检索 </span>
          </div>

          <!-- 导航栏滚动框 -->
          <el-carousel height="25vh" :interval=2000 style="margin-top: 5vh">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="slides"><img preview-disabled style="width:23vw;"
                                      src="../../../public/advanced_img/Frame 8.svg"
              /></h3>
            </el-carousel-item>
          </el-carousel>

          <!-- 导航栏热门排行 -->
          <div class="hot-list">
            <div class="hot-titile1">I SHARE</div>
            <div class="hot-titile2">热门排行</div>
            <div class="hot-item-set" v-for="(item, index) in hot_list" :key="index">
              <div class="hot-item">
                <!-- <span v-if="index!=9" class="hot-number">{{ "0"+(index+1) }} </span> -->
                <span v-if="index===0" class="hot-number" style="color: #FA1616">01</span>
                <span v-if="index===1" class="hot-number" style="color: #FD9B40">02</span>
                <span v-if="index===2" class="hot-number" style="color: #F6DA95">03</span>
                <span v-if="index>2 && index!=9" class="hot-number">{{ "0" + (index + 1) }}</span>
                <span v-if="index===9" class="hot-number"> {{ (index + 1) }} </span>
                <span class="hot-content" @click="jpaper(index)" v-html="item.work_title+'.'">.</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Topbar1 from "@/components/topbar1";
import PaperItem from "@/components/paperItem";

export default {
  components: {Topbar1, PaperItem},
  data() {
    return {
      select: '',
      detail: "origin",
      image_thumbnail_url: "",
      ifhasImage: false,
      restaurants: [
        {
          "value": "java"
        }
      ],
      userid: window.localStorage.getItem('uid'),
      input1: "",
      num_exact_page: 8,
      total: 1000,//返回的检索结果的总量
      total_page: 0,
      hot_list: [],
      oldtime: '',
      titles: [
        "c",
        "c",
        "c", "c", "c", "c"
      ],
      tuijianlist: [],
      testkey: [{
        name: "java",
        id: 1,
      }, {
        name: "python",
        id: 2,
      }, {
        name: "python",
        id: 2,
      }, {
        name: "python",
        id: 2,
      }, {
        name: "python",
        id: 2,
      }, {
        name: "python",
        id: 2,
      }, {
        name: "python",
        id: 2,
      }, {
        name: "python",
        id: 2,
      }, {
        name: "python",
        id: 2,
      }, {
        name: "python",
        id: 2,
      }],
      keys: [],
      keyname: '选择主题词，相关内容主页推荐~',
      keyid: 0,
      cid: 'C73878792',
    }
  },
  mounted() {
    this.userid = window.localStorage.getItem('uid');
    if (this.userid === null || this.userid === undefined || this.userid === 0 || this.userid === "") {
      this.userid = 1;
    }
    let that = this;
    that.$axios({//注意是this.$axios
      method: 'get',
      url: '/scholar/hot',
      params: {//get请求这里是params
      }
    }).then(
        response => {
          console.log("get hot", response.data)
          this.hot_list = response.data.data;
        }
    )
    this.getkey();
    this.gettuijian();
  },
  methods: {
    test(item){
      clearTimeout();
      this.detail="";
      this.ifhasImage=false;
      item.isDetail=false;
    },
    showDetail(id){
      setTimeout(this.getDetail(id),600);

    }
    ,
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
            },200)
          }
      )
    },
  setDetails(description,image_thumbnail_url){
    this.detail = response.data.data.description;
    if (response.data.data.image_thumbnail_url !== null) {
      this.ifhasImage=true
      this.image_thumbnail_url = response.data.data.image_thumbnail_url;
    }else{
      this.ifhasImage=false;
      this.image_thumbnail_url ="";
    }
  }
  ,
    choosekey(item) {
      console.log(item);
      console.log(item.concept_id);
      console.log(item.concept_name);
      this.cid = item.concept_id;
      this.keyname = item.concept_name;
      this.gettuijian();
    },
    getkey() {
      this.$axios({//注意是this.$axios
        method: 'get',
        url: '/scholar/concept',
        headers: {
          //token:3,
          token: this.userid,
        },
      }).then(
          response => {
            console.log("关键词列表为");
            //console.log(response.data.data);
            this.keys = response.data.data;
            console.log(this.keys);
          }
      )
    },
    gettuijian() {
      this.$axios({//注意是this.$axios
        method: 'get',
        url: '/scholar/roll',
        params: {//post请求这里是data
          concept_id: this.cid
        }
      }).then(
          response => {
            console.log("推荐论文为");
            //console.log(response.data.data);
            this.tuijianlist = response.data.data;
            console.log(this.tuijianlist);
            for (var i = 0; i < this.tuijianlist.length; i++) {
              console.log(this.tuijianlist[i].work.title.length);
              if (this.tuijianlist[i].work.title.length > 55) {//处理一下过长的题目
                //console.log(this.items[i].zhaiyao);
                console.log("过长")
                this.tuijianlist[i].work.title = this.tuijianlist[i].work.title.substring(0, 55) + "...";
              }
              if (this.tuijianlist[i].work.abstract.length > 230) {
                this.tuijianlist[i].work.abstract = this.tuijianlist[i].work.abstract.substring(0, 230) + "...";
              }
              console.log(this.tuijianlist[i].work.abstract)
              if (this.tuijianlist[i].work.abstract === "") {
                this.tuijianlist[i].work.abstract = "This paper has no abstract."
              }
              if (this.tuijianlist[i].work.authorships.length === 0) {
                var tmp1 = {};
                var tmp2 = {};
                tmp2.display_name = "unknown";
                tmp1.author = tmp2;
                this.tuijianlist[i].work.authorships.push(tmp1);
                //this.tuijianlist[i].work.authorships[0].author.display_name = "unknown";
              }
              console.log(this.tuijianlist[i].work.type)
              if (this.tuijianlist[i].work.type === null) {
                this.tuijianlist[i].work.type = "unknown";
              }
              if (this.tuijianlist[i].work.host_venue.display_name === null) {
                this.tuijianlist[i].work.host_venue.display_name = "unknown";
              }
              console.log()
              if (this.tuijianlist[i].work.concepts.length < 3) {
                console.log("发现问题")
                if (this.tuijianlist[i].work.concepts.length === 0) {
                  var tmp = {};
                  tmp.display_name = "Science";
                  this.tuijianlist[i].work.concepts.push(tmp);
                  tmp.display_name = "Hot";
                  this.tuijianlist[i].work.concepts.push(tmp);
                  tmp.display_name = "Recommended"
                  this.tuijianlist[i].work.concepts.push(tmp);
                  //this.tuijianlist[i].work.concepts[0].display_name = "Science";
                  //this.tuijianlist[i].work.concepts[1].display_name = "Hot";
                  //this.tuijianlist[i].work.concepts[2].display_name = "Recommended";
                } else if (this.tuijianlist[i].work.concepts.length === 1) {
                  var tmp = {};
                  tmp.display_name = "Science";
                  this.tuijianlist[i].work.concepts.push(tmp);
                  tmp.display_name = "Hot";
                  this.tuijianlist[i].work.concepts.push(tmp);
                  //this.tuijianlist[i].work.concepts[1].display_name = "Science";
                  //this.tuijianlist[i].work.concepts[2].display_name = "Hot";
                } else if (this.tuijianlist[i].work.concepts.length === 2) {
                  var tmp = {};
                  tmp.display_name = "Science";
                  this.tuijianlist[i].work.concepts.push(tmp);
                  //this.tuijianlist[i].work.concepts[2].display_name = "Science";
                }
              }
              for (var t = 0; t < 3; t++) {
                if (this.tuijianlist[i].work.concepts[t].display_name.length > 20) {
                  this.tuijianlist[i].work.concepts[t].display_name = "Science";
                }
              }
            }
          }
      )
    },
    inputchange(value) {//搜索的内容改变
      console.log(value);
      console.log(this.oldtime);
      var newtime = new Date();
      console.log(newtime - this.oldtime);
      if (newtime - this.oldtime >= 1000) {
        this.$axios({//注意是this.$axios
          method: 'post',
          url: '/es/prefix',
          data: {//post请求这里是data
            Field: "title",
            Prefix: value
          }
        }).then(
            response => {
              console.log("查询成功")
              console.log(response.data.res);
              this.restaurants.length = 0;
              for (var i = 0; i < response.data.res.length; i++) {
                var tmp = {};
                tmp.value = response.data.res[i];
                this.restaurants.push(tmp);
              }
            }
        )
        this.oldtime = new Date();
      }
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      //var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(restaurants);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return [
        {"value": "三全鲜食（北新泾店）"},
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    change(value) {
      console.log("现在输入框内为" + value);
    },
    jpaper(index) {

      console.log("paper_id", this.hot_list[index].work_id)
      window.localStorage.setItem('WID', this.hot_list[index].work_id);
      window.open('/paper_details');
    },
    jpaper1(index) {
      console.log("paper_id", this.tuijianlist[index].work.id)
      window.localStorage.setItem('WID', this.tuijianlist[index].work.id);
      window.open('/paper_details');
    },
    jadvance() {
      window.open('/advancedSearch');
    },
    j_search_outcome() {
      console.log(this.input1);
      var cond = {};
      sessionStorage.setItem('Cond', JSON.stringify(cond));
      sessionStorage.setItem('search_name1', this.input1);
      sessionStorage.setItem('now_page', JSON.stringify(1));
      window.open('/search_outcome');
      //window.location.replace("/search_outcome");
    }
  },
  created() {
    this.oldtime = new Date();
    if (this.total % 4 === 0) {
      this.total_page = this.total / 8 * 10;
    } else {
      this.total_page = (this.total / 8 + 1) * 10;
    }
  }
}
// @ is an alias to /src
</script>

<style scoped>
.top-background {
  display: inline-block;
  text-align: center;
  width: 100%;
  height: 80vh;
  left: 0px;
  top: 0px;

  font-family: "Inter";
  font-style: normal;
  background: linear-gradient(311.76deg, #d4e7fe -15.24%, #ffffff 78.85%);
}

.title-text {
  /* margin-left: 10%; */
  margin-top: 30 vx;
  /* margin-bottom: 20px; */

  /* text-align: left; */
  font-weight: 700;
  font-size: 38px;
  line-height: 48px;
  /* or 118% */

  color: #0a093d;
}

.icon-text {
  /* margin-top: -9vh; */
  position: absolute;
  top: 70vh;
  padding-left: 5%;
  padding-right: 5%;
  margin: 0 auto;
  text-align: center;

  font-family: "Plus Jakarta Sans";
  font-weight: 700;
  font-size: 20px;

  /* identical to box height, or 36px */

  letter-spacing: -0.01em;

  color: #217bf4;
}

/* 搜索框样式 */
.home-search /deep/ .el-input-group__prepend {
  background: rgba(117, 167, 235, 0.52);
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* color: #fcfcff; */
  color: #ffffff;
}

.home-search /deep/ .el-input__inner {
  background: rgba(117, 167, 235, 0.52);
  height: 45px; /*调整inner的高度*/
  /*width: 500px;*/
}

.home-search /deep/ .el-input__inner::placeholder {
  font-weight: 300;
  font-size: 18px;
  color: #fcfcff;
}

.home-search /deep/ .el-input__icon {
  width: 3vw;
  font-size: large;
  line-height: 24px;
}

.home-search /deep/ :before {
  vertical-align: middle;
}

.home-search /deep/ .el-input__suffix {
  color: white;
}

/* 页面中下部底色*/
.content-panel {
  font-family: "Inter";
  font-style: normal;

  width: 100%;
  /* height: 600px; */
  background: linear-gradient(
      0deg,
      rgba(225, 233, 245, 0) 1.63%,
      #f1f6fd 20.5%,
      #f1f6fd 58.57%,
      #ffffff 100%
  );

  padding-top: 30px;
  padding-right: 10px;
  padding-left: 10px;
}

/* 右边工具栏 */
.bar-title1 {
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height, or 100% */

  text-align: center;

  color: #217bf4;
}

.bar-title2 {
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  /* identical to box height, or 112% */

  text-align: center;
  color: #0a093d;
}

.right-item {
  padding: 0% 12%;
  /* padding-left: 12%;
  padding-right: 12%; */

  margin: auto;
  margin-bottom: 3vh;
  width: 80%;
  height: 10vh;
  background: #ffffff;
  border-radius: 14px;

  font-weight: 600;
  font-size: 24px;
  line-height: 108%;
  color: #2f2c4a;

  box-shadow: 0px 7px 22px -6px rgba(0, 72, 168, 0.34);
}

/* 图片切换slides */
.slides {
  width: 80%;
  height: 100%;
  margin: auto;
  background: #accaf1;
}

.el-carousel__button {
  height: 5px;
  width: 1vw;
  border: none;
  background-color: rgba(97, 93, 93, 0.3);
}

/* 热榜 */
.hot-list {
  margin: 0 auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
  width: 80%;
  height: auto;
  min-height: 80px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 10px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
}

.hot-titile1 {
  padding-top: 4vh;
  padding-bottom: 1vh;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  color: #217bf4;
}

.hot-titile2 {
  margin-bottom: 0.5vh;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #0A093D;
}

.hot-item {
  /*margin-left: 6px;*/
  width: auto;
  margin-bottom: 1.5vh;
  text-align: left;
}

.hot-number {
  /*padding-left: 10px;*/
  font-weight: 800;
  font-size: 18px;
  line-height: 180%;
  text-align: center;
  /* color: rgba(238, 80, 18, 0.67); */
  color: rgba(86, 72, 72, 0.67);
}

.hot-content {
  padding-left: 10px;
  padding: 10px 10px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 123%;
  text-align: center;
  /*color: #000000;*/
  color: #5c5e5f;
}

.hot-content:hover {
  /*text-decoration: underline;*/
  color: #53a2e3;
}

/* 下方中间推荐内容 */
.reference {
  font-family: "Inter";
  font-style: normal;
  display: inline-block;
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
}

.button {
  margin: auto;
  width: 8vw;
  height: 6vh;
  background: #217bf4;
  box-shadow: 0px 7px 22px -6px rgba(0, 72, 168, 0.34);
  border-radius: 14px;

  font-weight: 700;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  letter-spacing: 0.01em;

  color: #ffffff;
}

.ref-tag {
  width: 50%;
  height: 40px;
  margin-top: 5px;
  background: rgba(117, 167, 235, 0.1);
  color: rgb(47, 44, 74);
  border-radius: 14px;

  font-weight: 700;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 0.01em;
}

/* 翻页器 */
.pages {
  width: inherit;
  text-align: center;
  margin: 4vh auto;
}

.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  background-color: #fff; /*进行修改未选中背景和字体*/
}

</style>
<style>
.search_header input.el-input__inner {
  text-align: center !important;
}
</style>
