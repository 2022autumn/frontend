<template>
<div>
  <el-button @click="test_axios">测试接口</el-button>
</div>
</template>

<script>


import qs from "qs";

export default {
  name: "testaxios",
  data(){

  },
  methods:{
    test_axios(){
      console.log("testaxios")
      var stdate = new Date();
      console.log("now: ",stdate)
      this.$axios({
        method:'get',
        url:'/es/get/W1678408692',
      }).then(
         response =>{
           console.log(response.data);
           var enddate = new Date();
           console.log(enddate-stdate)
         }
      )
    }
  }
}
</script>

<style scoped>

</style>
