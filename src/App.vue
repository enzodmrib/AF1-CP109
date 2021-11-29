<template>
  <v-app>
    <SystemBar></SystemBar>
    <AppBar></AppBar>
    <v-content :class="{ 'content-bg': true }">
      <router-view></router-view>
    </v-content>
    <Footer></Footer>
    <BottomNavigation></BottomNavigation>
  </v-app>
</template>

<script>
import SystemBar from '@/components/SystemBar.vue'
import AppBar from '@/components/AppBar.vue'
import Footer from '@/components/Footer.vue'
import BottomNavigation from '@/components/BottomNavigation.vue'

export default {
  name: 'App',
  components: {
      SystemBar,
      AppBar,
      Footer,
      BottomNavigation,
  },
}
</script>

<style>
.content-bg {
  background-color: #304455;
}
.card {
  background: #f9f9f9 !important;
}
</style>

