<template>
  <div class="re-total">
    <div class="title">相关文献</div>
    <div class="title-en">Related Literature</div>
    <div class="ref-box-set" v-infinite-scroll="load" v-if="have_refer===true">
      <div class="ref-box" v-for="(item,index) in refer" :key="index">
        <div class="ref" @click="jdetail(item.id)">
          <div class="index-box">
            <div class="index">{{ index+1 }}</div>
          </div>
          <div class="content">{{ item.cited }}</div>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="null" v-if="have_refer===false">
      无相关文献推荐
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "related",
  methods:{
    jdetail(id){
      console.log("文章id为:");
      console.log(id);
      window.localStorage.setItem('WID',id);
      window.open('/paper_details');
    }
  },
  created() {

  },
  mounted(){
    this.$axios({//注意是this.$axios
      method:'get',
      url:'/es/get',
      params:{//get请求这里是params
        id:window.localStorage.getItem('WID'),
      }
    }).then(
        response => {
          //console.log(response.data);
          this.refer = response.data.data.related_works;
          if(this.refer.length===0){
            this.have_refer=false;
          }
        }
    )
  },
  data(){
    return{
      refer_id:[],
      have_refer:true,
      refer:["P.J. Schultz and K.G. Lynn, Rev. Mod. Phys., vol. 60, pp. 701, 1988.",
              "H. Utsunomiya et al., \"Phys. Rev. C67 (2003) 015807; H. Utsunomiya\", in Proc. of Int. Workshop on Laser Photons at SPring-8, pp. 89, 2000.",
            "D.A. Gryaznykh, V.A. Lykov and V.V Plokhoi, Nucl. Instr. and Meth., vol. A448, pp. 106, 2000.",
            "D.A. Gryaznykh, V.A. Lykov and V.V Plokhoi, Nucl. Instr. and Meth., vol. A448, pp. 106, 2000.",
            "D.A. Gryaznykh, V.A. Lykov and V.V Plokhoi, Nucl. Instr. and Meth., vol. A448, pp. 106, 2000.",
            "D.A. Gryaznykh, V.A. Lykov and V.V Plokhoi, Nucl. Instr. and Meth., vol. A448, pp. 106, 2000.",
            "D.A. Gryaznykh, V.A. Lykov and V.V Plokhoi, Nucl. Instr. and Meth., vol. A448, pp. 106, 2000."],
    }
  }
}
</script>

<style scoped>
.re-total{
  position: absolute;
  /*width: 850px;*/
  width: 56.86vw;
  height: 400px;
  background: #FFFFFF;
  box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  /*margin-left:20px;*/
}
.title{
  position: absolute;
  width: 110px;
  height: 26px;
  left: 48px;
  top:32px;
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
  width: 150px;
  height: 26px;
  left: 740px;
  top: 32px;

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
  margin-top:80px;
  margin-bottom: 110px;
  overflow-y:scroll;
  overflow-x: hidden;
  height: 265px;
  padding-bottom: 20px;
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
  width: 600px;
  top:-50px;
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
.content{
  display: flex;
  width: 750px;
  margin-left: 90px;
  padding-left:17px;
  margin-top:50px;
  text-align: justify;
  text-justify: distribute;
  word-break: break-all;
}
.line{
  position: relative;
  width: 800px;
  height: 0px;
  left: 50px;
  top: 22px;

  border: 1.4px solid rgba(217, 215, 215, 0.58);
  transform: rotate(0.09deg);
}
.null{
  position: relative;
  height:20px;
  bottom: 10px;
  color: #0E84F4;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  top:150px;
  left: 300px;
}
.ref{
  cursor: pointer;
}
</style>
