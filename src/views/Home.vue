<template>
  <b-container class="home" fluid>
    <b-row>
      <b-col sm="12" md="3" lg="3" xl="3">
        <updates
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        ></updates>

        <glance></glance>
      </b-col>

      <!-- Main content -->
      <b-col sm="12" md="9" lg="9" xl="9">
        <b-nav v-if="continents">
          <b-nav-text
            v-for="(c, i ) in continents"
            :key="i"
            @click="getContinent(c)"
            :class="isActive(c)"
          >
            <span :class="getIcon(c)"></span>
            <span>{{c.continent}}</span>
          </b-nav-text>
        </b-nav>

        <b-overlay
          :show="isLoading"
          rounded="sm"
          opacity="0.85"
          variant="transparent"
          blur="0.75em"
        >
          <continent v-if="continent" :continent="continent"></continent>
        </b-overlay>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { Endpoints } from "../config/endpoints";
import { Continent } from "../classes/Continent";
import { EventBus } from "../event-bus";
export default {
  name: "Home",
  components: {
    Updates: () =>
      import(/* webpackChunkName: "updates" */ "@/components/Updates.vue"),
    Glance: () =>
      import(/* webpackChunkName: "glance" */ "@/components/Glance.vue"),
    Continent: () =>
      import(/* webpackChunkName: "continent" */ "@/components/Continent.vue"),
  },
  data: () => ({
    continents: null,
    continent: null,
    world: null,
    isLoading: false,
  }),
  created() {
    EventBus.$on("world", (data) => {
      const world = {
        ...data,
        countries: [].concat.apply(
          [],
          this.continents.map((c) => c.countries).sort()
        ),
        continent: "World",
        continentInfo: null,
      };
      this.world = new Continent(world);
      this.continents.unshift(this.world);
      this.continent = this.continents[0];
    });
  },
  mounted() {
    this.getContinents();
  },
  methods: {
    async getContinents() {
      this.isLoading = true;

      const { data: continents } = await this.$http.get(
        `${Endpoints.continents}`
      );

      this.continents = continents
        .map((c) =>
          String(c.continent).includes("/")
            ? new Continent({ ...c, continent: c.continent.split("/")[1] })
            : new Continent(c)
        )
        .sort((a, b) => (a.continent > b.continent ? 1 : -1));
      this.continent = this.continents[0];

      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },
    getContinent(continent) {
      this.continent = continent;
    },
    isActive(continent) {
      if (!this.continent) return null;
      return continent.continent === this.continent.continent
        ? "border-danger"
        : null;
    },
    getIcon(continent) {
      switch (continent.continent) {
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
        case "World":
          return "fad fa-globe";
        default:
          return "fad fa-globe";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  .nav {
    margin-bottom: 20px;
    .navbar-text {
      padding: 10px 15px;
      border: solid 2px transparent;
      border-radius: 10px;
      font-weight: bold;
      font-size: 1.25em;

      &:not(:last-of-type) {
        margin-right: 10px;
      }

      &:hover {
        border-color: $blue-300;
        cursor: pointer;
      }

      > span:first-of-type {
        margin-right: 5px;
      }
    }
  }
}
</style>