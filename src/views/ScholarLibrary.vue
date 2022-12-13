<template>
  <div>
    <Topbar1 style="z-index: 100000"></Topbar1>
    <div class="main_body">
      <img src="../assets/ScholarLibrary/background-full1.png"
           style="margin-left: 0vw;width: 100%;z-index:100;position:absolute;" v-if="!ifSearch">
      <div class="search_part" style="width: 100%;">
        <img src="../assets/ScholarLibrary/background1.png"
             style="margin-left: 0vw;width: 100%;z-index:0;position:relative">
        <div class="search_title">
          <div class="text_sample1">这里集结了&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位学者</div>
          <div class="text_sample2">216,389,416</div>
        </div>
        <div class="search_box">
          <input class="search_input" @keyup.enter="search" placeholder="输入学者名称进行搜索..." v-model="search_word"></input>
          <div class="search_button" v-on:click="search">
            <img src="../assets/ScholarLibrary/search.png"
                 style="margin-left: 0vw;margin-top:10px;height: 30px">
          </div>
        </div>
      </div>
      <div class="result_title" v-if="ifSearch">
        <div class="title_line"></div>
        <div class="text_sample3">搜索结果</div>
        <div class="title_line"></div>
      </div>
      <div class="result_area">
        <div class="cards" style="min-height: 185vh" v-if="ifSearch">
        <div class="scholar_card" v-for="item in items" v-on:click="jumpToScholar(item.id)">
          <div class="scholar_avatar">
            <img :src="item.headshot" alt="">
          </div>
          <div class="scholar_name">{{ item.display_name }}</div>
          <div class="institution_name">{{ item.last_known_institution }}</div>
          <div class="otherInformation">
            <div class="scholar_work">
              <img src="../assets/ScholarLibrary/work.png" style="float: left">
              <div class="text_sample4">作品数</div>
              <div class="text_sample5">{{ item.works_count }}</div>
            </div>
            <div class="vertical_line" style="float:left;margin-left: 2vh"></div>
            <div class="scholar_cite " style="float:left;margin-left: 5vh">
              <img src="../assets/ScholarLibrary/quota.png" style="float: left;margin-top: -2px">
              <div class="text_sample4">被引用数</div>
              <div class="text_sample5">{{ item.cited_by_count }}</div>
            </div>
          </div>
        </div>
        </div>
        <div class="change_page" style="width: 100%;text-align: center;margin-bottom: 5vh" v-if="ifSearch">
          <el-pagination class="pages"
                         layout="prev, pager, next"
                         :total=this.total_page
                         @current-change="handlechange"
                         :current-page=this.now_page
                         background
          >
          </el-pagination>
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
  data() {
    return {
      ifSearch: false,
      search_word: "",
      total_page: 6,
      now_page: 1,
      items: [],
      real_word:"",
    }
  },
  methods: {
    handlechange(page){//处理跳转，page为当前选中的页面
      this.now_page = page;
      //this.openFullScreen2();
      this.search0();
    },
    search() {
      console.log(this.search_word);
      this.ifSearch = true;
      this.real_word=this.search_word;
      this.$axios({
        method: 'get',
        url: '/es/search/author2',
        params: {
          query_word: this.search_word,
          page: this.now_page,
          size: 6
        }
      }).then(
          response => {
            console.log(response.data.res.hits);
            var x=response.data.res.hits/6;
            console.log(x);
            this.total_page=response.data.res.hits/6*10;
            this.items = response.data.res.works;
            console.log(this.items);
            for (var i = 0; i < 6; i++) {
              if (i<this.items.length) {
                if (this.items.at(i).last_known_institution === null) {
                  this.items.at(i).last_known_institution = "No Institution"
                } else {
                  this.items.at(i).last_known_institution = this.items.at(i).last_known_institution.display_name;
                }
                this.items.at(i).headshot="https://ishare.horik.cn/api/media/headshot/"+this.items.at(i).headshot;
                console.log(this.items.at(i).headshot);
              }
            }
           // this.search_word = null;
          }
      )
    },
    search0() {
      document.body.scrollTop=140;
      document.documentElement.scrollTop=140;
      console.log(this.search_word);
      this.ifSearch = true;
      this.$axios({
        method: 'get',
        url: '/es/search/author2',
        params: {
          query_word: this.real_word,
          page: this.now_page,
          size: 6
        }
      }).then(
          response => {
            console.log(response.data);
            this.items = response.data.res.works;
            console.log(this.items);
            for (var i = 0; i < 6; i++) {
              if (i<this.items.length) {
                if (this.items.at(i).last_known_institution === null) {
                  this.items.at(i).last_known_institution = "No Institution"
                } else {
                  this.items.at(i).last_known_institution = this.items.at(i).last_known_institution.display_name;
                }
                this.items.at(i).headshot="https://ishare.horik.cn/api/media/headshot/"+this.items.at(i).headshot;
              }
            }

          }
      )
    },
    jumpToScholar(id) {
      window.localStorage.setItem('SID', id);
      window.open('/scholar_page');
    }
  }
}
</script>

<style scoped>
.main_body {
  width: 100%;
}

.search_title {
  z-index: 15000;
  width: 800px;
  margin-top: -310px;
  position: absolute;
  left: 50%;
  margin-left: -400px;
  text-align: center;
}

.text_sample1 {
  color: #FFFFFF;
  font-family: Inter;
  font-size: 34px;
  font-weight: 600;
}

.text_sample2 {
  /*style="text-shadow: 0 0 10px #D4E7FE,0 0 20px #D4E7FE;"*/
  font-style: normal;
  font-weight: 600;
  font-size: 53px;
  color: #0352FF;
  margin-left: 60px;
  margin-top: -64px;
}

.search_box {
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

.search_input {
  height: 50px;
  width: 567px;
  margin-left: -3px;
  padding-left: 15px;

}

.search_button {
  height: 100%;
  width: 70px;
  background: #0352FF;
  float: right;
  cursor: pointer;
}

.result_title {
  position: absolute;
  width: 380px;
  left: 50%;
  margin-left: -190px;
  text-align: center;
  margin-top: 28px;
}

.title_line {
  width: 87px;
  height: 2px;
  border: 1px solid #0352FF;
  float: left;
  margin-top: 16px;
}

.text_sample3 {
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

.result_area {
  margin-top: 100px;
}

.scholar_card {
  width: 150vh;
  height: 25vh;
  margin-left: 30vh;
  margin-bottom: 6vh;
  background: #FFFFFF;
  box-shadow: 0px 1px 22px rgba(167, 167, 167, 0.25);
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
}
.scholar_card:hover {
  width: 150vh;
  height: 25vh;
  margin-left: 30vh;
  margin-bottom: 6vh;
  background: #FFFFFF;
  box-shadow: 0px 1px 8px rgba(167, 167, 167, 0.25);
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
}

.scholar_avatar {
  width: 17vh;
  height: 17vh;
  margin-left: 8vh;
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

.scholar_name {
  width: 96vh;
  height: 38px;
  float: left;
  overflow: hidden;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 40px;
  text-align: left;
  margin-left: 6vh;
  margin-top: 5vh;
}

.institution_name {
  width: 90vh;
  height: 5vh;
  float: left;
  margin-left: 6vh;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  color: #6D6D6D;
}

.otherInformation {
  width: 65vh;
  float: left;
  margin-left: 60vh;
  margin-top: 2.5vh;
  overflow: hidden;
}

.text_sample4 {
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

.text_sample5 {
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

.vertical_line {
  height: 26px;
  width: 2px;
  background-color: rgba(109, 109, 109, 0.55);
  float: left;
  margin-top: -3px;
}

.pages {
  margin-top: 3vh;
}
</style>
