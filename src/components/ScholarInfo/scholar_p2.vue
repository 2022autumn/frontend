<template>
  <div class="scholar_p2">
    <div>
      <span class="scholar_name">
        {{this.info.display_name}}
    </span>
      <span class="scholar_institution">
        {{this.info.last_known_institution.display_name}}
    </span>
    </div>
    <div class="info_title">
      个人简介
      <i
          :class="{'el-icon-edit': !edit, 'el-icon-check': edit}"
          @click="edit = !edit"
      ></i>
    </div>
    <div class="border">
    </div>
    <div class="personal_info" v-show="!edit">
      {{this.description}}
<!--      I’m {{scholarInfo.display_name}}, I'm interested in areas like {{areas}}, I'm working for {{scholarInfo.last_known_institution?scholarInfo.last_known_institution.display_name:this.institution}}. I've post {{scholarInfo.most_cited_work}}, which is my most-cited work. I'm looking for highly motivate students.-->
    </div>
    <el-input class="edit_info" v-show="edit" type="textarea" v-model="description"></el-input>
<!--    <div class="info_bottom">-->
<!--      <el-button class="more_btn">-->
<!--        查看更多-->
<!--      </el-button>-->
<!--    </div>-->
  </div>
</template>
<script>
export default {
  name: "scholar_p2",
  props: {
    scholarInfo: {
      type: Object,
    },
    areas: ""
  },
  data() {
    return {
      info: {},
      edit: false,
      description: "",
      institution: "No belonged institution"
    }
  },
  mounted() {
    let that = this;
    that.$axios({
      method: 'get',
      url: '/es/get',
      params: {
        id: window.localStorage.getItem('SID'),
        // id: this.id
        // id: "A4220294553"
      }
    }).then(
        response => {
          // console.log("userinfo",response.data);
          this.info = response.data.data;
          console.log("get useInfo", this.info);
          if(response.data.data.last_known_institution.display_name===null){
            // this.info.last_known_institution=new Object();
            this.info.last_known_institution.display_name ="no institution";
          }
          this.description="I’m "+this.info.display_name + ", I'm interested in areas like "+this.areas+", I'm working for " + this.info.last_known_institution.display_name + ". I've post "+this.info.most_cited_work+", which is my most-cited work. I'm looking for highly motivate students."
        console.log(this.description)
        }
    )

  }
}
</script>
<style scoped>
.scholar_p2 {
  width: 558px;
  height: 621px;
  padding-top: 41px;
  padding-bottom: 24px;
  padding-left: 58px;
  padding-right: 45px;

  background: #FFFFFF;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.info_title {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
}
.border {
  width: 86px;
  height: 4px;
  margin-left: 5px;
  margin-top: 8px;
  background: #4E86FF;
}
.personal_info {
  max-height: 400px;
  overflow-y: auto;
  margin-top: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  /* or 161% */

  color: #606060;
}
.more_btn {
  float: right;
  width: 123px;
  height: 36px;
  margin-top: 20px;
  background: #4E86FF;
  color: #FFFFFF;
}

.scholar_name {
  float: left;
  position: relative;
  width: 100%;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
}
.scholar_institution {
  float: left;
  position: relative;
  width: 100%;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
}
.edit_info{
  height: 400px;
  overflow-y: auto;
  margin-top: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  /* or 161% */

  color: #606060;
  word-wrap: break-word;
  word-break: break-all;
  display: flex;
}
</style>