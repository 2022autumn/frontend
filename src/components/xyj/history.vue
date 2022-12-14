<template>
  <div class="re-total">
    <img src="../../assets/history.png" class="history-icon">
    <div class="title2">历史记录</div>
    <div class="title-en">总浏览{{this.total}}条</div>
    <div class="ref-box-set" v-if="have_refer===true">
      <div class="ref-box" v-for="(item,index) in refer" :key="index">
        <div class="ref" @click="jdetail(item.work_id)">
          <div class="content" v-html="item.title"></div>
          <!---div class="host_venue" v-show="item.host_venue!=null">{{item.host_venue}}</div--->
          <div class="publication_year">
            <span class="host_venue" v-show="item.host_venue!=null">
              发表机构：{{item.host_venue}}
            </span>
            <span>
               浏览时间:{{item.browse_time}}
            </span>

          </div>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <el-pagination
          background
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="this.pageSize"
          layout="prev, pager, next"
          :total=total>
      </el-pagination>
    </div>
    <div class="null" v-if="have_refer===false">
      无相关文献推荐
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "history",
  methods:{
    jdetail(id){
      console.log("文章id为:");
      console.log(id);
      window.localStorage.setItem('WID',id);
      window.open('/paper_details');
    },
    handleCurrentChange(val){
      this.currentPage=val;
      this.$axios({//注意是this.$axios
        method:'post',
        url:'/user/history',
        headers:{
          token: this.uid,
        },
        data:{//get请求这里是params
          page:this.currentPage,
          size:this.pageSize,
        }
      }).then(
          response => {
            console.log(response.data.data);
            this.total=response.data.count;
            this.refer = response.data.data;
            for(var i=0;i<this.refer.length;i++){
              if(this.refer[i].title.length>80){
                this.refer[i].title= this.refer[i].title.substring(0,80)+"...";
              }
              if(this.refer[i].host_venue.length>60){
                this.refer[i].host_venue= this.refer[i].host_venue.substring(0,60)+"...";
              }
            }
          }
      )
    }
  },
  created() {

  },
  mounted(){
    this.$axios({//注意是this.$axios
      method:'post',
      url:'/user/history',
      headers:{
        token: this.uid,
      },
      data:{//get请求这里是params
        page:this.currentPage,
        size:this.pageSize,
      }
    }).then(
        response => {
          console.log("history")
          console.log(response.data);
          this.total=response.data.count;
          this.refer = response.data.data;
          console.log("历史记录为")
          console.log(this.refer)
          for(var i=0;i<this.refer.length;i++){
            if(this.refer[i].title.length>80){
              this.refer[i].title= this.refer[i].title.substring(0,80)+"...";
            }
            if(this.refer[i].host_venue.length>60){
              this.refer[i].host_venue= this.refer[i].host_venue.substring(0,60)+"...";
            }
          }
        }
    )
  },
  data(){
    return{
      uid:window.localStorage.getItem('uid'),
      refer_id:[],
      have_refer:true,
      refer:[{
        title:"\"P.J. Schultz and K.G. Lynn, Rev. Mod. Phys., vol. 60, pp. 701, 1988.\","
      },{
        title:"\"P.J. Schultz and K.G. Lynn, Rev. Mod. Phys., vol. 60, pp. 701, 1988.\","
      },{
        title:"\"P.J. Schultz and K.G. Lynn, Rev. Mod. Phys., vol. 60, pp. 701, 1988.\","
      },{
        title:"\"P.J. Schultz and K.G. Lynn, Rev. Mod. Phys., vol. 60, pp. 701, 1988.\","
      },{
        title:"\"P.J. Schultz and K.G. Lynn, Rev. Mod. Phys., vol. 60, pp. 701, 1988.\","
      },],
      pageSize:5,
      currentPage:1,
      total:200,
    }
  }
}
</script>

<style scoped>
.re-total{
  position: absolute;
  /*width: 850px;*/
  width: 55vw;
  height: 83vh;
  left:0px;
  top:0px;
  background: #FFFFFF;
  box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  /*margin-left:20px;*/
}
.title2{
  position: absolute;
  width: auto;
  height: 5vh;
  left: 5.2vw;
  top:30px;
  white-space: nowrap;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */

  letter-spacing: 0.02em;

  /* Primary/0C1E5B Text */

  color: #0C1E5B;
}
.title-en{
  position: absolute;
  width: 150px;
  height: 26px;
  left: 730px;
  top: 30px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;

  /* identical to box height, or 162% */
  letter-spacing: 0.02em;

  color: #928E8E;
}
.ref-box-set{
  position: relative;
  display: flex;
  flex-direction: column;
  width: 98%;
  margin-top:75px;
  margin-bottom: 110px;
  margin-left:-15px;
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
.ref-box{
  position: relative;
  width: 356px;
  top:-38px;
}
.index-box{
  position: absolute;
  width: 30px;
  height: 29px;
  left: 50px;
  top: 50px;
  display: flex;
  justify-content: center;
  background: #EFF1FE;
  border-radius: 4px;

}
.index{
  display: flex;
  position: relative;
  justify-content: center;
  width: 9px;
  height: 26px;
  top:1px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;

  /* identical to box height, or 144% */

  color: #6C7497;

}
.content {
  display: flex;
  width: 800px;
  margin-left: 65px;
  padding-right:20px;
  margin-top:70px;
  text-align: justify;
  text-justify: distribute;
  word-break: break-all;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  /* or 122% */

  letter-spacing: 0.02em;

  color: #000000;
}
.content:hover {
  text-decoration: underline;
  color: #53a2e3;
}
.host_venue{
  padding-right: 30px;
  padding-left: 10px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 26px;
  /* identical to box height, or 186% */

  letter-spacing: 0.02em;

  color: #8A8A8A;
}
.publication_year{
  display: flex;
  position: relative;
  width: auto;
  height: 26px;
  left: 55px;
  top: 8px;
  white-space: nowrap;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 26px;
  /* identical to box height, or 186% */

  letter-spacing: 0.02em;

  color: #8A8A8A;
}
.line{
  position: relative;
  width: 760px;
  height: 0px;
  left: 60px;
  top: 22px;

  border: 1.4px solid rgba(217, 215, 215, 0.58);
  transform: rotate(0.09deg);
}
.null{
  position: relative;
  width: 100%;
  height:20px;
  bottom: 10px;
  color: #0E84F4;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  top:150px;
  left: 55px;
}
.ref{
  cursor: pointer;
  margin-top: -20px;
}
.history-icon{
  position: absolute;
  width: 40px;
  height: 40px;
  left:25px;
  top:25px;
}
.pagination{
  position: absolute;
  top:580px;
  left: 170px;
}
</style>
