<template>
  <div class="main">
    <v-img src="..\assets\logo.png" height="300" width="300" left="600"></v-img>
    <h1>Vue landing Page</h1>
    <h3>Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.</h3>
    <h3>Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.</h3>
    <h3>The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.</h3>
    <h3>On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.</h3>
  </div>
</template>

<script>
  export default {
    name: 'Home',

    components: {
    },
  }
</script>

<style>
  .main {
    text-align: center;
    color: #ebebeb;
  }
  .v-responsive {
    left: 865px;
  }
  
</style>
