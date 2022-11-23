<template>
  <div class="p1">
    <div class="v1">
      <scholar_p1 />
    </div>
    <div class="v2">
      <scholar_p2 />
    </div>
    <div class="v3">
      <scholar_p3 />
    </div>
  </div>

</template>
<script>
import Scholar_p1 from "@/components/ScholarInfo/scholar_p1";
import Scholar_p2 from "@/components/ScholarInfo/scholar_p2";
import Scholar_p3 from "@/components/ScholarInfo/scholar_p3";
export default {
  components: {Scholar_p3, Scholar_p2, Scholar_p1}
}
</script>
<style>
.p1 {
  margin: 0 0 0 0;
  width: 100%;
  height: 100%;
}
.v1 {
  float: left;
  margin-top: 0px;
  height: 800px;
  width: 340px;
}
.v2 {
  float: left;
  position: relative;
  margin-left: 10px;
  height: 800px;
  width: 558px;
}
.v3 {
  float: left;
  position: relative;
  margin-left: 10px;
  height: 800px;
  width: 455px;
}
</style>