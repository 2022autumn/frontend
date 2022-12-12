<template>
  <div class="temp" >
    <div class="total-board" v-show="this.showDetail===false">
        <div class="top-line">
          <div class="title1">
            <img src="../../assets/Star.png" class="collect-img">
            <div class="title-name">收藏夹</div>
          </div>
          <div class="set-btn-locat">
            <el-button icon="el-icon-plus" class="new-button" @click="newcollect=true">新建</el-button>
          </div>
          <el-dialog title="新建收藏夹" :visible.sync="newcollect" width="350px">
            <el-input v-model="nameInput" placeholder="请输入收藏夹名称" class="new-input"></el-input>
            <div slot="footer" class="new-footer">
              <el-button @click="newcollect = false">取 消</el-button>
              <el-button @click="newcollect = false;addNew();update();" class="el-buttons">确 定</el-button>
            </div>
          </el-dialog>
        </div>
      <div class="line1" v-infinite-scroll="load">
        <div class="single-line" v-for="(item,index) in name" :key="index" >
          <div class="left1">
            <img src="../../assets/image1.png" class="simple-img">
          </div>
          <div class="right1">
            <div class="content1" @click="change(item)">{{ item.tag_name }}</div>
            <el-button icon="el-icon-edit" class="edit-btn" @click="rename=true;current=item">编辑</el-button>
            <el-button icon="el-icon-delete" class="delete-btn" @click="delcollect=true;current=item">删除</el-button>
            <el-dialog title="确定删除该收藏夹？" :visible.sync="delcollect" width="350px">
              <div slot="footer" class="new-footer">
                <el-button @click="delcollect = false">取 消</el-button>
                <el-button @click="delcollect = false;deletec(current);" class="el-buttons">确 定</el-button>
              </div>
            </el-dialog>
            <el-dialog title="重命名收藏夹" :visible.sync="rename" width="350px">
              <el-input v-model="nameInput" placeholder="请输入收藏夹名称" class="new-input"></el-input>
              <div slot="footer" class="new-footer">
                <el-button @click="rename = false">取 消</el-button>
                <el-button @click="rename = false;renamed(current);" class="el-buttons">确 定</el-button>
              </div>
            </el-dialog>
          </div>
          <div class="the-line"></div>
        </div>
      </div>
    </div>
    <div class="collect-detail" v-show="this.showDetail===true">
      <div class="total-board2">
        <div class="top-line2">
          <div class="title2">
            <img src="../../assets/Star.png" class="collect-img2">
            <div class="title-name2">{{ this.tname }}</div>
          </div>
          <div class="set-btn-locat2">
            <el-button icon="el-icon-d-arrow-left" class="new-button2" @click="change(0)">返回</el-button>
          </div>
        </div>
        <div class="line2" v-infinite-scroll="load" v-if="have_collect===true">
            <div class="single-line2" v-for="(item,index) in detail" :key="index">
              <div class="title-line2">
                <div class="type2">{{ item.type }}</div>
                <div class="content2" @click="jdetail(item.id)">{{ item.title }}</div>
              </div>
              <div class="middle-line2">
                <div class="author2" v-if="item.authorships">
                  <div v-if="item.authorships[0]" class="author-first">
                    <div v-if="item.authorships[0].author.display_name">
                      <div v-if="item.authorships.length>1">
                        <span @click="jscholar(item.authorships[0].author.id)">
                           作者:{{item.authorships[0].author.display_name}};
                        </span>
                        <span @click="jscholar(item.authorships[1].author.id)">
                          {{item.authorships[1].author.display_name}}
                        </span>
                      </div>
                      <div v-else @click="jscholar(item.authorships[0].author.id)">
                        作者:{{item.authorships[0].author.display_name}}
                      </div>
                    </div>
                    <!---div class="vector2">|</div--->
                  </div>

                </div>
                <div class="company2" v-if="item.host_venue">机构:{{item.host_venue.display_name}}</div>
                <!---div class="vector1">|</div--->
                <div class="time2">发表时间:{{ item.publication_date }}</div>
              </div>
              <div class="bottom-line2">
                <div class="key-box2">
                  <div class="key2" v-for="(item,index) in item.concepts" :key="index">
                    <div class="single-key2">
                      {{item.display_name}}
                    </div>
                  </div>
                  <div class="another2">
                    <div class="quote2">
                      <img src="../../assets/quotes-left.png" class="quote-img">
                      <div class="quote-title2">{{item.cited_by_count}}次被引</div>
                    </div>
                    <div src="collect2">
                      <img src="../../assets/collect.png" class="col-img2">
                      <div class="collect-title2">{{item.star_num}}次收藏</div>
                    </div>
                  </div>
                </div>

                <div class=""></div>
              </div>
            </div>
          </div>
        <div class="no-collect" v-else>
           暂无收藏文献
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import CollectDetail from "@/components/xyj/collectDetail";
export default {
  name: "collect",
  components: {CollectDetail},

  methods:{
    addNew(){
      console.log(this.nameInput);
      this.$axios({//注意是this.$axios
        method:'post',
        url:'/social/tag/create',
        headers:{
          //token:3,
          token: this.uid,
        },
        data:{//get请求这里是params
          user_id: this.uid,
          tag_name:this.nameInput
          //user_id: window.localStorage.getItem('SID'),
        }
      }).then(
          response =>{
            this.name=response.data.data
            console.log(response.data);
            this.$axios({//注意是this.$axios
              method:'post',
              url:'/social/tag/taglist',
              headers:{
                //token:3,
                token: this.uid,
              },
              data:{//get请求这里是params
                user_id: this.uid,
                //user_id: window.localStorage.getItem('SID'),
              }
            }).then(
                response =>{
                  this.name=response.data.data
                  console.log(response.data);
                }
            )
          }
      )
      this.nameInput='';
    },
    change(item){
      if(this.showDetail===false){
        this.tname=item.tag_name
        this.$axios({//注意是this.$axios
          method:'post',
          url:'/social/tag/sublist',
          headers:{
            //token:3,
            token: this.uid,
          },
          data:{//get请求这里是params
            user_id: this.uid,
            tag_id:item.tag_id
            //user_id: 3,
            //tag_id:10
            //user_id: window.localStorage.getItem('SID'),
          }
        }).then(
            response =>{
              if(response.data.num==0){
                this.have_collect=false;
              }else{
                this.have_collect=true;
                this.detail=response.data.paper_list
                console.log(response.data);
                for(var i=0;i<this.detail.length;i++){
                  if(this.detail[i].host_venue.display_name.length>30){
                    this.detail[i].host_venue.display_name= this.detail[i].host_venue.display_name.substring(0,30)+"...";
                  }
                  if(this.detail[i].title.length>70){
                    this.detail[i].title= this.detail[i].title.substring(0,70)+"...";
                  }
                  this.detail[i].concepts.splice(3);
                  for(var j=0;j<this.detail[i].concepts.length;j++){
                    if(this.detail[i].concepts[j].display_name.length>28){
                      this.detail[i].concepts[j].display_name= this.detail[i].concepts[j].display_name.substring(0,28)+"...";
                    }
                  }
                  console.log(this.detail[i].concepts)
                }
              }
              this.showDetail=true;
            }
        )
      }else{
        this.showDetail=false;
      }

    },
    jdetail(id){
      console.log("文章id为:");
      console.log(id);
      window.localStorage.setItem('WID',id);
      window.open('/paper_details');
    },
    jscholar(id){
      // window.localStorage.setItem('SID',this.author_id);
      console.log(id)
      window.localStorage.setItem('SID',id);
      window.open('/scholar_page');
    },
    deletec(item){
      this.$axios({//注意是this.$axios
        method:'post',
        url:'/social/tag/delete',
        headers:{
          //token:3,
          token: this.uid,
        },
        data:{//get请求这里是params
          user_id: this.uid,
          tag_id:item.tag_id
          //user_id: window.localStorage.getItem('SID'),
        }
      }).then(
          response =>{
            this.name=response.data.data
            console.log(response.data);
            this.$message.success("删除成功！");
            this.$axios({//注意是this.$axios
              method:'post',
              url:'/social/tag/taglist',
              headers:{
                //token:3,
                token: this.uid,
              },
              data:{//get请求这里是params
                user_id: this.uid,
                //user_id: window.localStorage.getItem('SID'),
              }
            }).then(
                response =>{
                  this.name=response.data.data
                  console.log(response.data);
                }
            )
          }
      )
    },
    renamed(item){
      console.log(this.nameInput);
      this.$axios({//注意是this.$axios
        method:'post',
        url:'/social/tag/rename',
        headers:{
          //token:3,
          token: this.uid,
        },
        data:{//get请求这里是params
          user_id: this.uid,
          new_tag_name:this.nameInput,
          tag_id:item.tag_id
          //user_id: window.localStorage.getItem('SID'),
        }
      }).then(
          response =>{
            this.name=response.data.data
            console.log(response.data);
            this.$axios({//注意是this.$axios
              method:'post',
              url:'/social/tag/taglist',
              headers:{
                //token:3,
                token: this.uid,
              },
              data:{//get请求这里是params
                user_id: this.uid,
                //user_id: window.localStorage.getItem('SID'),
              }
            }).then(
                response =>{
                  this.name=response.data.data
                  console.log(response.data);
                }
            )
          }
      )
      this.nameInput='';
    }
  },
  mounted() {
    this.$axios({//注意是this.$axios
      method:'post',
      url:'/social/tag/taglist',
      headers:{
        //token:3,
        token: this.uid,
      },
      data:{//get请求这里是params
        user_id: this.uid,
        //user_id: window.localStorage.getItem('SID'),
      }
    }).then(
        response =>{
          this.name=response.data.data
          console.log(response.data);
        }
    )
  },
  data(){
    return{
      uid:parseInt(window.localStorage.getItem('uid')),
      name:["收藏夹1","收藏夹2","收藏夹3","收藏夹4","收藏夹5","收藏夹6","收藏夹6"],
      newcollect:false,
      delcollect:false,
      nameInput:'',
      showDetail:false,
      tid:1,
      tname:'',
      rename:false,
      have_collect:false,
      current:"",
      detail:[{
        type:"期刊",
        title:"疫情冲击下的2020年中国经济形势与政策选择",
        keys:["标签/关键词","标签/关键词","标签/关键词"],
        collects:0,
        quotes:0,
        author:"作者",
        company:"作者所属机构",
        time:"发表时间",
      },{
        type:"期刊",
        title:"疫情冲击下的2020年中国经济形势与政策选择",
        keys:["标签/关键词","标签/关键词","标签/关键词"],
        collects:0,
        quotes:0,
        author:"作者",
        company:"作者所属机构",
        time:"发表时间",
      },{
        type:"期刊",
        title:"疫情冲击下的2020年中国经济形势与政策选择",
        keys:["标签/关键词","标签/关键词","标签/关键词"],
        collects:0,
        quotes:0,
        author:"作者",
        company:"作者所属机构",
        time:"发表时间",
      },{
        type:"期刊",
        title:"疫情冲击下的2020年中国经济形势与政策选择",
        keys:["标签/关键词","标签/关键词","标签/关键词"],
        collects:0,
        quotes:0,
        author:"作者",
        company:"作者所属机构",
        time:"发表时间",
      },{
        type:"期刊",
        title:"疫情冲击下的2020年中国经济形势与政策选择",
        keys:["标签/关键词","标签/关键词","标签/关键词"],
        collects:0,
        quotes:0,
        author:"作者",
        company:"作者所属机构",
        time:"发表时间",
      },],
    }
  },

}
</script>

<style scoped>
  .temp{
    margin-left: -28px;
  }
 .total-board{
   width: 55vw;
   height: 83vh;
   left: 0px;
   margin-top:-29px;

   background: linear-gradient(250.39deg, #FFFFFF 10.13%, #FFFFFF 94%);
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 11px;

 }
 .top-line{
   padding-top:4px;
 }
 .title1{
   position: absolute;
   top:4.82vh;
   left: 3.71vw;
 }
 .collect-img{
   position: absolute;
   width: 40px;
   height: 40px;
   left: 0px;
   top: 0px;
 }
 .title-name{
   position: absolute;
   width: 5.2vw;
   height: 3.33vh;
   left: 3.56vw;

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
 .new-button{
   position: absolute;
   width: 6vw;
   height: 5vh;

   background: linear-gradient(90.39deg, #246EF3 -28.26%, #3BBDE7 100.2%, #2EDDF4 123.43%);
   border-radius: 6px;
   font-family: 'Nunito Sans';
   font-style: normal;
   font-weight: 700;
   /* identical to box height */
   font-size: 100%;
   text-align: center;
   letter-spacing: 0.02em;
   padding: 0px 0px;
   color: #FFFFFF;

 }
 .set-btn-locat{
   position: absolute;
   margin-top:3.1vh;
   margin-left:44vw;
 }
 .line1{
   position: relative;
   display: flex;
   flex-direction: column;
   margin-top:83px;
   height: 600px;
   width: 99.3%;
   overflow-y:scroll;
   overflow-x: hidden;
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
 .single-line{
   display: flex;
   position: relative;
   left:5vw;
   top:-1vh;
 }
 .simple-img{
   position: relative;
   display: flex;
   width: 92px;
   height: 92px;
   filter: drop-shadow(0px 5px 20px rgba(75, 148, 248, 0.25));
   top:21px;
 }
 .left1{

 }
 .right1{
   position: absolute;
   left:1.5vw;
 }
 .content1{
   position: absolute;
   width: 4.3vw;
   height: 2.02vh;
   cursor: pointer;
   font-family: 'Nunito Sans';
   font-style: normal;
   font-weight: 700;
   font-size: 15px;
   line-height: 20px;
   letter-spacing: 0.02em;
   cursor: pointer;
   /* Primary/0C1E5B Text */

   color: #0C1E5B;

   top:3vh;
   left:5.7vw;
 }
 .delete-btn{
   position: absolute;
   width: 3.78vw;
   height: 3vh;
   top:7vh;
   left:10vw;

   background: linear-gradient(90.39deg, #246EF3 -28.26%, #3BBDE7 100.2%, #2EDDF4 123.43%);
   border-radius: 6px;
   padding: 0px 0px;
   font-family: 'Nunito Sans';
   font-style: normal;
   font-weight: 700;
   font-size: 11px;
   line-height: 15px;
   /* identical to box height */

   letter-spacing: 0.02em;

   color: #FFFFFF;
 }
 .edit-btn{
   position: absolute;
   width: 3.78vw;
   height: 3vh;
   top:7vh;
   left:5.5vw;
   background: linear-gradient(90.39deg, #246EF3 -28.26%, #3BBDE7 100.2%, #2EDDF4 123.43%);
   border-radius: 6px;

   padding: 0px 0px;
   font-family: 'Nunito Sans';
   font-style: normal;
   font-weight: 700;
   font-size: 11px;
   line-height: 15px;
   /* identical to box height */

   letter-spacing: 0.02em;

   color: #FFFFFF;
 }
 .the-line{
   position: absolute;
   width: 687px;
   height: 0px;
   top:13vh;
   opacity: 0.1;
   border: 1px solid #217BF4;
 }


  .temp{
    height: 1000px;
  }
  .total-board2{
    position: absolute;
    width: 55vw;
    height: 700px;
    left: 0px;
    top: 0px;

    /*background: linear-gradient(250.39deg, #FFFFFF 10.13%, #FFFFFF 94%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 11px;*/

  }
  .title2{
    position: absolute;
    top:2.82vh;
    left: 2.71vw;
  }
  .collect-img2{
    position: absolute;
    width: 40px;
    height: 40px;
    left: 0px;
    top: 0px;
  }
  .title-name2{
    position: absolute;
    width: auto;
    height: 3.33vh;
    left: 3.56vw;
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
  .new-button2{
    position: absolute;
    width: 6vw;
    height: 5vh;

    background: linear-gradient(90.39deg, #246EF3 -28.26%, #3BBDE7 100.2%, #2EDDF4 123.43%);
    border-radius: 6px;
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 700;
    /* identical to box height */
    font-size: 100%;
    text-align: center;
    letter-spacing: 0.02em;
    padding: 0px 0px;
    color: #FFFFFF;

  }
  .set-btn-locat2{
    position: absolute;
    margin-top:2.1vh;
    margin-left:47vw;
  }
  .total-line{

  }
  .line2{
    position: relative;
    display: flex;
    flex-direction: column;
    top:9vh;
    height: 600px;
    width: 99.3%;
    overflow-y:scroll;
    overflow-x: hidden;
  }
  .single-line2{
    display:flex;
    position: relative;
    left:2vw;
    margin-top:3vh;
    width: 51.13vw;
    height: 16vh;
    flex-shrink: 0;
    background: linear-gradient(250.39deg, #FFFFFF 10.13%, #FFFFFF 94%);
    border-radius: 11px;
    filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.25));
  }


  .content2{
    position: relative;
    width: 54vw;
    height: 3.18vh;
    left: -2vw;
    top:-0.7vh;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    /* or 162% */
    cursor: pointer;

    color: #2F2C4A;
  }

  .type2{
    position: absolute;
    width: auto;
    height: 3.3vh;
    top:2vh;
    padding-left: 4px;
    padding-right: 4px;
    left: 2.2vw;
    background: #217BF4;
    box-shadow: 0px 7px 22px -6px rgba(0, 72, 168, 0.34);
    border-radius: 8px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 26px;
    /* or 217% */
    text-align: center;

    color: #FFFFFF;

  }
  .middle-line2{
    position: absolute;
    top:7vh;
    width: 100%;
  }
  .author2{
    position: relative;
    display: flex;
    width: 3vw;
    height:3vh;
    left: 2.2vw;
    cursor: pointer;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 14px;
    /* or 108% */

    text-align: center;
    color: rgba(96, 96, 96, 0.69);

    z-index: 99;
  }
  .company2{
    position: relative;
    width: auto;
    padding-right:5px ;
    height: 5vh;
    left: -1vw;
    top:-25px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 14px;
    white-space: nowrap;
    /* or 108% */

    text-align: center;

    color: rgba(96, 96, 96, 0.69);

  }
  .time2{
    position: relative;
    width:auto;
    top:-67px;
    height: 5vh;
    left: 12vw;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 14px;
    /* or 108% */

    text-align: center;
    white-space: nowrap;
    color: rgba(96, 96, 96, 0.69);
  }
  .author-first{
    width: auto;
    white-space: nowrap;
    padding-right: 2px;
    padding-left: 0px;
  }
  .author-second{
    width: auto;
    white-space: nowrap;
    padding-right:2px ;
  }
  .vector2{
    position: relative;
    padding-left: 15vw;
    font-size:30px;
    color: #D9D9D9 ;
    font-weight: 130;
    top:-2vh;
  }
  .vector1{
    position: relative;
    font-size:30px;
    color: #D9D9D9 ;
    font-weight: 130;
    left: 19.8vw;
    top:-2vh;
  }
  .bottom-line2{
    position: absolute;
    top:10.2vh;
  }
  .single-key2{
    width: auto;
    height: 3.4vh;
    margin-left: 1vw;
    background: #f6f9fe;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 14px;


    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 26px;
    /* or 145% */
    text-align: center;
    letter-spacing: 0.01em;
    color:#2F2C4A;;

  }
  .key2{
    display: flex;
    position: relative;
    flex-wrap: wrap;
  }
  .key-box2{
    display: flex;
    position: relative;
    flex-direction: row;
    width: 70vw;
    left: 0.5vw;
    padding-top: 6px;
  }
  .quote2{

  }
  .quote-img{
    width: 23px;
    height: 23px;
  }
  .another2{
    position: absolute;
    left:32vw;
    top:1vh;
  }
  .quote-title2{
    position: absolute;
    width: 8vw;
    height: 15vh;
    top:0.7vh;
    left: 1.8vw;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 520;
    font-size: 14.5px;
    line-height: 14px;
    /* or 108% */

    text-align: center;

    color: rgba(96, 96, 96, 0.69);
  }
  .col-img2{
    position: absolute;
    top:0vh;
    left:11vw;
    width: 25px;
    height: 25px;
  }
  .collect-title2{
    position: absolute;
    width: 8vw;
    height: 15vh;
    left: 11vw;
    top:0.7vh;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 520;
    font-size: 14.5px;
    line-height: 14px;
    /* or 108% */

    text-align: center;

    color: rgba(96, 96, 96, 0.69);
  }
  .top-line2{

  }
  .no-collect{
    position: relative;
    width: 100%;
    height:20px;
    bottom: 10px;
    color: #0E84F4;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    top:180px;
    left: 338px;
  }
</style>
