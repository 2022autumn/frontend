<template>
  <div class="note-total">
    <div class="title">笔记区</div>
    <div class="title-en">Notes</div>
    <div class="note-box-set" v-infinite-scroll="load">
      <div class="note-box" v-for="(item,index) in notes" :key="index" >
        <div class="left-side">
          <div class="circle"></div>
          <div class="line"></div>
        </div>
        <div class="right-side">
            <div class="id-name">{{ item.id }}</div>
            <div class="sign">{{ item.sign }}</div>
            <div class="content">{{ item.content }}</div>
            <div class="date">{{ item.date }}</div>
            <div class="like">
              <img class="like-img" src="../../assets/like.png">
              <div class="number">{{ item.likenum }}</div>
            </div>
          <div class="anti">
            <img class="anti-img" src="../../assets/anti.png">
            <div class="anti-name">举报</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "note",
  mounted(){
    this.$axios({//注意是this.$axios
      method:'get',
      url:'/es/get',
      params:{//get请求这里是params
        id:"W1678408692"
      }
    }).then(
        response =>{

        }
    )

  },
  methods:{},
  data(){
    return{
      notes:[{
        id:"一个不重要的用户id",
        sign:"个性签名个性签名",
        content:"核电厂电气贯穿件设备延寿再鉴定方法研究",
        date:"10.17.2022, 19:27",
        likenum:24,
      },{
        id:"一个不重要的用户id",
        sign:"个性签名个性签名",
        content:"核电厂电气贯穿件设备延寿再鉴定方法研究",
        date:"10.17.2022, 19:27",
        likenum:24,
      },{
        id:"一个不重要的用户id",
        sign:"个性签名个性签名",
        content:"核电厂电气贯穿件设备延寿再鉴定方法研究",
        date:"10.17.2022, 19:27",
        likenum:24,
      },{
        id:"一个不重要的用户id",
        sign:"个性签名个性签名",
        content:"核电厂电气贯穿件设备延寿再鉴定方法研究",
        date:"10.17.2022, 19:27",
        likenum:24,
      },{
        id:"一个不重要的用户id",
        sign:"个性签名个性签名",
        content:"核电厂电气贯穿件设备延寿再鉴定方法研究",
        date:"10.17.2022, 19:27",
        likenum:24,
      },{
        id:"一个不重要的用户id",
        sign:"个性签名个性签名",
        content:"核电厂电气贯穿件设备延寿再鉴定方法研究",
        date:"10.17.2022, 19:27",
        likenum:24,
      },{
        id:"一个不重要的用户id",
        sign:"个性签名个性签名",
        content:"核电厂电气贯穿件设备延寿再鉴定方法研究",
        date:"10.17.2022, 19:27",
        likenum:24,
      },{
        id:"一个不重要的用户id",
        sign:"个性签名个性签名",
        content:"核电厂电气贯穿件设备延寿再鉴定方法研究",
        date:"10.17.2022, 19:27",
        likenum:24,
      },{
        id:"一个不重要的用户id",
        sign:"个性签名个性签名",
        content:"核电厂电气贯穿件设备延寿再鉴定方法研究",
        date:"10.17.2022, 19:27",
        likenum:24,
      },]
    }
  }
}
</script>

<style scoped>
.note-total{

  position: absolute;
  width: 397px;
  /*height: 868px;*/
  /*max-height: 400px;*/
  overflow-y: auto;
  background: #FFFFFF;
  box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}
.title{
  position: absolute;
  width: 80px;
  height: 26px;
  left: 24px;
  top: 34px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;

  /* identical to box height, or 108% */
  letter-spacing: 0.06em;

  color: #000000;


}
.title-en{
  position: absolute;
  width: 47px;
  height: 26px;
  left: 314px;
  top: 36px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;

  /* identical to box height, or 162% */
  letter-spacing: 0.02em;

  color: #928E8E;
}
.note-box-set{
  position: relative;
  display: flex;
  flex-direction: column;
  top:100px;
  overflow-y:scroll;
  overflow-x: hidden;
  height: 730px;
  right: 11px;
}
::-webkit-scrollbar {

  width: 7px;
  height: 18px;
  border-radius: 8px;
}
::-webkit-scrollbar-thumb {
  width: 7px;
  height: 66px;
  background-color: #E8E8E8;
  border-radius: 8px;
}
.note-box{
  position: relative;
  width: 292px;
  top: 82px;
  margin-top: -80px;
}
.left-side{
  margin-left: 38px;
}
.circle{
  position: relative;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #217BF4;
}
.line{
  position: relative;
  width: 95px;
  height: 0px;
  margin-left: -41.2px;
  top: 51px;
  border-bottom: 2.2px solid rgba(207, 204, 204, 0.71);
  transform: rotate(90deg);
}
.id-name{

  position: relative;
  width: 146px;
  height: 26px;
  left: 53px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;

  /* identical to box height, or 162% */
  letter-spacing: 0.02em;

  color: #000000;
}
.right-side{
  position: relative;
  top: -20px;
}
.sign{
  position: relative;
  width: 123px;
  height: 26px;
  left: 211px;
  margin-top: -25px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;

  /* identical to box height, or 173% */
  letter-spacing: 0.02em;

  color: #7D7D7D;
}
.content{
  position: relative;
  width: 302px;
  height: 44px;
  left: 53px;
  top: 10px;
  text-align: justify;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  /* or 122% */
  letter-spacing: 0.02em;

  color: #000000;
}
.date{

  position: relative;
  width: 141px;
  height: 26px;
  left: 55px;
  top: 19px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;

  /* identical to box height, or 186% */
  letter-spacing: 0.02em;

  color: #8A8A8A;
}
.like{
  position: relative;
  left: 200px;
  top:-5px;
}
.like-img{
  position: relative;
  width: 15px;
  height: 15px;
}
.number{
  position: relative;
  left: 21px;
  top:-23px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;

  /* identical to box height, or 183% */
  letter-spacing: 0.02em;

  color: #8A8A8A;
}
.anti{
  position: relative;
  left: 250px;
  top:-50px;
}
.anti-img{
  position: relative;
  width: 15px;
  height: 15px;
}
.anti-name{
  position: relative;
  width: 25px;
  height: 22px;
  left: 20px;
  top: -26px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;

  /* identical to box height, or 183% */
  letter-spacing: 0.02em;

  color: #8A8A8A;
}
</style>
