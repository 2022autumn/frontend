<template>
  <div style="margin-left: 0vw;margin-top:-15vh;">
        <div class="hot-list" style="margin-top: 100px">
          <div>&nbsp;</div>
          <div class="box-word" style="margin-left: 1%;">
            搜索内容
          </div>
          <div>
            <FilterBar ref="bar1"  :iftop="1" :logic="this.params0.logic" :field="this.params0.field" :content="this.params0.content"/>
          </div>
          <div>
            <FilterBar ref="bar2" :logic="this.params1.logic" :field="this.params1.field" :content="this.params1.content"/>
          </div>
          <div>
            <FilterBar ref="bar3" :logic="this.params2.logic" :field="this.params2.field" :content="this.params2.content"/>
          </div>
          <div>
            <FilterBar ref="bar4" :logic="this.params3.logic" :field="this.params3.field" :content="this.params3.content"/>
          </div>
          <div>
            <FilterBar ref="bar5" :logic="this.params4.logic" :field="this.params4.field" :content="this.params4.content"/>
          </div>
          <!--<div class="box-word" style="margin-top: 4%;margin-left: 6%;">
            设定时间范围
          </div>-->
          <!--<div style="margin-left: 15%;margin-top: 3%;">
              <el-checkbox v-model="checked4">
                  <div style="display: inline-block;font-size:15px;">
                      <b>&nbsp;&nbsp&nbsp最早发表时间&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</b>
                  </div>
                  <div style="width: 7vw;display: inline-block">
                      <el-input v-model="input1" placeholder="" size="mini" ></el-input>
                  </div>
                  <div style="display: inline-block;font-size:15px;">
                      <b>&nbsp;&nbsp年&nbsp&nbsp&nbsp</b>
                  </div>
                  <div style="width: 7vw;display: inline-block">
                      <el-input v-model="input1" placeholder="" size="mini" ></el-input>
                  </div>
                  <div style="display: inline-block;font-size:15px;">
                      <b>&nbsp;&nbsp月&nbsp</b>
                  </div>
              </el-checkbox>
          </div>
          <div style="margin-left: 15%;margin-top: 2%;">
              <el-checkbox v-model="checked5">
              <div style="display: inline-block;font-size:15px;">
                  <b>&nbsp;&nbsp&nbsp发表时间范围&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</b>
              </div>
              <div style="width: 5vw;display: inline-block">
                  <el-input v-model="input2" placeholder="" size="mini"></el-input>
              </div>
              <div style="display: inline-block;font-size:15px;">
                  <b>&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;</b>
              </div>
              <div style="width: 5vw;display: inline-block">
                  <el-input v-model="input3" placeholder="" size="mini"></el-input>
              </div>
              <div style="display: inline-block;font-size:15px;">
                  <b>&nbsp;月&nbsp;&nbsp;~&nbsp;&nbsp;</b>
              </div>
              <div style="width: 5vw;display: inline-block">
                  <el-input v-model="input3" placeholder="" size="mini"></el-input>
              </div>
              <div style="display: inline-block;font-size:15px;">
                  <b>&nbsp;&nbsp;年&nbsp;&nbsp;</b>
              </div>
              <div style="width: 5vw;display: inline-block">
                  <el-input v-model="input3" placeholder="" size="mini"></el-input>
              </div>
              <div style="display: inline-block;font-size:15px;">
                  <b>&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;</b>
              </div>
              </el-checkbox>
          </div>
          <div style="margin-left: 15%;margin-top: 2%;">
              <el-checkbox v-model="checked6">
              <div style="display: inline-block;font-size:15px;">
                  <b>&nbsp;&nbsp&nbsp最晚发表时间&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</b>
              </div>
              <div style="width: 5vw;display: inline-block">
                  <el-input v-model="input4" placeholder="" size="mini"></el-input>
              </div>
              <div style="display: inline-block;font-size:15px;">
                  <b>&nbsp;&nbsp;年&nbsp;&nbsp;</b>
              </div>
              <div style="width: 5vw;display: inline-block">
                  <el-input v-model="input3" placeholder="" size="mini"></el-input>
              </div>
              <div style="display: inline-block;font-size:15px;">
                  <b>&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;</b>
              </div>
              </el-checkbox>
          </div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>-->
          <div style="height: 2vh"></div>
          <div>
            <el-button  style="display:block;margin:0 auto" class="search-button" @click="search">搜索</el-button>
          </div>
        </div>
  </div>
</template>

<script>
import Topbar2 from "@/components/topbar2";
import Topbar1 from "@/components/topbar1";
import FilterBar from "@/components/filterBar";
export default {
  name: "advanced_search",
  components: {Topbar2, Topbar1,FilterBar},
  data() {
    return {
      options: [{
        value: '选项1',
        label: '作者'
      }, {
        value: '选项2',
        label: '标题'
      }, {
        value: '选项3',
        label: '关键字'
      }, {
        value: '选项4',
        label: '摘要'
      }, {
        value: '选项5',
        label: '作者单位'
      }, {
        value: '选项5',
        label: 'DOI'
      }],
      value: '',
      query:[],
      input:"",
      logicstate:1,
      params0:{},
      params1:{},
      params2:{},
      params3:{},
      params4:{},
    };
  },
  methods: {
    handleClick() {
      alert('button click');
    },
    search(){
      //console.log(this.$refs.bar1.value1);
      //console.log(this.$refs.bar1.input);
      //console.log(this.$refs.bar1.value);
      var case1 = {};
      case1.field = this.$refs.bar1.value;
      case1.content = this.$refs.bar1.input;
      case1.logic = "and";
      //console.log(case1);
      var case2 = {};
      case2.field = this.$refs.bar2.value;
      case2.content = this.$refs.bar2.input;
      case2.logic = this.$refs.bar2.value1;
      //console.log(case2);
      var case3 = {};
      case3.field = this.$refs.bar3.value;
      case3.content = this.$refs.bar3.input;
      case3.logic = this.$refs.bar3.value1;
      var case4 = {};
      case4.field = this.$refs.bar4.value;
      case4.content = this.$refs.bar4.input;
      case4.logic = this.$refs.bar4.value1;
      var case5 = {};
      case5.field = this.$refs.bar5.value;
      case5.content = this.$refs.bar5.input;
      case5.logic = this.$refs.bar5.value1;
      // console.log(case3);
      this.query.length=0;
      this.query.push(case1);
      this.query.push(case2);
      this.query.push(case3);
      this.query.push(case4);
      this.query.push(case5);
      console.log("component query is:");
      console.log(this.query);
      sessionStorage.setItem('query',JSON.stringify(this.query));
      window.location.reload();
    }
  },
  // 挂载时获取
  mounted() {
  },
  created() {
    var query = JSON.parse(sessionStorage.getItem('query'));
    this.params0 = query[0];
    this.params1 = query[1];
    this.params2 = query[2];
    this.params3 = query[3];
    this.params4 = query[4];
    console.log("wait params is:");
    console.log(this.params0);
    console.log(this.params1);
    console.log(this.params2);
    console.log(this.params3);
    console.log(this.params4);
  }
}
</script>

<style>
.el-col {
  border-radius: 4px;
}
.row-bg {
  padding: 10px 0;
  background-color: #9ac746;
}
.el-header{
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.title-text {
  /* margin-left: 10%; */
  margin-top: 30px;
  /* margin-bottom: 20px; */

  /* text-align: left; */
  font-weight: 700;
  font-size: 50px;
  line-height: 48px;
  /* or 118% */

  color: #0a093d;
}
.hot-list {
  margin-top: 100px;
  margin: auto;
  padding: auto;
  width: 60%;
  height: 75vh;

  background: #ffffff;
  box-shadow: 5px 5px 5px 5px rgba(114, 112, 112, 0.25);
  border-radius: 24px;
}
.background{
  width: 100%;
  height: 600px;
  /*background: linear-gradient(
      0deg,
      rgba(225, 233, 245, 0) 1.63%,
      #f1f6fd 20.5%,
      #f1f6fd 58.57%,
      #ffffff 100%
  );*/

  padding-top: 30px;
  padding-right: 10px;
  padding-left: 10px;
}
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.logic-button{
  float: right;
  margin: auto;
  width: 98px;
  height: 42px;
  background: linear-gradient(94.95deg, #437FEC -43.46%, #4CD9ED 128.08%);
  box-shadow: 0px 0px 6px rgba(153, 166, 213, 0.57);
  border-radius: 19px;
  color: #FFFFFF;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.box-word {
  margin-top: 5px;
  width: 193px;
  height: 30px;

  font-weight: 700;
  font-size: 17px;
  line-height: 30px;
  color: #333;
  text-align: center;
  letter-spacing: 0.01em;
}
.search-button{
  width: 198px;
  height: 42px;
  background: linear-gradient(94.95deg, #437FEC -43.46%, #4CD9ED 128.08%);
  box-shadow: 0px 0px 6px rgba(153, 166, 213, 0.57);
  border-radius: 19px;
  color: #FFFFFF;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  justify-content: center;
}
</style>
