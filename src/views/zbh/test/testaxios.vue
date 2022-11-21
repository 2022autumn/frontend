<template>
<div>
  <el-button @click="test_axios">测试接口</el-button>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "testaxios",
  data(){

  },
  methods:{
    test_axios(){
      alert('click!');
      axios.get('/api/test').then(
         response =>{
           alert(response.data);
         }
      )
    }
  }
}
</script>

<style scoped>

</style>
