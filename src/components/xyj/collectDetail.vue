<template>
  <div class="temp">
    <div class="total-board">
        <div class="top-line">
          <div class="title">
            <img src="../../assets/Star.png" class="collect-img">
            <div class="title-name">{{ titlename }}</div>
          </div>
          <div class="set-btn-locat">
            <el-button icon="el-icon-d-arrow-left" class="new-button" >返回</el-button>
          </div>
        </div>
      <div class="line">
        <div class="single-line" v-for="(item,index) in detail" :key="index">
          <div class="title-line">
            <div class="type">{{ item.type }}</div>
            <div class="content">{{ item.title }}</div>
          </div>
          <div class="middle-line">
            <div class="author">{{ item.author }}</div>
            <div class="vector">|</div>
            <div class="company">{{ item.company }}</div>
            <div class="vector1">|</div>
            <div class="time">{{ item.time }}</div>
          </div>
          <div class="bottom-line">
            <div class="key-box">
              <div class="key" v-for="(item,index) in item.keys" :key="index">
                <div class="single-key">
                  {{item}}
                </div>
              </div>
              <div class="another">
                <div class="quote">
                  <img src="../../assets/quotes-left.png" class="quote-img">
                  <div class="quote-title">{{item.quotes}}次被引</div>
                </div>
                <div src="collect">
                  <img src="../../assets/collect.png" class="col-img">
                  <div class="collect-title">{{item.collects}}次收藏</div>
                </div>
              </div>
            </div>

            <div class=""></div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "collect",
  methods:{},
  data(){
    return{
      titlename:"收藏夹1",
      key:["关键词","关键词","关键词"],
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
      },],
    }
  },

}
</script>

<style scoped>
  .temp{
    height: 1000px;
  }
 .total-board{
   position: absolute;
   width: 62.05vw;
   height: 85vh;
   left: 325px;
   top: 90px;

   background: linear-gradient(250.39deg, #FFFFFF 10.13%, #FFFFFF 94%);
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 11px;

 }
 .title{
   position: absolute;
   top:2.82vh;
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
   width: 6vw;
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
   margin-top:2.1vh;
   margin-left:53vw;
 }
 .line{
   position: relative;
   display: flex;
   flex-direction: column;
   height: 800px;
   top:9vh;
 }
 .single-line{
   display:flex;
   position: relative;
   left:4vw;
   margin-top:3vh;
   width: 56.13vw;
   height: 16vh;

   background: linear-gradient(250.39deg, #FFFFFF 10.13%, #FFFFFF 94%);
   border-radius: 11px;
   filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.25));
 }


 .content{
   position: absolute;
   width: 54vw;
   height: 3.18vh;
   left: 7vw;
   top:1.5vh;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 26px;
   /* or 162% */


   color: #2F2C4A;
 }

 .type{
   position: absolute;
   width: 3vw;
   height: 3.3vh;
   top:2vh;
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
 .middle-line{
   position: absolute;
   top:7vh;
 }
 .author{
   position: absolute;
   width: 3vw;
   height:3vh;
   left: 2.2vw;

   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 13px;
   line-height: 14px;
   /* or 108% */

   text-align: center;
   color: rgba(96, 96, 96, 0.69);


 }
 .company{
   position: absolute;
   width: 10vw;
   height: 15vh;
   left: 9.2vw;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 13px;
   line-height: 14px;
   /* or 108% */

   text-align: center;

   color: rgba(96, 96, 96, 0.69);

 }
 .time{
   position: absolute;
   width:10vw;
   height: 15vh;
   left: 19vw;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 13px;
   line-height: 14px;
   /* or 108% */

   text-align: center;

   color: rgba(96, 96, 96, 0.69);
 }
 .vector{
   position: absolute;
   font-size:30px;
   color: #D9D9D9 ;
   font-weight: 130;
   left: 6.8vw;
   top:-2vh;
 }
  .vector1{
    position: absolute;
    font-size:30px;
    color: #D9D9D9 ;
    font-weight: 130;
    left: 19.8vw;
    top:-2vh;
  }
  .bottom-line{
    position: absolute;
    top:10.2vh;
  }
  .single-key{
    width: 7vw;
    height: 3.4vh;
    margin-left: 1vw;
    background: #f6f9fe;

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
  .key{
    display: flex;
    position: relative;
    flex-wrap: wrap;
  }
  .key-box{
    display: flex;
    position: relative;
    flex-direction: row;
    width: 70vw;
    left: 0vw;
  }
  .quote{

  }
  .quote-img{
    width: 23px;
    height: 23px;
  }
  .another{
    position: absolute;
    left:32vw;
    top:1vh;
  }
  .quote-title{
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
  .col-img{
    position: absolute;
    top:0vh;
    left:11vw;
    width: 25px;
    height: 25px;
  }
  .collect-title{
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
</style>
