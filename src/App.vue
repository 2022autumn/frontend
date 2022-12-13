<template>
  <v-app>
    <!--<v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>-->
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
<style>
/* 设置滚动条的样式 */

::-webkit-scrollbar {
  width: 0.26vw;
}

/* 滚动槽 */

::-webkit-scrollbar-track {
  -webkit-box-shadow: rgba(0, 0, 0, 0.3);

  border-radius: 0.65vw;
}

/* 滚动条滑块 */

::-webkit-scrollbar-thumb {
  border-radius: 0.65vw;

  background: rgba(173, 152, 152, 0.1);

  -webkit-box-shadow: rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-thumb:window-inactive {
  background: #ffd9d966;
}
</style>
