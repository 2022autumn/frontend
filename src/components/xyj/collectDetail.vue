<template>
  <div class="temp">
    <div class="total-board2">
        <div class="top-line2">
          <div class="title2">
            <img src="../../assets/Star.png" class="collect-img2">
            <div class="title-name2">{{ titlename }}</div>
          </div>
          <div class="set-btn-locat2">
            <el-button icon="el-icon-d-arrow-left" class="new-button2" >返回</el-button>
          </div>
        </div>
      <div class="line2" v-infinite-scroll="load">
        <div class="single-line2" v-for="(item,index) in detail" :key="index">
          <div class="title-line2">
            <div class="type2">{{ item.type }}</div>
            <div class="content2">{{ item.title }}</div>
          </div>
          <div class="middle-line2">
            <div class="author2">{{ item.authorships[0].author.display_name }}</div>
            <div class="vector2">|</div>
            <div class="company2">{{ item.company }}</div>
            <div class="vector1">|</div>
            <div class="time2">{{ item.time }}</div>
          </div>
          <div class="bottom-line2">
            <div class="key-box2">
              <div class="key2" v-for="(item,index) in item.keys" :key="index">
                <div class="single-key2">
                  {{item}}
                </div>
              </div>
              <div class="another2">
                <div class="quote2">
                  <img src="../../assets/quotes-left.png" class="quote-img">
                  <div class="quote-title2">{{item.quotes}}次被引</div>
                </div>
                <div src="collect2">
                  <img src="../../assets/collect.png" class="col-img2">
                  <div class="collect-title2">{{item.collects}}次收藏</div>
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
  name: "collectDetail",
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
 .total-board2{
   position: absolute;
   width: 55vw;
   height: 83vh;
   left: 550px;
   top: 90px;

   background: linear-gradient(250.39deg, #FFFFFF 10.13%, #FFFFFF 94%);
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 11px;

 }
 .title2{
   position: absolute;
   top:2.82vh;
   left: 3.71vw;
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
   margin-left:53vw;
 }
 .line2{
   position: relative;
   display: flex;
   flex-direction: column;
   height: 600px;
   top:9vh;
   width: 99.3%;
   overflow-y:scroll;
   overflow-x: hidden;
 }
 .single-line2{
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


 .content2{
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

 .type2{
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
 .middle-line2{
   position: absolute;
   top:7vh;
 }
 .author2{
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
 .company2{
   position: absolute;
   width: auto;
   height: 3vh;
   left: 7.7vw;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 13px;
   line-height: 14px;
   /* or 108% */

   text-align: center;

   color: rgba(96, 96, 96, 0.69);

 }
 .time2{
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
 .vector2{
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
  .bottom-line2{
    position: absolute;
    top:10.2vh;
  }
  .single-key2{
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
    left: 0vw;
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
</style>
