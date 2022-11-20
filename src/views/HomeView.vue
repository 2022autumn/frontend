<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="软工二!!"/>
    <div class="re">
      <reference></reference>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import reference from '@/components/reference.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
    reference
  }
}
</script>

<style scoped>
.home{
  height:1100px;
}
.re{
  left: 20px;
  top: 180px;
  margin-bottom: 20px;
}
</style>
