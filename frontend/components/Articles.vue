<template>
  <div>
    <router-link
      v-for="article in articles"
      :to="{ name: 'articles-name', params: { id: article.name } }"
      :key="article.id"
    >
      <div>
        <div>
          <img :src="article.image.url" alt="" height="100" />
        </div>
        <div>
          <p id="category" v-if="article.category">
            {{ article.category.name }}
          </p>
          <p id="title">{{ article.title }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      api_url: process.env.strapiBaseUri
    };
  },
  props: {
    articles: Array
  },
  computed: {}
};
</script>
