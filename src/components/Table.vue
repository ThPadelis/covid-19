<template>
  <div>
    <!-- Main table element -->
    <b-table
      show-empty
      empty-text="fack"
      stacked="md"
      borderless
      striped
      dark
      :items="countries"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filterIncludedFields="filterOn"
      @filtered="onFiltered"
    >
      <!-- Country -->
      <template v-slot:cell(country)="row">
        <img :src="getFlag(row.value)" alt="Flag" />
        <span>{{ row.value }}</span>
      </template>

      <!-- Cases -->
      <template v-slot:cell(cases)="row">
        <span>{{row.value | number('0,0', { thousandsSeparator: ',' }) }}</span>
        <small
          v-if="getCasesToday(row) > 0"
        >{{getCasesToday(row) | number('0,0', { thousandsSeparator: ',' }) }}</small>
      </template>

      <!-- Deaths -->
      <template v-slot:cell(deaths)="row">
        <span>{{row.value | number('0,0', { thousandsSeparator: ',' })}}</span>
        <small
          v-if="getDeathsToday(row) > 0"
        >{{getDeathsToday(row) | number('0,0', { thousandsSeparator: ',' }) }}</small>
      </template>

      <!-- Critical -->
      <template
        v-slot:cell(critical)="row"
      >{{row.value | number('0,0', { thousandsSeparator: ',' })}}</template>

      <!-- Active -->
      <template v-slot:cell(active)="row">{{row.value | number('0,0', { thousandsSeparator: ',' })}}</template>

      <!-- Tests -->
      <template v-slot:cell(tests)="row">{{row.value | number('0,0', { thousandsSeparator: ',' }) }}</template>

      <!-- Recovered -->
      <template v-slot:cell(recovered)="row">
        <span>{{row.value | number('0,0', { thousandsSeparator: ',' })}}</span>
        <small
          v-if="getRecoveredToday(row) > 0"
        >{{getRecoveredToday(row) | number('0,0', { thousandsSeparator: ',' }) }}</small>
      </template>

      <template v-slot:cell(actions)="row">
        <span @click="info(row.item, row.index, $event.target)" class="fal fa-star"></span>
        <span
          @click="row.toggleDetails"
          :class="row.detailsShowing ? 'fas fa-minus-circle' : 'fas fa-plus-circle'"
        ></span>
        <!-- <b-button
          size="sm"
          @click="row.toggleDetails"
        >{{ row.detailsShowing ? 'Hide' : 'Show' }} Details</b-button>-->
      </template>

      <template v-slot:row-details="row">
        <pre>{{row.item}}</pre>
      </template>
    </b-table>

    <!-- User Interface controls -->

    <!-- <b-form-group
      label="Filter"
      label-cols-sm="3"
      label-align-sm="right"
      label-size="sm"
      label-for="filterInput"
      class="mb-0"
    >
      <b-input-group size="sm">
        <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Type to Search"></b-form-input>
        <b-input-group-append>
          <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>-->

    <b-pagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      align="end"
      limit="3"
      class="my-0"
    ></b-pagination>
    <!-- size="sm" -->
  </div>
</template>

<script>
import * as moment from "moment";
export default {
  name: "alt-table",
  props: {
    countries: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      fields: [
        { key: "actions", label: "", class: "text-center" },
        {
          key: "country",
          label: "Country",
          sortable: true,
          class: "country",
        },
        {
          key: "cases",
          label: "Confirmed",
          sortable: true,
        },
        {
          key: "deaths",
          label: "Deceased",
          sortable: true,
        },
        {
          key: "critical",
          label: "Critical",
          sortable: true,
        },
        {
          key: "active",
          label: "Active",
          sortable: true,
        },
        {
          key: "tests",
          label: "Tests",
          sortable: true,
        },
        {
          key: "recovered",
          label: "Recovered",
          sortable: true,
        },
        {
          key: "updated",
          label: "Last Reported",
          formatter: (value /* key, item */) => {
            return moment(value).fromNow();
          },
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true,
        },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      filter: null,
      filterOn: [],
    };
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.countries.length;
  },
  methods: {
    getFlag(value) {
      const country = this.countries.find((c) => c.country === value);
      return country.countryInfo.flag;
    },
    getCasesToday(value) {
      return value.item.todayCases;
    },
    getDeathsToday(value) {
      return value.item.todayDeaths;
    },
    getRecoveredToday(value) {
      return value.item.todayRecovered;
    },
    info(item, index, button) {
      console.log({ item, index, button });
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>

<style lang="scss">
.table {
  color: inherit;
  font-size: 1.25em;
  tbody {
    tr {
      td {
        vertical-align: middle;
        &:first-of-type {
          span {
            &:hover {
              color: $danger;
              cursor: pointer;
            }

            &:not(:last-of-type) {
              margin-right: 10px;
            }
          }
        }

        small {
          display: block;
          &::before {
            content: "+";
          }
        }

        &:nth-child(3) {
          color: lighten($color: $blue, $amount: 20);
        }

        &:nth-child(4) {
          color: $danger;
        }

        &:nth-child(5) {
          color: $orange;
        }

        &:nth-child(6) {
          color: $yellow;
        }

        &:nth-child(7) {
          color: lighten($color: $yellow, $amount: 20);
        }

        &:nth-child(8) {
          color: lighten($color: $blue, $amount: 40);
        }

        &.country {
          img {
            width: 35px;
            height: auto;
            min-height: 25px;
            object-fit: cover;
            border-radius: 5px;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>