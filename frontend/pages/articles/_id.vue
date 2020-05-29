<template>
  <div>
    <el-image
      v-if="article.image"
      id="banner"
      style="width: 100%; height: 400px"
      :src="article.image.url"
      fit="contain"
    >
    </el-image>
    <h1>{{ article.title }}</h1>

    <div
      v-if="article.content"
      id="editor"
      v-html="$md.render(article.content)"
    ></div>

    <p v-if="article.published_at">
      {{ moment(article.published_at).format("MMM Do YY") }}
    </p>

    <p class="hot">{{ article.hot }}</p>
    <p>hot{{ article.email }}</p>
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
        return { id: parseInt(this.$route.params.id) };
      }
    }
  }
};
</script>
