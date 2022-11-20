<template>
  <div class="to">
    <note></note>
  </div>
</template>

<script>
import note from '@/components/note.vue'

export default {
  name: "NoteView",
  components: {
    note
  }
}
</script>

<style scoped>
.to{
  height: 2000px;
  left: 20px;
  top: 100px;
}
</style>
