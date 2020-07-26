<template>
  <b-container class="sources">
    <b-row>
      <b-col>
        <div class="sources__header">
          <span class="fa fa-link mr-2"></span>
          <span>Sources</span>
          <hr />
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12" md="6" lg="4" xl="4" v-for="(source, i) in sources" :key="i">
        <source-item :source="source"></source-item>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "sources",
  components: {
    "source-item": () => import("@/components/Source.vue"),
  },
  data: () => ({
    sources: [
      {
        label: "Worldometers",
        text:
          "Worldometer is run by an international team of developers, researchers, and volunteers with the goal of making world statistics available in a thought-provoking and time relevant format to a wide audience around the world. It is published by a small and independent digital media company based in the United States.",
        link: "https://www.worldometers.info/coronavirus/",
        image: "worldometers.jpg",
      },
      {
        label: "World Health Organization",
        text:
          "The World Health Organization is a specialized agency of the United Nations responsible for international public health. It is part of the U.N. Sustainable Development Group.",
        link: "https://www.who.int/",
        image: "who.png",
      },
      {
        label: "Johns Hopkins University",
        text:
          "Johns Hopkins, founded in 1876, is America's first research university and home to nine world-class academic divisions working together as one university.",
        link: "https://hub.jhu.edu/novel-coronavirus-information/",
        image: "jhu.png",
      },
      {
        label: "Google",
        text:
          "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.",
        link: "https://www.google.com/covid19/",
        image: "google.webp",
      },
      {
        label: "Wikipedia",
        text:
          "Wikipedia is a multilingual online encyclopedia created and maintained as an open collaboration project by a community of volunteer editors, using a wiki-based editing system. It is the largest and most popular general reference work on the World Wide Web. It features exclusively free content and no commercial ads, and is owned and supported by the Wikimedia Foundation.",
        link: "https://www.wikipedia.org/",
        image: "wikipedia.jpg",
      },
      {
        label: "Centers for Disease Control and Prevention",
        text:
          "The Centers for Disease Control and Prevention is the leading national public health institute of the United States. It is a United States federal agency, under the Department of Health and Human Services, and is headquartered in Atlanta, Georgia.",
        link: "https://www.cdc.gov/",
        image: "cdc.jpg",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.sources {
  .sources__header {
    text-align: center;
    font-size: 2.75em;
    font-weight: 600;

    hr {
      position: relative;
      width: 75px;
      height: 10px;
      border-radius: 5px;
      background: $danger;
      margin-bottom: 2em;

      &::after {
        content: "";
        background: $danger;
        position: absolute;
        right: -20px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }
    }
  }
}
</style>