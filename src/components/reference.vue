<template>
  <div class="re-total">
    <div class="title">引用文献</div>
    <div class="title-en">Reference</div>
    <div class="ref-box-set">
      <div class="ref-box" v-for="(item,index) in refer" :key="index">
        <div class="index-box">
          <div class="index">{{ index+1 }}</div>
        </div>
        <div class="content">{{ item }}</div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "reference",
  methods:{},
  data(){
    return{
      refer:["P.J. Schultz and K.G. Lynn, Rev. Mod. Phys., vol. 60, pp. 701, 1988.",
              "H. Utsunomiya et al., \"Phys. Rev. C67 (2003) 015807; H. Utsunomiya\", in Proc. of Int. Workshop on Laser Photons at SPring-8, pp. 89, 2000.",
            "D.A. Gryaznykh, V.A. Lykov and V.V Plokhoi, Nucl. Instr. and Meth., vol. A448, pp. 106, 2000.",
            "D.A. Gryaznykh, V.A. Lykov and V.V Plokhoi, Nucl. Instr. and Meth., vol. A448, pp. 106, 2000.",
            "D.A. Gryaznykh, V.A. Lykov and V.V Plokhoi, Nucl. Instr. and Meth., vol. A448, pp. 106, 2000.",
            "D.A. Gryaznykh, V.A. Lykov and V.V Plokhoi, Nucl. Instr. and Meth., vol. A448, pp. 106, 2000.",
            "D.A. Gryaznykh, V.A. Lykov and V.V Plokhoi, Nucl. Instr. and Meth., vol. A448, pp. 106, 2000."]
    }
  }
}
</script>

<style scoped>
.re-total{
  position: absolute;
  width: 397px;
  background: #FFFFFF;
  box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}
.title{
  position: absolute;
  width: 110px;
  height: 26px;
  left: 24px;
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
  width: 84px;
  height: 26px;
  left: 286px;
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
  width: 350px;
  top:50px;
  margin-bottom: 110px;
}
.ref-box{
  position: relative;
  width: 350px;
}
.index-box{
  position: absolute;
  width: 30px;
  height: 29px;
  left: 22px;
  top: 40px;

  background: #E7F2FD;
  border-radius: 4px;

}
.index{
  display: flex;
  position: relative;
  width: 9px;
  height: 26px;
  top:1px;
  left: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;

  /* identical to box height, or 144% */

  color: #0E84F4;
}
.content{
  display: flex;
  width: 292px;
  margin-left: 47px;
  padding-left:17px;
  margin-top:34px;
  text-align: justify;
}
.line{
  position: relative;
  width: 340px;
  height: 0px;
  left: 28px;
  top: 19px;

  border: 1.4px solid rgba(217, 215, 215, 0.58);
  transform: rotate(0.09deg);
}
</style>
