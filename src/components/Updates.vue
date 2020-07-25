<template>
  <div class="updates rounded-lg">
    <div class="updates__header">
      <span class="fad fa-bullhorn"></span>
      <span>Updates</span>
    </div>
    <div class="updates__body">{{text}}</div>

    <div class="updates__close" v-if="dismissible">
      <span class="fa fa-times" v-b-tooltip.hover title="Hide!"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "updates",
  props: {
    text: { type: String, required: true },
    dismissible: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" scoped>
.updates {
  background: $blue-600;
  padding: 20px;
  position: relative;

  .updates__header {
    font-size: 2em;
    text-align: center;
    margin-bottom: 0.5em;

    span {
      &:first-of-type {
        color: $success;
        margin-right: 0.25em;
      }

      &:last-of-type {
        font-weight: bold;
      }
    }
  }

  .updates__body {
    text-align: center;
    font-size: 1.25em;
    font-weight: 600;
  }

  .updates__close {
    position: absolute;
    top: 4px;
    right: 14px;
    font-size: 2em;
    color: $blue-60;

    &:hover {
      cursor: pointer;
      color: $danger;
    }
  }
}

.tooltip {
  top: -12px !important;
}
</style>