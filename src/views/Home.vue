<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12" md="3" lg="3" xl="3">
        <updates
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        ></updates>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Home",
  components: {
    Updates: () =>
      import(/* webpackChunkName: "updates" */ "@/components/Updates.vue"),
  },
};
</script>
