<template>
  <div class="key-total">
    <div class="title">关键词</div>
    <div class="title-en">Keywords</div>
    <div class="box-set">
      <div class="keyword-box" v-for="(item,index) in keywords" :key="index">
        <div class="keyword">{{item}}</div>
      </div>
    </div>
    <div class="line"></div>
    <div class="define-key">自定义标签</div>
    <div class="define-box-set">
      <div class="define-box" v-for="(item,index) in definekey" :key="index">
        <div class="self-define-box">
          <img src="../assets/label.png" class="label">
          <div class="define">{{ item }}</div>
        </div>
      </div>
      <div class="define-box">
        <div class="add-self-define-box">
          <img src="../assets/add.png" class="label">
          <div class="define">添加标签...</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'keyword',
  methods:{

  },
  data(){
    return{
      keywords:["核电厂","电厂设备","电气贯穿件(EPA)","延寿","再鉴定",],
      definekey:["经济报告","疫情相关","能源经济","换行测试"],
    }
  }
}

</script>

<style scoped>
.key-total{
  position: absolute;
  width: 392px;
  height: auto;
  top: 238px;
  background: #FFFFFF;
  box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}
.title{
  position: absolute;
  height: 26px;
  width: 80px;
  top:27px;
  left: 24px;
  font-family:Poppins;
  font-style: normal;
  font-size: 24px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.06em;
  text-align: left;
}
.title-en{
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
.box-set{
  display: flex;
  width: 360px;
  padding-top:71px;
  flex-wrap: wrap;
}

.keyword-box{
  display: flex;
  padding-top: 12px;
  padding-left: 33px;
  flex-wrap: wrap;
}
.keyword{
  display: flex;
  left: 21px;
  padding-top: 6px;
  padding-bottom: 4px;
  padding-left: 18px;
  padding-right: 18px;
  background: #F5F8FC;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  align-items: center;
  justify-content: center;
  /* identical to box height, or 144% */
  letter-spacing: 0.04em;
  color: #858FA0;
}
.line{
  position: relative;
  width: 340px;
  height: 0px;
  left: 28px;
  top:24px;
  border-bottom: 1.4px solid rgba(217, 215, 215, 0.58);
  transform: rotate(0.09deg);
}
.define-key{
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
.define-box-set{
  position: relative;
  display: flex;
  width: 360px;
  top:42px;
  left: 17px;
  flex-wrap: wrap;
  padding-bottom: 83px;
}
.define-box{
  display: flex;
}
.define{
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
.self-define-box{
  display: flex;
  box-sizing: border-box;
  position: relative;
  background: #FFFFFF;
  border: 1.5px dashed #B9B2B2;
  border-radius: 10px;
  margin-left: 11px;
  margin-top:8px;
}
.add-self-define-box{
  display: flex;
  box-sizing: border-box;
  position: relative;
  background: #FFFFFF;
  border: 1.5px dashed #B9B2B2;
  border-radius: 10px;
  margin-left: 11px;
  margin-top:8px;
  cursor: pointer;
}
.label{
  display: flex;
  padding-left: 9px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 15px;
  height: 15px;
}
</style>
