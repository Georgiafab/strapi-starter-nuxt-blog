<template>
  <div>
        <h1>测试网站</h1>
        <el-button>默认按钮</el-button>
        <Articles :articles="articles"></Articles>
  </div>
</template>

<script>
import articlesQuery from '~/apollo/queries/article/articles'
import Articles from '~/components/Articles'

export default {
  data() {
    return {
      articles: [],
    }
  },
  components: {
    Articles
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
      variables () {
        return { name: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>
