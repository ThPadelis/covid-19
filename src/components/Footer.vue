<template>
  <footer>
    Developed by
    <a href="http://padelis.theodosiou.me">Padelis Theodosiou</a>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style lang="scss" scoped>
footer {
  text-align: center;
  color: $blue-40;
  padding: 10px 0;
  margin-top: 20px;
  font-size: 1.25em;
  font-weight: 600;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: $danger;
    }
  }
}
</style>