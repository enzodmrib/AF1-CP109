<template>
  <v-app>
    <router-view name="SystemBar"/>
    <router-view name="AppBar"/>
    <v-content :class="{ 'content-bg': true }">
      <router-view></router-view>
    </v-content>
    <router-view name="Footer"/>
    <router-view name="BottomNavigation"/>
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
.content-bg {
  background-color: #304455;
}
.card {
  background: #f9f9f9 !important;
}
</style>

