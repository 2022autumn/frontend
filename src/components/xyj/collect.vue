<template>
  <div class="temp">
    <div class="total-board">
        <div class="top-line">
          <div class="title">
            <img src="../../assets/Star.png" class="collect-img">
            <div class="title-name">收藏夹</div>
          </div>
          <div class="set-btn-locat">
            <el-button icon="el-icon-plus" class="new-button" >新建</el-button>
          </div>
        </div>
      <div class="line">
        <div class="single-line">
          <div class="left">
            <img src="../../assets/image1.png" class="simple-img">
          </div>
          <div class="right">
            <div class="content">收藏夹1</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "collect"
}
</script>

<style scoped>
  .temp{
    height: 1000px;
  }
 .total-board{
   position: absolute;
   width: 62.05vw;
   height: 76.67vh;
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
   margin-top:2.1vh;
   margin-left:53vw;
 }
 .line{
   position: absolute;
   top:8vh;
 }
 .single-line{
   position: absolute;
   left:7vw;
 }
 .simple-img{
   position: absolute;
   width: 92px;
   height: 92px;
   filter: drop-shadow(0px 5px 20px rgba(75, 148, 248, 0.25));
 }
 .right{
   position: absolute;
   left:20px;
 }
 .content{
   position: absolute;
   width: 4.3vw;
   height: 2.02vh;

   font-family: 'Nunito Sans';
   font-style: normal;
   font-weight: 700;
   font-size: 15px;
   line-height: 20px;
   letter-spacing: 0.02em;

   /* Primary/0C1E5B Text */

   color: #0C1E5B;

   top:20px;
   left:80px;
 }
</style>
