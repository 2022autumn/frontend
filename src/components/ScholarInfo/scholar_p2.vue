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
      <i id="editIcon"
         v-if="this.scholar.verified&&ismy"
          :class="{'el-icon-edit': !edit, 'el-icon-check': edit}"
          @click="this.editInfo"
      ></i>
    </div>
    <div class="border">
    </div>
    <div class="personal_info" v-show="!edit">
      {{this.scholar.intro}}
    </div>
    <el-input class="edit_info" v-show="edit" type="textarea" v-model="scholar.intro"></el-input>
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
      scholar: {},
      edit: false,
      description: "",
      institution: "No belonged institution",
      ismy: false,
    }
  },
  created() {
  },
  mounted() {
    let that = this;
    that.$axios({
      method: 'get',
      url: '/es/get2',
      params: {
        id: window.localStorage.getItem('SID'),
        // id: this.id
        // id: "A4220294553"
      },
      headers: {
        'token': parseInt(window.localStorage.getItem('uid'))
      },
    }).then(
        response => {
          // console.log("userinfo",response.data);
          this.info = response.data.data;
          this.scholar = response.data.info;
          this.ismy = response.data.info.is_mine;
          //console.log("get useInfo", this.info);
          //console.log("get data", response.data);info
          //console.log("get info", this.scholar);
          if(response.data.data.last_known_institution==null){
            let obj = new Object();
            obj.display_name ="no institution";
            this.info.last_known_institution= obj;
          }
          this.description="I’m "+this.info.display_name + ", I'm interested in areas like "+this.areas+", I'm working for " + this.info.last_known_institution.display_name + ". I've post "+this.info.most_cited_work+", which is my most-cited work. I'm looking for highly motivate students."
        //(this.description)
        }
    )

  },
  methods: {
    editInfo() {
      let that = this;
      if(this.edit === true) {
        that.$axios({
          method:'post',
          url:'/scholar/author/intro',
          data:{
            author_id: window.localStorage.getItem('SID'),
            intro: this.scholar.intro,
          },
          headers: {
            'token': parseInt(window.localStorage.getItem('uid'))
          },
        }).then(
            response=> {
              //(this.scholar.intro)
              this.$message({
                type:"success",
                message: response.data.msg,
                customClass:'messageIndex'
              })
            }
        ).catch((err) => {
          this.$message.error("学者尚未被认领");
          //console.log(err);
        });
      }
      this.edit = !this.edit;
    }
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
#editIcon {
  cursor: pointer;
  color: #4E86FF;
}
</style>