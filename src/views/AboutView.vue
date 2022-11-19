<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="key">
      <keyword></keyword>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import keyword from '@/components/keyword.vue'
export default {
  name: 'AboutView',
  components: {
    keyword,
  }
}
</script>

<style scoped>
.key{
  left: 20px;
}
</style>
