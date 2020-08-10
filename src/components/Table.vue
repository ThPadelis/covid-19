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
        <!-- <pre>{{row.item}}</pre> -->
        <b-card class="bg-transparent text-muted shadow-none">
          <b-card-text>Details for {{row.item.country}} will be displayed here</b-card-text>
        </b-card>
      </template>
    </b-table>

    <!-- Pagination -->
    <b-pagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      align="end"
      class="my-0"
      hide-goto-end-buttons
    ></b-pagination>
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
    filter: {
      type: String,
      default: "",
    },
  },
  watch: {
    countries(val) {
      this.totalRows = val.length;
      this.currentPage = 1;
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
  margin-top: 1em;
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

.pagination {
  .page-item {
    &.active,
    &:hover {
      .page-link {
        background: $blue-700;
        color: $danger;
        box-shadow: none;
      }
    }

    &.disabled {
      cursor: not-allowed;
      .page-link {
        background: $blue-600;
        color: $blue-30;
      }
    }

    .page-link {
      background: $blue-600;
      border-color: $blue-90;
      color: $blue-30;
      &:focus {
        box-shadow: none;
      }
    }
  }
}
</style>