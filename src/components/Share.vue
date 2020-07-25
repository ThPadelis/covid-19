<template>
  <div class="social" @click="doAction()" v-b-tooltip.hover :title="action">
    <span :class="icon"></span>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "social",
  props: {
    icon: { type: String, required: true },
    where: { type: String, required: true },
  },
  computed: {
    action() {
      switch (this.where) {
        case "facebook":
          return "Share to Facebook";
        case "twitter":
          return "Share to Twitter";
        case "copy":
          return "Copy Link";
        default:
          return "";
      }
    },
    location() {
      return window.location.origin;
    },
  },
  methods: {
    doAction() {
      let text;
      switch (this.where) {
        case "facebook":
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              this.location
            )}`,
            "popup",
            "left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0"
          );
          break;
        case "twitter":
          text = `Keep track of COVID-19 In real-time with COV19\n${this.location}\n#COVID19`;
          window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
            "popup",
            "width=600,height=600"
          );
          break;
        case "copy":
          this.$copyText(this.location).then(
            // eslint-disable-next-line no-unused-vars
            (response) => {
              Swal.fire({
                toast: true,
                position: "bottom",
                background: "#e76f51",
                customClass: {
                  content: "text-light",
                },
                showConfirmButton: false,
                text: "Copied!",
                timer: 2000,
              });
            },
            // eslint-disable-next-line no-unused-vars
            (error) => {
              Swal.fire({
                toast: true,
                position: "bottom",
                background: "#e76f51",
                customClass: {
                  content: "text-light",
                },
                showConfirmButton: false,
                text: "Failed to copy the link",
                timer: 3500,
              });
            }
          );
          break;
        default:
          return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.social {
  width: 45px;
  height: 45px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $blue-400;

  &:hover {
    background: $blue-500;
    cursor: pointer;
  }
}

.tooltip {
  color: $blue-10;
  font-size: 1.1em;
  font-weight: bold;

  .arrow::before {
    border-top-color: $blue-400;
  }

  .tooltip-inner {
    background-color: $blue-400;
  }
}
</style>