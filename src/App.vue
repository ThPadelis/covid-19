<template>
  <div id="app">
    <Navbar />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Navbar: () =>
      import(/* webpackChunkName: "Navbar" */ "@/components/Navbar.vue"),
    AppFooter: () =>
      import(/* webpackChunkName: "AppFooter" */ "@/components/Footer.vue"),
  },
};
</script>