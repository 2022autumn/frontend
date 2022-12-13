<template>
  <div class="key-total">
    <div class="title">相关领域</div>
    <div class="title-en">Keywords</div>
    <div class="box-set" v-infinite-scroll="load">
      <div class="keyword-box" v-for="(item,index) in keywords" :key="index">
        <div v-if="item.islike===true" style="cursor: pointer">
          <el-popover
              placement="bottom"
              width="280"
              height="500"
              trigger="hover"
          >
            <div style="height: 30px">
              <div style="margin-left: 10px;cursor: default;float: left"><b>关键词描述</b></div>
              <div class="follow_keyword" v-if="item.islike===false" @click="concern(item)">关注</div>
              <div class="unfollow_keyword" v-else @click="concern(item)">已关注</div>
            </div>
            <div
                style="width: 90%;left:50%;position:absolute;margin-left:-45%;height: 1px;background-color:rgba(217, 215, 215, 0.58)"></div>
            <div
                style="margin-top: 10px;width: 90%;word-break: break-word;text-align: left;margin-left: 5%;cursor: default">
              {{ detail }}
            </div>
            <div v-if="ifhasImage" style="width: 100%;text-align: center;margin-top: 10px">
              <img :src="image_thumbnail_url" alt="">
            </div>
            <div class="kk keyword1" @click="concern(item)" slot="reference" v-on:mouseenter="getDetail(item.id)">
              {{ item.display_name }}
            </div>
          </el-popover>
        </div>
        <div v-else style="cursor: pointer">
          <el-popover
              placement="bottom"
              width="280"
              height="500"
              trigger="hover"
          >
            <div style="height: 30px">
              <div style="margin-left: 10px;cursor: default;float: left"><b>关键词描述</b></div>
              <div class="follow_keyword" v-if="item.islike===false" @click="concern(item)">关注</div>
              <div class="unfollow_keyword" v-else @click="concern(item)">已关注</div>
            </div>
            <div
                style="width: 90%;left:50%;position:absolute;margin-left:-45%;height: 1px;background-color:rgba(217, 215, 215, 0.58)"></div>
            <div
                style="margin-top: 10px;width: 90%;word-break: break-word;text-align: left;margin-left: 5%;cursor: default">
              {{ detail }}
            </div>
            <div v-if="ifhasImage" style="width: 100%;text-align: center;margin-top: 10px">
              <img :src="image_thumbnail_url" alt="">
            </div>
            <div class="kk keyword" @click="concern(item)" slot="reference" v-on:mouseenter="getDetail(item.id)">
              {{ item.display_name }}
            </div>
          </el-popover>
        </div>

      </div>
    </div>
    <!--div class="line"></div>
    <div class="define-key">自定义标签</div>
    <div class="define-box-set">
      <div class="define-box" v-for="(item,index) in definekey" :key="index">
        <div class="self-define-box">
          <img src="../../assets/label.png" class="label">
          <div class="define">{{ item }}</div>
        </div>
      </div>
      <div class="define-box">
        <div class="add-self-define-box">
          <img src="../../assets/add.png" class="label">
          <div class="define">添加标签...</div>
        </div>
      </div>
    </div-->

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'keyword',
  mounted() {
    var wid = window.localStorage.getItem('WID')
    //console.log(wid)
    this.$axios({//注意是this.$axios
      method: 'get',
      url: '/es/get2',
      headers: {
        token: this.uid,
      },
      params: {
        id: window.localStorage.getItem('WID'),
        userid: this.uid
      }
    }).then(
        response => {
          this.keywords = response.data.data.concepts;
          console.log(response.data.data.concepts)
        }
    )

  },
  methods: {
    getDetail(id) {
      this.detail = "";
      this.image_thumbnail_url = "";
      this.ifhasImage = false;
      this.$axios({//注意是this.$axios
        method: 'get',
        url: '/es/get2',
        params: {
          id: id,
        }
      }).then(
          response => {
            this.detail = response.data.data.description;
            console.log(response.data.data);
            if (response.data.data.image_thumbnail_url !== null) {
              this.ifhasImage=true
              this.image_thumbnail_url = response.data.data.image_thumbnail_url;
            }
          }
      )
    },
    concern(item) {

      console.log(item.islike + this.uid)
      if (this.uid != null) {
        if (item.islike === false) {
          item.islike = true
        } else if (item.islike === true) {
          item.islike = false
        }
        console.log(item.display_name)
        this.$axios({//注意是this.$axios
          method: 'post',
          url: '/scholar/concept',
          headers: {
            //token:3,
            token: this.uid,
          },
          data: {//get请求这里是params
            concept_id: item.id,
            user_id: this.uid,
            //user_id: window.localStorage.getItem('SID'),
          }
        }).then(
            response => {
              console.log(response.data);
              console.log(response)
            }
        )
      } else {
        this.$message.error("请登录后再操作！");
        console.log("未登录");
      }
    }
  },
  data() {
    return {
      uid: window.localStorage.getItem('uid'),
      keywords: ["核电厂", "电厂设备", "电气贯穿件(EPA)", "延寿", "再鉴定",],
      definekey: ["经济报告", "疫情相关", "能源经济", "换行测试"],
      detail: "origin",
      image_thumbnail_url: "",
      ifhasImage: false,
    }
  }
}

</script>

<style scoped>
.key-total {
  position: absolute;
  width: 392px;
  height: 350px;
  top: 95px;
  background: #FFFFFF;
  box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

.title {
  position: absolute;
  height: 26px;
  width: 90px;
  top: 27px;
  left: 24px;
  font-family: Poppins;
  font-style: normal;
  font-size: 24px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.06em;
  text-align: left;
}

.title-en {
  position: absolute;
  width: 80px;
  height: 26px;
  left: 288px;
  top: 27px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  /* identical to box height, or 162% */
  letter-spacing: 0.02em;
  color: #928E8E;
}

.box-set {
  display: flex;
  position: relative;
  width: 385px;
  flex-wrap: wrap;
  padding-left: 10px;
  top: 71px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 265px;
  padding-bottom: 20px;
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

.keyword-box {
  display: flex;
  padding-top: 12px;
  padding-left: 20px;
  flex-wrap: wrap;
  align-items: flex-start;
}

.kk:hover {
  box-shadow: 0px 0px 8px #C1C9F0;
}

.keyword {
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
  cursor: pointer;
}

.keyword1 {
  border-radius: 2px;
  transition: 0.5s;
  display: flex;
  left: 15px;
  padding-top: 6px;
  padding-bottom: 4px;
  padding-left: 15px;
  padding-right: 18px;
  /*background: #858FA0;*/
  background: rgba(67, 127, 236, 0.66);
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
  cursor: pointer;
}

.line {
  position: relative;
  width: 340px;
  height: 0px;
  left: 28px;
  top: 24px;
  border-bottom: 1.4px solid rgba(217, 215, 215, 0.58);
  transform: rotate(0.09deg);
}

.define-key {
  position: relative;
  width: 90px;
  height: 26px;
  left: 24px;
  top: 40px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  /* identical to box height, or 162% */
  letter-spacing: 0.06em;
  color: #656363;
}

.define-box-set {
  position: relative;
  display: flex;
  width: 360px;
  top: 42px;
  left: 17px;
  flex-wrap: wrap;
  padding-bottom: 83px;
}

.define-box {
  display: flex;
}

.define {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  top: -1px;
  padding-left: 6.5px;
  padding-right: 13px;
  /* identical to box height, or 200% */
  letter-spacing: 0.06em;
  color: #8E8C8C;
}

.self-define-box {
  display: flex;
  box-sizing: border-box;
  position: relative;
  background: #FFFFFF;
  border: 1.5px dashed #B9B2B2;
  border-radius: 10px;
  margin-left: 11px;
  margin-top: 8px;
}

.add-self-define-box {
  display: flex;
  box-sizing: border-box;
  position: relative;
  background: #FFFFFF;
  border: 1.5px dashed #B9B2B2;
  border-radius: 10px;
  margin-left: 11px;
  margin-top: 8px;
  cursor: pointer;
}

.label {
  display: flex;
  padding-left: 9px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 15px;
  height: 15px;
}

.follow_keyword {
  background-color: #458CEB;
  width: 50px;
  float: left;
  margin-left: 110px;
  margin-top: -2px;
  height: 24px;
  color: #FFFFFF;
  line-height: 24px;
  vertical-align: center;
  text-align: center;
  font-size: 12px;
  letter-spacing: 1px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(27, 83, 158, 0.25);
}

.follow_keyword:hover {
  box-shadow: 0px 2px 4px rgba(27, 83, 158, 0.25);
  background-color: #82B7FF;
}

.unfollow_keyword {
  background-color: #F5F8FC;
  width: 58px;
  float: left;
  margin-left: 105px;
  margin-top: -2px;
  height: 24px;
  color: #72819B;
  line-height: 24px;
  vertical-align: center;
  text-align: center;
  font-size: 12px;
  letter-spacing: 1px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(118, 131, 191, 0.25);
}

.unfollow_keyword:hover {
  box-shadow: 0px 1px 4px rgba(118, 131, 191, 0.25);
  background-color: #D0DCEC;
}
</style>
