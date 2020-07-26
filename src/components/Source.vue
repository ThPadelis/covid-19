<template>
  <div class="source">
    <div class="source__header">
      <a :href="source.link" target="_blank">
        <img :src="require(`@/assets/sources/${source.image}`)" :alt="source.label" />
      </a>
    </div>
    <div class="source__body">
      <div class="label">
        <a :href="source.link" target="_blank">{{source.label}}</a>
      </div>
      <div class="text">{{source.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "source-item",
  props: {
    source: { type: Object, required: true },
  },
};
</script>

<style lang="scss" scoped>
.source {
  padding: 20px;
  background: $blue-400;
  color: $blue-30;
  border-radius: 0.3rem;
  margin-bottom: 1.5em;
  height: calc(100% - 1.5em);

  .source__header {
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      object-position: center;
      border-radius: 0.3rem;
      margin-bottom: 10px;
    }
  }
  .source__body {
    .label {
      font-size: 2em;
      font-weight: 600;
      margin-bottom: 10px;
      line-height: 30px;

      a {
        color: inherit;
        text-decoration: none;
        &:hover {
          color: $blue-50;
        }
      }
    }

    .text {
      font-size: 16px;
      line-height: 20px;
    }
  }
}
</style>