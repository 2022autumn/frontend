<template>
  <div class="all">
    <topbar1></topbar1>
    <div style="position: fixed;top:7vh;width: 100vw; z-index: 100">
      <el-collapse style="position:absolute;width:100vw;" >
        <el-collapse-item >
          <template slot="title">
            <b class="collap-font">高级检索条件
              <img src="../assets/send-plane-fill.svg" style="width: 22px; height: 22px;vertical-align:-6px" preview-disabled/>
            </b>
          </template>
          <avc class="background"></avc>
        </el-collapse-item>
      </el-collapse>
    </div>
    <el-row :gutter="20" style="margin:auto; top:15vh">
      <el-col :span="3">
        <div>&nbsp</div>
      </el-col>
      <el-col :span="5">
        <el-card class="box-card" style="word-break:break-all; background-color: rgba(99, 162, 247, 0.15);" shadow="hover">
          <!--<img src="../img/Fill.svg" style="position: absolute;left:-0.5vw;top:1vh">
          <img src="../img/Funnel.svg" style="position: absolute;left:1.25vw;top:3.4vh">-->
          <!--<div>
          <div style=""><b>排序条件</b></div>
          <el-checkbox-group v-model="checklist" :max="1">
          <el-checkbox label="按匹配程度递减"><b>按匹配程度递减</b></el-checkbox>
          <el-checkbox label="按被引用量递减"><b>按被引用量递减</b></el-checkbox>
          <el-checkbox label="按发表时间递减"><b>按发表时间递减</b></el-checkbox>
          </el-checkbox-group>
          <el-divider></el-divider>
          </div>-->
          <div v-if="this.authors.length>0">
            <div style="margin-bottom:5px">
              <img src="../assets/search_outcome/Frame1.svg" style="width: 26px; height: 26px;vertical-align:-6px;" preview-disabled/>
              <b>&nbsp;主要作者</b>
            </div>
            <el-checkbox-group v-model="checklist_author" :max="1" @change="choose_change">
              <el-checkbox v-for="item in this.authors"  :label=item.key style="display: block;word-wrap: break-word;overflow: hidden;left: 0.5vw;"><b>{{item.key}}</b></el-checkbox>
            </el-checkbox-group>
            <el-divider></el-divider>
          </div>
          <div v-if="this.institutions.length>0">
            <div style="">
              <img src="../assets/search_outcome/Frame5.svg" style="width: 26px; height: 26px;vertical-align:-6px" preview-disabled/>
              <b>&nbsp;主要组织</b>
            </div>
            <el-checkbox-group v-model="checklist_institutions" :max="1" @change="choose_change">
              <el-checkbox v-for="item in this.institutions"  :label=item style="display: block;word-wrap: break-word;overflow: hidden;left: 0.5vw;"><b>{{item}}</b></el-checkbox>
            </el-checkbox-group>
            <el-divider></el-divider>
          </div>
          <div v-if="this.publish_years.length>0">
            <div style="margin-bottom:5px">
              <img src="../assets/search_outcome/Frame2.svg" style="width: 26px; height: 26px;vertical-align:-6px" preview-disabled/>
              <b>&nbsp;发表年份</b>
            </div>
            <el-checkbox-group v-model="checklist_publish_years" :max="1" @change="choose_change">
              <el-checkbox v-for="item in this.publish_years"  :label=item style="display: block;word-wrap: break-word;overflow: hidden;left: 0.5vw;"><b>{{item}}</b></el-checkbox>
            </el-checkbox-group>
            <el-divider></el-divider>
          </div>
          <div v-if="this.publishers.length>0">
            <div style="margin-bottom:5px">
              <img src="../assets/search_outcome/Frame3.svg" style="width: 26px; height: 26px;vertical-align:-6px" preview-disabled/>
              <b>&nbsp;出版单位</b>
            </div>
            <el-checkbox-group v-model="checklist_publishers" :max="1" @change="choose_change">
              <el-checkbox v-for="item in this.publishers"  :label=item style="display: block;word-wrap: break-word;overflow: hidden;left: 0.5vw;"><b>{{item}}</b></el-checkbox>
            </el-checkbox-group>
            <el-divider></el-divider>
          </div>
          <div v-if="this.types.length>0">
            <div style="margin-bottom:5px">
              <img src="../assets/search_outcome/Frame4.svg" style="width: 26px; height: 26px;vertical-align:-6px" preview-disabled/>
              <b>&nbsp;论文类型</b>
            </div>
            <el-checkbox-group v-model="checklist_types" :max="1" @change="choose_change">
              <el-checkbox v-for="item in this.types"  :label=item style="display: block;word-wrap: break-word;overflow: hidden;left: 0.5vw;"><b>{{item}}</b></el-checkbox>
            </el-checkbox-group>
            <el-divider></el-divider>
          </div>
          <div v-if="this.venues.length>0">
            <div style="margin-bottom:5px">
              <img src="../assets/search_outcome/Frame6.svg" style="width: 26px; height: 26px;vertical-align:-6px" preview-disabled/>
              <b>&nbsp;刊物名称</b>
            </div>
            <el-checkbox-group v-model="checklist_venues" :max="1" @change="choose_change" >
              <el-checkbox v-for="item in this.venues"  :label=item style="width: 22vw;word-break: break-all;display:block;word-wrap: break-word;overflow: hidden;left: 0.5vw;" >
                <b>
                  {{item}}
                </b>
              </el-checkbox>
            </el-checkbox-group>
            <el-divider></el-divider>
          </div>
          <!--<div style="margin-left: 6.5vw;margin-top: -2vh"><v-btn style="background-color: #217BF4;" class="white--text" @click="shaixuan">确认</v-btn></div>-->
        </el-card>
      </el-col>

      <el-col :span="15" style="margin:0 auto">
        <div style="margin-bottom:10px">
          <el-row :gutter="20" style="margin:auto;">
            <el-col :span="6">
              <b style="color:gray;font-size: small;" v-if="this.true_total_page!==10000">
                &ensp; 共找到{{this.true_total_page}}条结果
              </b>
              <b style="color:gray;font-size: small;" v-if="this.true_total_page===10000">
                &ensp; 共找到{{this.true_total_page}}+条结果
              </b>
            </el-col>
            <el-col :span="8">
              <div>&nbsp</div>
            </el-col>
            <el-col :span="10">
              <img src="../assets/search_outcome/Frame7.svg" style="width: 26px; height: 26px;vertical-align:-6px" preview-disabled/>
              <b style="color:gray;font-size: small;">&nbsp;结果排序&nbsp;&nbsp;</b>
              <el-select v-model="value" placeholder="请选择排序方式" size="small">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    @click.native="dosort(item.value)"
                    >
                </el-option>
              </el-select>
            </el-col>

          </el-row>

        </div>
        <div v-for="item in items" v-if="item.id!==''" style="width: 50vw;height:240px; " @click="jdetail(item.id)">
          <el-card  class="outcome-card" style="width:60vw;height:228px; " shadow="hover">
            <el-tag class="item-type" style="display: inline-block">{{item.type}}</el-tag>
            <div style="display: inline-block;font-size: large;">
              &nbsp;
              <b>
                <div style="display: inline-block;" v-html="item.title"></div>
              </b>
            </div>
            <div>
              <div style="display: inline-block;margin-top: 1vh;color: grey" v-for="(aus,index) in item.authors">
                <div style="display: inline-block" v-if="index<item.authors.length-1"><b>{{aus}}</b>&nbsp;;&nbsp;&nbsp</div>
                <div style="display: inline-block" v-if="index===item.authors.length-1"><b>{{aus}}</b>&nbsp;&nbsp;&nbsp</div>
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
              <div style="display: inline-block;" v-html="item.zhaiyao"></div>
            </div>
            <div style="margin-top: 2vh;display: inline-block">
              <div v-for="tags in item.tags" v-if="tags!==''" style="display: inline-block">
                <el-tag>{{tags}}</el-tag>
                &nbsp;
              </div>
            </div>
            <div style="display: inline-block;color: rgba(96, 96, 96, 0.69);">
              <div style="display: inline-block;top:3vh">
                <img src="../img/yinhao.svg" style="width: 2vw;height: 2vh">
              </div>
              <div style="display: inline-block;">
                {{item.numyin}}次被引
              </div>
            </div>
            <!--<div style="display: inline-block;color: rgba(96, 96, 96, 0.69); ">
              <div style="display: inline-block;"><img src="../img/shoucang.svg" style="width: 2vw;height: 2vh"></div>
              <div style="display: inline-block">{{item.numstore}}次收藏</div>
            </div>-->
          </el-card>
        </div>
        <el-row style="margin:auto; top:2vh">
          <el-col :span="5">
            <div>&nbsp</div>
          </el-col>
          <el-col :span="16">
            <div class="block">
              <el-pagination
                  layout="prev, pager, next"
                  :total=this.total_page
                  @current-change="handlechange"
                  :current-page= this.now_page
                  background
              >
              </el-pagination>
            </div>
          </el-col>
          <el-col :span="3">
            <div>&nbsp</div>
          </el-col>
        </el-row>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import Topbar2 from "@/components/topbar2";
import Topbar1 from "@/components/topbar1";
import avc from "@/views/advanced_search_component";
export default {
  name: "search_outcome",
  components: {Topbar2, Topbar1,avc},
  data(){
    return{
      options: [ {
        value: 1,
        label: '按被引用量递减'
      }, {
        value: 2,
        label: '按被引用量递增'
      }, {
        value: 3,
        label: '按发表时间递减'
      }, {
        value: 4,
        label: '按发表时间递增'
      },{
        value: 5,
        label: '按匹配程度递减'
      },{
        value: 6,
        label: '按匹配程度递增'
      },],
      true_total_page:0,
      checklist:[],
      checklist_author:[],
      checklist_institutions:[],
      checklist_publish_years:[],
      checklist_publishers:[],
      checklist_types:[],
      checklist_venues:[],
      radio:3,
      activeNames: ['1'],
      checked1:false,
      checked2:false,
      checked3:false,
      checkedauthor:[],
      input1:"",
      input2:"",
      input3:"",
      input4:"",
      input5:"",
      now_page:1,
      num_exact_page:8,
      total: 0,//返回的检索结果的总量
      total_page:0,
      items:[
        {
          type:"期刊",
          title:"疫情冲击下2020年中国新经济形势与政策",
          author:"horik",
          time:"2020/9/23",
          institution:"北京航空航天大学",
          zhaiyao:"",
          tags:[
            "",
            "",
            "",
          ],
          numyin:0,
          numstore:0,
          id:"",
          authors:[]
        },
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
          authors:[]
        },
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
          authors:[]
        },
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
          authors:[]
        },
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
          authors:[]
        },
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
          authors:[]
        },
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
          authors:[]
        },
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
        }
      ],
      authors:[],
      institutions:[],
      publish_years:[],
      publishers:[],
      types:[],
      venues:[],
      tmp:0,
      if_authors:0,
      if_institutions:0,
      if_publish_years:0,
      if_publishers:0,
      if_types:0,
      if_venues:0,
      query:[],
      sort:0,
      asc:false,
    }
  },
  methods:{
    RegandRep(src, dst,pre,post) {
      // 对传入的字符串src进行不区分大小写的正则匹配,匹配dst，indexs中存匹配的所有位置
      // 例如：reg("abcabc", "bc") 返回1和4
      var reg = new RegExp(dst, "i");
      var indexs = [];
      var index = 0;
      while (index < src.length) {
        var match = reg.exec(src.slice(index));
        if (match) {
          indexs.push(index + match.index);
          index += match.index + 1;
        } else {
          break;
        }
      }
      if (indexs.length === 0) {
        return -1;
      }
      // 对匹配的位置进行处理，将匹配的位置前后插入字符串a和b
      var result = "";
      var last = 0;
      for (var i = 0; i < indexs.length; i++) {
        var len = dst.length
        var inner = src.slice(indexs[i], indexs[i] + len)
        result += src.slice(last, indexs[i]) + pre + inner + post;
        last = indexs[i] + dst.length;
      }
      result += src.slice(last);
      return result;
    },
    dosort(value){
      console.log("选择条件为: "+value);
      if(value===1){
        this.sort=1;
        this.asc = false;
        //this.openFullScreen2();
      }
      else if(value===2){
        this.sort=1;
        this.asc = true;
        //this.openFullScreen2();
      }
      else if(value===3){
        this.sort=2;
        this.asc = false;
        //this.openFullScreen2();
      }
      else if(value===4){
        this.sort=2;
        this.asc = true;
        //this.openFullScreen2();
      }
      else if(value===5){
        this.sort=0;
        this.asc = false;
        //this.openFullScreen2();
      }
      else if(value===6){
        this.sort=0;
        this.asc = true;
        //this.openFullScreen2();
      }
      this.search();
    },
    openFullScreen2() {//前端加载效果
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
      }, 1100);
    },
    jdetail(id){
      console.log("文章id为:");
      console.log(id);
      window.localStorage.setItem('WID',id);
      window.open('/paper_details');
    },
    choose_change(){
      console.log("shaixuan!");
      this.shaixuan();
    },
    shaixuan(){
      console.log(this.checklist_author[0]);
      var conds = {};
      conds = JSON.parse(sessionStorage.getItem('Cond'));
      //if(conds.author===undefined) {
      conds.author = this.checklist_author[0];
      //}
      if(conds.author!==undefined){
        this.if_authors=1;
      }
      else{
        this.if_authors=0;
      }
      //sessionStorage.setItem('if_authors',JSON.stringify(this.if_authors));
      //if(conds.type===undefined) {
      conds.type = this.checklist_types[0];
      console.log("当前选择的论文类型为:");
      console.log(this.checklist_types[0]);
      //}
      if(conds.type!==undefined){
        this.if_types=1;
      }
      else{
        this.if_types=0;
      }
      //sessionStorage.setItem('if_types',JSON.stringify(this.if_types));
      //if(conds.institution===undefined) {
      conds.institution = this.checklist_institutions[0];
      //}
      if(conds.institution!==undefined){
        this.if_institutions=1;
      }
      else{
        this.if_institutions=0;
      }
      //sessionStorage.setItem('if_institutions',JSON.stringify(this.if_institutions));
      //if(conds.publisher===undefined) {
      conds.publisher = this.checklist_publishers[0];
      //}
      if(conds.publisher!==undefined){
        this.if_publishers=1;
      }
      else{
        this.if_publishers=0;
      }
      //sessionStorage.setItem('if_publishers',JSON.stringify(this.if_publishers));
      //if(conds.venue===undefined) {
      conds.venue = this.checklist_venues[0];
      //}
      if(conds.venue!==undefined){
        this.if_venues=1;
      }
      else{
        this.if_venues=0;
      }
      //sessionStorage.setItem('if_venues',JSON.stringify(this.if_venues));
      //if(conds.publication_year===undefined) {
      if(this.checklist_publish_years[0]===undefined){
        conds.publication_year = undefined;
      }
      else {
        conds.publication_year = this.checklist_publish_years[0].toString();
      }
      //}
      if(conds.publication_year!==undefined){
        this.if_publish_years=1;
      }
      else{
        this.if_publish_years=0;
      }
      //sessionStorage.setItem('if_publish_years',JSON.stringify(this.if_publish_years));
      console.log("conds is:");
      console.log(conds);
      sessionStorage.setItem('Cond',JSON.stringify(conds));
      sessionStorage.setItem('now_page',JSON.stringify(1));
      this.now_page=1;
      //this.openFullScreen2();
      this.search();
      //window.location.reload();
    },
    handlechange(page){//处理跳转，page为当前选中的页面
      this.now_page=page;
      sessionStorage.setItem('now_page',JSON.stringify(page));
      //this.openFullScreen2();
      this.search();
    },
    search(){
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      var cond = JSON.parse(sessionStorage.getItem('Cond'));
      console.log(cond);

      var page = JSON.parse(sessionStorage.getItem('now_page'));
      console.log(page);
      var query = JSON.parse(sessionStorage.getItem('query'));
      var searchname1 = query[0].content;
      var searchname2 = query[1].content;
      var searchname3 = query[2].content;
      var pre = "<span style='color: red;'>";
      var pre1 = "<span style='color: blue;'>"
      var pre2 = "<span style='color: green;'>"
      var post = "</span>"
      console.log("query is");
      console.log(query);
      this.$axios({//注意是this.$axios
        method:'post',
        url:'/es/search/advanced',
        data:{//post请求这里是data
          asc:this.asc,
          conds:cond,
          page:page,
          size:8,
          sort:this.sort,
          query:query,
        }
      }).then(
          response =>{
            console.log(response.data.res);
            //console.log(response.data.res.hits.total.value);
            this.true_total_page = response.data.res.Hits;
            console.log("搜索得到文章总数为:"+this.true_total_page);
            this.total_page = response.data.res.Hits/8*10;
            this.tmp = response.data.res.Hits;
            //console.log(response.data.res.hits.hits.length);
            console.log(response.data.res.Aggs
            );
            //this.authors.length=0;
            if(response.data.res.Aggs.authors!==undefined) {
              var author_len = response.data.res.Aggs.authors.length;
              if(this.if_authors===0) {//如果本来没有选择这个条件就进行更新
                this.authors.length=0;
                for (var i = 0; i < author_len && i < 5; i++) {
                  var obj = {};
                  obj.key = response.data.res.Aggs.authors[i].key;
                  obj.ifchoose = false;
                  this.authors.push(obj);
                }
              }
            }

            //this.institutions.length=0;
            if(response.data.res.Aggs.institutions!==undefined) {
              var institution_len = response.data.res.Aggs.institutions.length;
              if(this.if_institutions===0) {
                this.institutions.length=0;
                for (var i = 0; i < institution_len && i < 5; i++) {
                  this.institutions[i] = response.data.res.Aggs.institutions [i].key;
                }
              }
            }
            //this.publish_years.length=0;

            if(response.data.res.Aggs.publication_years!==undefined) {
              var year_len = response.data.res.Aggs.publication_years.length;
              if(this.if_publish_years===0) {
                this.publish_years.length=0;
                for (var i = 0; i < year_len && i < 5; i++) {
                  this.publish_years[i] = response.data.res.Aggs.publication_years [i].key;
                }
              }
            }
            //this.publishers.length=0;

            if(response.data.res.Aggs.publishers!==undefined) {
              var publisher_len = response.data.res.Aggs.publishers.length;
              if(this.if_publishers===0) {
                this.publishers.length=0;
                for (var i = 0; i < publisher_len && i < 5; i++) {
                  this.publishers[i] = response.data.res.Aggs.publishers [i].key;
                }
              }
            }

            //this.venues.length=0;
            if(response.data.res.Aggs.venues!==undefined) {
              var venues_len = response.data.res.Aggs.venues.length;

              if(venues_len>0){
                //this.if_venues = 1;
              }
              if(this.if_venues===0) {
                this.venues.length=0;
                for (var i = 0; i < venues_len && i < 5; i++) {
                  this.venues[i] = response.data.res.Aggs.venues [i].key;
                  if(this.venues[i].length>28){//处理一下过长的摘要
                    //console.log(this.items[i].zhaiyao);
                    this.venues[i] = this.venues[i].substring(0,28)+"...";
                  }
                }
              }
            }

            //this.types.length=0;
            console.log("res types is");
            console.log(response.data.res.Aggs.types);
            console.log("if_types is "+this.if_types);
            if(response.data.res.Aggs.types!==undefined) {
              var types_len = response.data.res.Aggs.types.length;
              if(this.if_types===0) {
                this.types.length=0;
                for (var i = 0; i < types_len && i < 5; i++) {
                  this.types[i] = response.data.res.Aggs.types [i].key;
                }
              }
            }
            var len = 0;
            len = response.data.res.Works.length;
            this.num_exact_page = len;
            //console.log(response.data.res.hits.hits);
            for(var i=0;i<len;i++){
              //console.log(response.data.res.Works);
              this.items[i].id = response.data.res.Works[i].id;
              this.items[i].zhaiyao = response.data.res.Works[i].abstract;
              if(this.items[i].zhaiyao.length>400){//处理一下过长的摘要
                //console.log(this.items[i].zhaiyao);
                this.items[i].zhaiyao = this.items[i].zhaiyao.substring(0,400)+"...";
              }
              var oldzhaiyao = "";
              oldzhaiyao = this.items[i].zhaiyao;
              if(this.items[i].zhaiyao!=="") {
                this.items[i].zhaiyao = this.RegandRep(this.items[i].zhaiyao, searchname1, pre, post);
                if (this.items[i].zhaiyao === -1) {
                  this.items[i].zhaiyao = oldzhaiyao;
                }
              }
              if(searchname2!==undefined) {
                oldzhaiyao = this.items[i].zhaiyao;
                if (this.items[i].zhaiyao !== "") {
                  this.items[i].zhaiyao = this.RegandRep(this.items[i].zhaiyao, searchname2, pre1, post);
                  if (this.items[i].zhaiyao === -1) {
                    this.items[i].zhaiyao = oldzhaiyao;
                  }
                }
              }
              if(searchname3!==undefined) {
                oldzhaiyao = this.items[i].zhaiyao;
                if (this.items[i].zhaiyao !== "") {
                  this.items[i].zhaiyao = this.RegandRep(this.items[i].zhaiyao, searchname3, pre2, post);
                  if (this.items[i].zhaiyao === -1) {
                    this.items[i].zhaiyao = oldzhaiyao;
                  }
                }
              }
              this.items[i].title = response.data.res.Works[i].title;
              if(this.items[i].title.length>50){//处理一下过长的题目
                //console.log(this.items[i].zhaiyao);
                this.items[i].title = this.items[i].title.substring(0,50)+"...";
              }
              var oldtittle = "";
              oldtittle = this.items[i].title;
              this.items[i].title = this.RegandRep(this.items[i].title,searchname1,pre,post);
              if(this.items[i].title===-1){
                this.items[i].title = oldtittle;
              }
              if(searchname2!==undefined) {
                oldtittle = this.items[i].title;
                this.items[i].title = this.RegandRep(this.items[i].title, searchname2, pre1, post);
                if (this.items[i].title === -1) {
                  this.items[i].title = oldtittle;
                }
              }
              if(searchname3!==undefined) {
                oldtittle = this.items[i].title;
                this.items[i].title = this.RegandRep(this.items[i].title, searchname3, pre2, post);
                if (this.items[i].title === -1) {
                  this.items[i].title = oldtittle;
                }
              }
              console.log("title is :"+this.items[i].title);
              //console.log(this.items[i].id);
              if(response.data.res.Works[i].authorships.length!==0) {
                this.items[i].author = response.data.res.Works[i].authorships[0].author.display_name;
                var t = response.data.res.Works[i].authorships.length;
                if(t>4){
                  t=4;
                }
                for(var j=0;j<t;j++){
                  this.items[i].authors[j] = response.data.res.Works[i].authorships[j].author.display_name;
                }
              }
              else{
                this.items[i].author = "unknown"
              }
              this.items[i].institution = response.data.res.Works[i].host_venue.display_name;
              if(this.items[i].institution===null){
                this.items[i].institution = "无所属机构";
              }
              if(this.items[i].institution.length>50){
                //console.log(this.items[i].zhaiyao);
                this.items[i].institution = this.items[i].institution.substring(0,50)+"...";
              }
              this.items[i].time = response.data.res.Works[i].publication_date;
              for(var j=0;j<3&&j<response.data.res.Works[i].concepts.length;j++){
                this.items[i].tags[j] = response.data.res.Works[i].concepts[j].display_name;
              }
              this.items[i].type =  response.data.res.Works[i].type;
              if(this.items[i].type === null){
                this.items[i].type = "unknown"
              }
              this.items[i].numyin = response.data.res.Works[i].cited_by_count;
              //this.items[i].numstore = Math.ceil(Math.random()*100);
            }
            loading.close();
          }
      )
      window.scrollTo(0,0);//返回顶部
    }
  },
  created() {
    this.conds = JSON.parse(sessionStorage.getItem('Cond'));
    this.now_page = JSON.parse(sessionStorage.getItem('now_page'));
    this.query = JSON.parse(sessionStorage.getItem('query'));
    //this.openFullScreen2();
    this.search();
    /*if(this.total%4===0){
      this.total_page = this.total/8*10;
    }
    else{
      this.total_page = (this.total/8+1)*10;
    }*/
  }
}
</script>

<style scoped>
.all{
  width: 100vw;
  height: 310vh;
  background: linear-gradient(311.76deg, #D4E7FE -15.24%, #FFFFFF 78.85%);
}
.scroll-area::-webkit-scrollbar {
  width: 10px;
}
.collap-font{
  padding-left: 20%;
  padding-top: 1%;
  margin: 0 auto;
  text-align: center;

  font-family: "Plus Jakarta Sans";
  font-weight: 700;
  font-size: 18px;

  /* identical to box height, or 36px */

  letter-spacing: -0.01em;

  color: #217bf4;
  /* 设置背景色渐变 */
    background-image: linear-gradient(94.95deg, #217bf4 -3.46%, #4CD9ED 180.08%);
    /* 设置背景以文字进行裁切 */
    background-clip: text;
    -webkit-background-clip: text;
    /* 设置文本颜色透明以露出后面裁切成文本形状的渐变背景 */
    color: transparent;
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
.outcome-card {
  margin-top: 100px;
  margin: auto;
  padding: auto;
  width: 90%;
  height: 650px;

  background: #ffffff;
  box-shadow: 3px 3px 3px 3px rgba(107, 106, 106, 0.25);
  border-radius: 7px;
}
.item-type {
  margin: auto;
  padding:0vw,0.2vh;
  background: #217bf4;
  box-shadow: 0px 7px 22px -6px rgba(0, 72, 168, 0.34);
  border-radius: 9px;

  font-weight: 700;
  font-size: 14px;
  line-height: 4vh;
  text-align: center;
  letter-spacing: 0.01em;

  color: #ffffff;
}
.background{
  background-image: url(../../public/advanced_img/Frame 1.svg);
  background-size: 100%;
  position: relative;
  height: 75vh;
}
</style>
