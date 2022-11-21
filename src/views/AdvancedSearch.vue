<template>
    <div>
        <topbar2></topbar2>
        <el-row style="height: 600px" class="background">
            <el-col :span="10">
                <div class="left-img" style="margin-top: 100px; margin-left: 30%">
                    <img preview-disabled
                        src="../../public/advanced_img/Advanced Search.svg"
                    />
                </div>
                <div class="title-text" style="margin-top: 50px; margin-left: 30%">
                    高级检索
                </div>
                 <div class="left-img" style="margin-top: 70px; margin-left: 30%">
                    <img preview-disabled
                        src="../../public/advanced_img/illustration1.svg"
                    />
                </div>
            </el-col>
            <el-col :span="14">
                <div class="hot-list" style="margin-top: 150px">
                    <div>&nbsp;</div>
                    <div class="box-word" style="margin-left: 4%;">
                            搜索内容
                    </div>
                    <div>
                        <FilterBar/>
                    </div>
                    <div>
                        <FilterBar/>
                    </div>
                    <div>
                        <FilterBar/>
                    </div>
                    <div class="box-word" style="margin-top: 4%;margin-left: 6%;">
                            设定时间范围
                    </div>
                    <div style="margin-left: 15%;margin-top: 3%;">
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
                    <div>&nbsp;</div>
                    <div>
                        <el-button  style="display:block;margin:0 auto" class="search-button">搜索</el-button>
                    </div>
                    
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
        value: ''
    };
  },
  methods: {
    handleClick() {
        alert('button click');
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
  margin-top: 30px;
  /* margin-bottom: 20px; */

  /* text-align: left; */
  font-weight: 700;
  font-size: 65px;
  line-height: 48px;
  /* or 118% */

  color: #0a093d;
}
.hot-list {
  margin-top: 100px;
  margin: auto;
  padding: auto;
  width: 90%;
  height: 650px;

  background: #ffffff;
  box-shadow: 7px 7px 7px 7px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
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
  margin-top: 25px;
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