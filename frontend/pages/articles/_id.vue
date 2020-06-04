<template>
  <div>
    <img :src="article.image.url"  v-if="article.image" style="max-width:100%">
    <h2>{{ article.title }}</h2>

    <div
      v-if="article.content"
      id="editor"
      v-html="$md.render(article.content)"
    ></div>

    <p v-if="article.published_at">
      {{ moment(article.published_at).format("MMM Do YY") }}
    </p>

    <p class="hot">{{ article.hot }}</p>
    <p>hot:{{ article.email }}</p>
  </div>
</template>

<script>
import articleQuery from "~/apollo/queries/article/article";
var moment = require("moment");

export default {
  data() {
    return {
      article: {},
      moment: moment,
      api_url: process.env.strapiBaseUri
    };
  },
  apollo: {
    article: {
      prefetch: true,
      query: articleQuery,
      variables() {
        return { name: parseInt(this.$route.params.id) };
      }
    }
  }
};
</script>
