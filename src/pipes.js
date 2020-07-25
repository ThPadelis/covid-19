import Vue from "vue";
import * as moment from "moment/moment";

Vue.filter("moment", function(value, isDuration = false, format = "LL") {
  if (!value) return "";
  if (isDuration) return moment(value).fromNow();
  return moment(value).format(format);
});
