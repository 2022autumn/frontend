<template>
  <div>
  <Topbar1 style="z-index: 100000"></Topbar1>
  <div class="main_body">
    <div class="search_part" style="width: 100%;padding-top: 8vh">
      <img src="../assets/ScholarLibrary/background.png"
           style="margin-left: 0vw;width: 100%;z-index:0;position:relative">
      <div class="search_title">
        <div class="text_sample1">这里集结了&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位学者</div>
        <div class="text_sample2">1000+</div>
      </div>
      <div class="search_box" >
        <input class="search_input" placeholder="输入学者名称进行搜索..."></input>
        <div class="search_button">
          <img src="../assets/ScholarLibrary/search.png"
               style="margin-left: 0vw;margin-top:10px;height: 30px">
        </div>
      </div>
    </div>
    <div class="result_title">
      <div class="title_line"></div>
      <div class="text_sample3">搜索结果</div>
      <div class="title_line"></div>
    </div>
    <div class="result_area">
      <div class="scholar_card" v-for="item in items">
        <div class="scholar_avatar">
          <img src="../assets/ScholarLibrary/temp_avar.png" alt="">
        </div>
        <div class="scholar_name">Dimitra Psychogiou</div>
        <div class="institution_name">Institution Name</div>
        <div class="otherInformation">
        <div class="scholar_work">
          <img src="../assets/ScholarLibrary/work.png" style="float: left">
          <div class="text_sample4">作品数</div>
          <div class="text_sample5">28</div>
        </div>
          <div class="vertical_line" style="float:left;margin-left: 2vh"></div>
          <div class="scholar_cite " style="float:left;margin-left: 5vh">
            <img src="../assets/ScholarLibrary/quota.png" style="float: left;margin-top: -2px">
            <div class="text_sample4">被引用数</div>
            <div class="text_sample5">1228</div>
          </div>
      </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

import Topbar1 from "@/components/topbar1";
export default {
  name: "ScholarLibrary",
  components: {Topbar1},
  data(){
    return{
      items:[
        {
          s_id:"1",
          s_name:"Dimitra Psychogiou",
          s_insititution:"IRELAND",
          s_worknum:"29",
          s_citenum:"231"
        },
        {
          s_id:"2",
          s_name:"Kazuya Takeda",
          s_insititution:"JAPAN",
          s_worknum:"292",
          s_citenum:"2231"
        },
        {
          s_id:"3",
          s_name:"Sambit Bakshi",
          s_insititution:"INDIA",
          s_worknum:"92",
          s_citenum:"2131"
        },
        {
          s_id:"1",
          s_name:"Dimitra Psychogiou",
          s_insititution:"IRELAND",
          s_worknum:"29",
          s_citenum:"231"
        },
        {
          s_id:"1",
          s_name:"Dimitra Psychogiou",
          s_insititution:"IRELAND",
          s_worknum:"29",
          s_citenum:"231"
        },
        {
          s_id:"1",
          s_name:"Dimitra Psychogiou",
          s_insititution:"IRELAND",
          s_worknum:"29",
          s_citenum:"231"
        },
      ]
    }
  }
}
</script>

<style scoped>
.main_body{
  width: 100%;
}
.search_title{
  z-index: 15000;
  width: 800px;
  margin-top: -310px;
  position: absolute;
  left: 50%;
  margin-left: -400px;
  text-align: center;
}
.text_sample1{
  color: #FFFFFF;
  font-family: Inter;
  font-size: 34px;
  font-weight: 600;
}
.text_sample2{
  font-style: normal;
  font-weight: 600;
  font-size: 53px;
  color: #0352FF;
  margin-left:60px ;
  margin-top:-64px;
}
.search_box{
  width: 634px;
  height: 50px;
  z-index: 10000;
  text-align: center;
  position: absolute;
  left: 50%;
  margin-left: -317px;
  margin-top: -250px;
  background: #FFFFFF;
  border-radius: 6px;
  overflow: hidden;
}
.search_input{
   height: 50px;
   width:567px;
  margin-left: -3px;
  padding-left: 15px;

}
.search_button{
  height: 100%;
  width: 70px;
  background:#0352FF;
  float: right;
  cursor: pointer;
}
.result_title{
  position: absolute;
  width: 380px;
  left: 50%;
  margin-left: -190px;
  text-align: center;
  margin-top: 28px;
}
.title_line{
  width: 87px;
  height: 2px;
  border: 1px solid #0352FF;
  float: left;
  margin-top: 16px;
}
.text_sample3{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 36px;
  color: #0352FF;
  float: left;
  text-align: center;
  width: 200px;
}
.result_area{
  margin-top: 120px;
}
.scholar_card{
  width: 150vh;
  height:25vh;
  margin-left: 30vh;
  margin-bottom: 6vh;
  background: #FFFFFF;
  box-shadow: 0px 1px 22px rgba(167, 167, 167, 0.25);
  border-radius: 6px;
  overflow: hidden;
}
.scholar_avatar{
  width: 17vh;
  height: 17vh;
  margin-left:8vh;
  margin-top: 4vh;
  overflow: hidden;
  float: left;
}
.scholar_avatar img {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -43%);
  margin: 0 auto;
  width: 100%;
}
.scholar_name{
  width: 90vh;
  float: left;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 40px;
  text-align: left;
  margin-left: 6vh;
  margin-top: 5vh;
}
.institution_name{
  width: 90vh;
  float: left;
  margin-left: 6vh;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  color: #6D6D6D;
}
.otherInformation{
  width: 65vh;
  float: left;
  margin-left: 60vh;
  margin-top: 1vh;
  overflow: hidden;
}
.text_sample4{
  float: left;
  margin-left: 12px;
  margin-top: 4px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 14px;
  text-align: left;
  color: #6D6D6D;
  letter-spacing: 1px;
}
.text_sample5{
  width: 8vh;
  float: left;
  margin-left: 12px;
  margin-top: 4px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 14px;
  text-align: left;
  color: #6D6D6D;
  letter-spacing: 1px;
}
.vertical_line{
  height: 26px;
  width: 2px;
  background-color: rgba(109, 109, 109, 0.55);
  float: left;
  margin-top: -3px;
}
</style>