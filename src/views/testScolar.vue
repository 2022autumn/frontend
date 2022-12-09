<template>
  <div class="p1">
    <div class="v1">
      <scholar_p1
      :scholarInfo="scholarInfo"/>
    </div>
    <div class="v2">
      <scholar_p2
      :scholarInfo="scholarInfo"
      :areas="areas"/>
    </div>
    <div class="v3">
      <scholar_p3
      :scholarInfo="scholarInfo"
      :domain-list="scholarInfo.x_concepts"
      :counts="counts"/>
    </div>
  </div>

</template>
<script>
import Scholar_p1 from "@/components/ScholarInfo/scholar_p1";
import Scholar_p2 from "@/components/ScholarInfo/scholar_p2";
import Scholar_p3 from "@/components/ScholarInfo/scholar_p3";
export default {
  components: {Scholar_p3, Scholar_p2, Scholar_p1},
  props: {
    scholarInfo: {
      type: Object
    },
    areas: "",
    counts: []
  }
}
</script>
<style>
.p1 {
  margin: 10px 0 0 0;
  width: 100%;
  height: 100%;
}
.v1 {
  float: left;
  margin-top: 0px;
  margin-left: 120px;
  height: 400px;
  width: 170px;
}
.v2 {
  float: left;
  position: relative;
  margin-left: 100px;
  height: 400px;
  width: 279px;
}
.v3 {
  float: left;
  position: relative;
  margin-left: 340px;
  height: 400px;
  width: 227.5px;
}
</style>
