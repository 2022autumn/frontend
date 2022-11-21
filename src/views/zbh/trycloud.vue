<template>
<div>
  <div id="app">
    <div
        v-for="(text, index) in cloudTexts"
        :key="index"
        :style="cloudStyles[index]"
    >
      {{text}}
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "trycloud",
  data() {
    return {
      cloudTexts: [
        'hello',
        'world',
        'monday',
        'tuesday',
        'sanday',
        'foo',
        'bar',
        'cheers',
        'cloud',
        'text',
        'taste',
        'dog',
        'rose',
        'boy',
        'girl',
        'egg'
      ],
      cloudStyles: []
    };
  },
  methods: {
    genStyles() {
      // 设定颜色
      const colors = [['#01FFFC', '#01FFFC'], ['#01FF84', '#01FF84'], ['#5843D7', '#E2DDFF'], ['#FD374E', '#FD374E']]
      const colorIndex = Math.floor(Math.random() * 4)
      // 设定随机位置
      const top = Math.floor((Math.random() * 10) - 5)
      const left = Math.floor((Math.random() * 10) - 5)

      // 给予间隔，防止折叠
      const margin = `${Math.abs(top) + 6}px ${Math.abs(left) + 6}px`

      return {
        position: 'relative',
        top,
        left,
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'border-radius': '96px',
        width: '75px',
        height: '35px',
        margin,
        color: colors[colorIndex][1],
        'box-shadow': `0 0 20px 7px ${colors[colorIndex][0]} inset`
      }
    }
  },
  created() {
    for (let i = 0; i < this.cloudTexts.length; i++) {
      const style = this.genStyles()
      this.cloudStyles.push(style)
    }
  }
}
</script>

<style>
body {
  padding: 0 0;
  margin: 0 0;
  //background-color: rgba(0, 0, 0, 1);
}
#app {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  width: 60%;
  height: 400px;
  background-color: black;
}
</style>
