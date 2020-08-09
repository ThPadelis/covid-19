<template>
  <div class="continent">
    <div class="continent__header">
      <div class="title">
        <span :class="getIcon"></span>
        <span>{{getTitle}}</span>
      </div>

      <div class="glance">
        <!-- Confirmed -->
        <div class="label">
          <span>Confirmed</span>
          <span class="confirmed">{{cases | number('0,0', { thousandsSeparator: ',' })}}</span>
        </div>
        <!-- Deceased -->
        <div class="label">
          <span>Deceased</span>
          <span class="deceased">{{deceased | number('0,0', { thousandsSeparator: ',' })}}</span>
        </div>
        <!-- Critical -->
        <div class="label">
          <span>Critical</span>
          <span class="critical">{{critical | number('0,0', { thousandsSeparator: ',' })}}</span>
        </div>
        <!-- Active -->
        <div class="label">
          <span>Active</span>
          <span class="active">{{active | number('0,0', { thousandsSeparator: ',' })}}</span>
        </div>
        <!-- Recovered -->
        <div class="label">
          <span>Recovered</span>
          <span class="recovered">{{recovered | number('0,0', { thousandsSeparator: ',' })}}</span>
        </div>
      </div>
    </div>

    <div class="continent__body" v-if="countries">
      <alt-table :countries="countries"></alt-table>
    </div>
  </div>
</template>

<script>
import { Continent } from "../classes/Continent";
import { Endpoints } from "../config/endpoints";
export default {
  name: "continent",
  props: {
    continent: {
      type: Continent,
      required: true,
    },
  },
  components: {
    "alt-table": () =>
      import(/* webpackChunkName: "alt-table" */ "@/components/Table.vue"),
  },
  data: () => ({
    countries: null,
    isLoading: false,
  }),
  watch: {
    continent: function (value) {
      this.getCountries(value.continent);
    },
  },
  computed: {
    getTitle() {
      return this.continent.continent;
    },
    getIcon() {
      switch (this.continent.continent) {
        case "Africa":
          return "fad fa-globe-africa";
        case "Asia":
          return "fad fa-globe-asia";
        case "Europe":
          return "fad fa-globe-europe";
        case "North America":
          return "fad fa-globe-americas";
        case "Oceania":
          return "fad fa-globe-europe";
        case "South America":
          return "fad fa-globe-americas";
        default:
          return "";
      }
    },
    cases() {
      if (!this.continent) return 0;
      return this.continent.cases;
    },
    deceased() {
      if (!this.continent) return 0;
      return this.continent.deaths;
    },
    critical() {
      if (!this.continent) return 0;
      return this.continent.critical;
    },
    active() {
      if (!this.continent) return 0;
      return this.continent.active;
    },
    recovered() {
      if (!this.continent) return 0;
      return this.continent.recovered;
    },
  },
  methods: {
    async getCountries() {
      if (!this.continent) return;

      this.isLoading = true;

      const baseURLs = this.continent.countries.map(
        (c) => `${Endpoints.countries}/${c}`
      );
      const promises = baseURLs.map((url) => this.$http.get(url));

      const countries = await Promise.all(promises);

      this.countries = countries.map((c) => c.data);

      this.isLoading = false;

      console.log({ countries: this.countries });
    },
  },
  async mounted() {
    await this.getCountries();
  },
};
</script>

<style lang="scss" scoped>
.continent {
  padding: 20px;
  font-weight: 600;
  background: $blue-600;
  border-radius: 0.3rem;
  margin-bottom: 20px;

  .continent__header {
    .title {
      font-size: 2em;
      font-weight: bold;
      margin-bottom: 10px;
      > span:first-of-type {
        margin-right: 10px;
      }
    }

    .glance {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .label {
        font-size: 1.25em;
        &:not(:last-of-type)::after {
          content: "";
          margin: 0 7px;
          border-right: solid 2px $blue-10;
        }

        span:first-of-type::after {
          content: ":";
          margin-right: 5px;
        }

        span:last-of-type {
          font-size: 1.5em;
          font-weight: bold;
        }

        .confirmed {
          color: lighten($color: $blue, $amount: 20);
        }

        .deceased {
          color: $danger;
        }

        .critical {
          color: $orange;
        }

        .active {
          color: $yellow;
        }

        .recovered {
          color: lighten($color: $blue, $amount: 40);
        }
      }
    }
  }

  // .continent__body {
  // }
}
</style>