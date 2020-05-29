<template>
  <div>
      <div>
        <router-link
          v-for="article in leftArticles"
          :to="{ name: 'articles-id', params: { id: article.id } }"
          :key="article.id"
        >
          <div>
            <div >
              <img :src="article.image.url" alt="" height="100" />
            </div>
            <div >
              <p
                id="category"
                v-if="article.category"
              >
                {{ article.category.name }}
              </p>
              <p id="title" >{{ article.title }}</p>
            </div>
          </div>
        </router-link>
      </div>
      <div>
          <router-link
            v-for="article in rightArticles"
            :to="{ name: 'articles-id', params: { id: article.id } }"
            :key="article.id"
          >
            <div >
              <div >
                <img :src=" article.image.url" alt="" height="100" />
              </div>
              <div >
                <p
                  id="category"
                  v-if="article.category"
                >
                  {{ article.category.name }}
                </p>
                <p id="title" >{{ article.title }}</p>
              </div>
            </div>
          </router-link>
      </div>
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
  computed: {
    leftArticlesCount() {
      return Math.ceil(this.articles.length / 5);
    },
    leftArticles() {
      return this.articles.slice(0, this.leftArticlesCount);
    },
    rightArticles() {
      return this.articles.slice(this.leftArticlesCount, this.articles.length);
    }
  }
};
</script>
