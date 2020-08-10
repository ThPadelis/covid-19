<template>
  <div class="glance">
    <div class="glance__header">
      <div class="title">Totals</div>
      <span class="fad fa-bullhorn"></span>
      <span>specific country data may be delayed</span>
    </div>

    <div class="glance__body">
      <!-- Confirmed Cases -->
      <div>
        <span class="number confirmed">{{cases | number('0,0', { thousandsSeparator: ',' })}}</span>
        <span class="label">Confirmed Cases</span>
      </div>

      <!-- Deceased -->
      <div>
        <span class="number deceased">{{deceased | number('0,0', { thousandsSeparator: ',' })}}</span>
        <span class="label">Deceased</span>
      </div>

      <!-- Critical -->
      <div>
        <span class="number critical">{{critical | number('0,0', { thousandsSeparator: ',' })}}</span>
        <span class="label">Critical</span>
      </div>

      <!-- Active -->
      <div>
        <span class="number active">{{active | number('0,0', { thousandsSeparator: ',' })}}</span>
        <span class="label">Active</span>
      </div>

      <!-- Recovered -->
      <div>
        <span class="number recovered">{{recovered | number('0,0', { thousandsSeparator: ',' })}}</span>
        <span class="label">Recovered</span>
      </div>
    </div>

    <div class="glance__footer">
      <div class="share-wrapper">
        <share icon="fab fa-facebook-f" where="facebook"></share>
        <share icon="fab fa-twitter" where="twitter"></share>
        <share icon="fa fa-link" where="copy"></share>
      </div>

      <div class="updated">{{updated}}</div>
    </div>
  </div>
</template>

<script>
import { Endpoints } from "../config/endpoints";
import { EventBus } from "../event-bus";
export default {
  name: "glance",
  components: {
    Share: () =>
      import(/* webpackChunkName: "share" */ "@/components/Share.vue"),
  },
  data: () => ({
    all: null,
  }),
  computed: {
    cases() {
      if (!this.all) return 0;
      return this.all.cases;
    },
    deceased() {
      if (!this.all) return 0;
      return this.all.deaths;
    },
    critical() {
      if (!this.all) return 0;
      return this.all.critical;
    },
    active() {
      if (!this.all) return 0;
      return this.all.active;
    },
    recovered() {
      if (!this.all) return 0;
      return this.all.recovered;
    },
    updated() {
      if (!this.all) return null;
      return `Updated: ` + this.$options.filters.moment(this.all.updated, true);
    },
  },
  created() {
    this.$http
      .get(Endpoints.all)
      .then((response) => {
        this.all = response.data;
        EventBus.$emit("world", this.all);
      })
      .catch((error) => {
        this.all = null;
        console.log({ error });
      });
  },
};
</script>

<style lang="scss" scoped>
.glance {
  padding: 20px;
  text-align: center;
  font-weight: 600;
  background: $blue-600;
  border-radius: 0.3rem;
  margin-bottom: 20px;

  .glance__header {
    .title {
      font-size: 2em;
      font-weight: bold;
    }

    span:first-of-type {
      margin-right: 0.25em;
    }
  }

  .glance__body {
    margin-top: 2.5em;
    margin-bottom: 2.5em;

    > div {
      &:not(:last-of-type) {
        margin-bottom: 1.5em;
      }

      .number {
        display: block;
        font-weight: 600;
        font-size: 2.5em;

        &.confirmed {
          color: lighten($color: $blue, $amount: 20);
        }

        &.deceased {
          color: $danger;
        }

        &.critical {
          color: $orange;
        }

        &.active {
          color: $yellow;
        }

        &.recovered {
          color: lighten($color: $blue, $amount: 40);
        }
      }

      .label {
        display: block;
        font-weight: 500;
        font-size: 1.75em;
      }
    }
  }

  .glance__footer {
    text-align: center;
    .share-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1em;

      .social:not(:last-of-type) {
        margin-right: 10px;
      }
    }
  }
}
</style>