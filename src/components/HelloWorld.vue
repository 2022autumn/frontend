<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <b>有关git提交的相关标准正在想</b>
    </div>
    <div>
      <b>master分支作为前端的主分支，大家在写自己的页面的时候最好新建一个分支，确认无误后再merge到主分支上</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
