<template>
    <div>
        <topbar1></topbar1>
        <el-row style="height: 600px" class="background">
            <el-col :span="5">
                <div class="left-img" style="margin-top: 8vh; margin-left: 35%;">
                    <img preview-disabled style="width:30vw;"
                        src="../../public/advanced_img/Advanced Search.svg"
                    />
                </div>
                <div class="title-text" style="margin-top: 4vh; margin-left: 35% ">
                    高级检索
                </div>
                 <div class="left-img" style="margin-top: 10vh; margin-left: 10%;">
                    <img preview-disabled style="width:30vw;"
                        src="../../public/advanced_img/illustration1.svg"
                    />
                </div>
            </el-col>
            <el-col :span="17">
                <div class="hot-list" style="margin-top: 15vh">
                    <div>&nbsp;</div>
                    <div class="box-word" style="margin-left: 4%;">
                            搜索内容
                    </div>
                    <div>
                      <div>
                        <el-row :gutter="0" style="margin-top: 10px;">
                          <el-col :span="22">
                            <FilterBar ref="bar1" :iftop="1" v-show="total_num>0"/>
                          </el-col>
                          <el-col :span="1" style="margin-top: 16px;">
                            <i class="el-icon-plus" style="display: inline-block;float: left;" @click="addNum" v-show="total_num>0"></i>
                          </el-col>
                          <el-col :span="1" style="margin-top: 16px;">
                            <i class="el-icon-minus" style="display: inline-block;float: left;" @click="minuNum" v-show="total_num>0"></i>
                          </el-col>
                        </el-row>
                      </div>
                      
                    </div>
                    <div>
                      <el-row :gutter="0" style="margin-top: 10px;">
                        <el-col :span="22">
                          <FilterBar ref="bar2" v-show="total_num>1"/>
                        </el-col>
                        <el-col :span="1" style="margin-top: 16px;">
                          <i class="el-icon-plus" style="display: inline-block;float: left;" @click="addNum"  v-show="total_num>1"></i>
                        </el-col>
                        <el-col :span="1" style="margin-top: 16px;">
                          <i class="el-icon-minus" style="display: inline-block;float: left;" @click="minuNum" v-show="total_num>1"></i>
                        </el-col>
                      </el-row>
                    </div>
                    <div>
                      <el-row :gutter="0" style="margin-top: 10px;">
                        <el-col :span="22">
                          <FilterBar ref="bar3" v-show="total_num>2"/>
                        </el-col>
                        <el-col :span="1" style="margin-top: 16px;">
                          <i class="el-icon-plus" style="display: inline-block;float: left;" @click="addNum" v-show="total_num>2"></i>
                        </el-col>
                        <el-col :span="1" style="margin-top: 16px;">
                          <i class="el-icon-minus" style="display: inline-block;float: left;" @click="minuNum" v-show="total_num>2"></i>
                        </el-col>
                      </el-row>
                    </div>
                  <div>
                    <el-row :gutter="0" style="margin-top: 10px;">
                      <el-col :span="22">
                        <FilterBar ref="bar4" v-show="total_num>3"/>
                      </el-col>
                      <el-col :span="1" style="margin-top: 16px;">
                        <i class="el-icon-plus" style="display: inline-block;float: left;" @click="addNum" v-show="total_num>3"></i>
                      </el-col>
                      <el-col :span="1" style="margin-top: 16px;">
                        <i class="el-icon-minus" style="display: inline-block;float: left;" @click="minuNum" v-show="total_num>3"></i>
                      </el-col>
                    </el-row>
                  </div>
                  <div>
                    <el-row :gutter="0" style="margin-top: 10px;">
                      <el-col :span="22">
                        <FilterBar ref="bar5" v-show="total_num>4" />
                      </el-col>
                      <el-col :span="1" style="margin-top: 16px;">
                        <i class="el-icon-plus" style="display: inline-block;float: left;" @click="addNum" v-show="total_num>4"></i>
                      </el-col>
                      <el-col :span="1" style="margin-top: 16px;">
                        <i class="el-icon-minus" style="display: inline-block;float: left;" @click="minuNum" v-show="total_num>4"></i>
                      </el-col>
                    </el-row>
                  </div>
                   <div class="box-word" style="margin-top: 4%;margin-left: 6%;">
                            设定时间范围
                    </div>
                    <div style="margin-left: 15%;margin-top: 2%;">

                        <!--<div style="display: inline-block;font-size:15px;">
                            <b>&nbsp;&nbsp&nbsp时间范围(请输入年-月-日)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</b>
                        </div>-->
                        <div style="display: inline-block;margin-left: 3vw">
                          <el-date-picker
                              v-model="start"
                              type="date"
                              placeholder="选择日期"
                              size="small"
                              value-format='yyyy-MM-dd'
                              >
                          </el-date-picker>
                        </div>
                        <div style="display: inline-block;font-size: 25px;margin-left: 3vw">~</div>
                        <div style="display: inline-block;margin-left: 3vw">
                          <el-date-picker
                              v-model="end"
                              type="date"
                              placeholder="选择日期"
                              size="small"
                              value-format='yyyy-MM-dd'
                          >
                          </el-date-picker>
                        </div>
                    </div>
                    <div>
                      &nbsp
                    </div>
                    <div>
                        <el-button  style="display:block;margin:0 auto" class="search-button" @click="search">搜索</el-button>
                    </div>

                </div>
            </el-col>
            <el-col :span="3">
              <div>
                &ensp;
              </div>
            </el-col>
        </el-row>
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
        total_num:1,
        start:'',
        end:'',
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
        tiaojian:[],
    };
  },
  methods: {
    addNum(){
      this.total_num++;
      console.log("total_num",this.total_num)
    },
    minuNum(){
      this.total_num--;
      console.log("total_num",this.total_num)
    },
    handleClick() {
        alert('button click');
      },
    search(){
      var cond = {};
      sessionStorage.setItem('total_filter',JSON.stringify(this.total_num));
      sessionStorage.setItem('Cond',JSON.stringify(cond));
      sessionStorage.setItem('now_page',JSON.stringify(1));
      sessionStorage.setItem('start', this.start);
      sessionStorage.setItem('end', this.end);
      //console.log(this.$refs.bar1.value1);
      //console.log(this.$refs.bar1.input);
      //console.log(this.$refs.bar1.value);
      this.tiaojian.push(this.$refs.bar1.value2);
      this.tiaojian.push(this.$refs.bar2.value2);
      this.tiaojian.push(this.$refs.bar3.value2);
      this.tiaojian.push(this.$refs.bar4.value2);
      this.tiaojian.push(this.$refs.bar5.value2);
      sessionStorage.setItem('tiaojian',JSON.stringify(this.tiaojian))
      var case1 = {};
      case1.field = this.$refs.bar1.value;
      case1.content = this.$refs.bar1.input;
      case1.logic = "and";
      //tiaojian.push(this.$refs.bar1.value2);
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
     // console.log(case3);
      var case4 = {};
      case4.field = this.$refs.bar4.value;
      case4.content = this.$refs.bar4.input;
      case4.logic = this.$refs.bar4.value1;
      var case5 = {};
      case5.field = this.$refs.bar5.value;
      case5.content = this.$refs.bar5.input;
      case5.logic = this.$refs.bar5.value1;
      var case6 = {};
      console.log(this.start)
      console.log(this.end)
      this.query.length=0;
      this.query.push(case1);
      this.query.push(case2);
      this.query.push(case3);
      this.query.push(case4);
      this.query.push(case5);
      if(this.start!==''&&this.end!==''){
        case6.field = "publication_date";
        case6.begin = this.start;
        case6.end = this.end;
        case6.logic = "and";
        this.query.push(case6);
      }
      console.log(this.query);
      sessionStorage.setItem('query',JSON.stringify(this.query));
      this.$router.push('/advanced_outcome');
    }
  },
  // 挂载时获取
  mounted() {
  },
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
  margin-top: 0px;
  /* margin-bottom: 20px; */

  /* text-align: left; */
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  /* or 118% */

  color: #0a093d;
}
.hot-list {
  margin-top: 0px;
  margin: auto;
  padding: auto;
  width: 90%;
  height: 75vh;

  background: #ffffff;
  box-shadow: 7px 7px 7px 7px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
}
.background{
    width: 100%;
    height: 600px;
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
  margin-top: 15px;
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
    margin-bottom:100vh;
    margin-left:0 auto;
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
