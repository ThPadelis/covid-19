<template>
  <div id="app">
    <Navbar />

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Navbar: () =>
      import(/* webpackChunkName: "Navbar" */ "@/components/Navbar.vue"),
  },
};
</script>