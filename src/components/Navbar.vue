<template>
  <b-navbar toggleable="lg" type="dark" sticky>
    <b-navbar-brand to="/">Covid</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item
          v-for="(l,i) in links"
          :key="i"
          :to="l.to"
          exact
          exact-active-class="text-danger"
        >{{l.text}}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "navbar",
  data: () => ({
    links: [
      { text: "home", to: "/" },
      { text: "about", to: "/about" },
      { text: "sources", to: "/sources" },
      { text: "what to do", to: "/advices" },
      { text: "travel restrictions", to: "/travel" },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.navbar {
  border-bottom: solid 2px $blue-300;
  background: $blue-500;
  margin-bottom: 20px;

  .navbar-brand {
    &::after {
      content: "19";
      color: $danger;
    }
  }

  .navbar-nav {
    .nav-item {
      .nav-link {
        color: $blue-30;
        font-weight: 600;
        font-size: 1.15em;
        text-transform: capitalize;

        &:hover {
          color: $danger;
        }
      }
    }
  }
}
</style>