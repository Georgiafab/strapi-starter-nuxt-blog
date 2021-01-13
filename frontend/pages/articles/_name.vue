<template>
  <div>
    <img :src="api_url+article.image.url"  v-if="article.image" style="max-width:100%">
    <h2>{{ article.title }}</h2>

    <div
      v-if="article.content"
      id="editor"
     v-html="article.content"
    ></div>
     <!-- v-html="$md.render(article.content)" -->

    <p v-if="article.published_at">
      {{ moment(article.published_at).startOf('day').fromNow() }}
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
        return { id: parseInt(this.$route.params.id) };
      }
    }
  },
  created(){
    console.log(this.$route.params);
  }
};
</script>
