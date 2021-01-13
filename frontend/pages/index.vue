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
import axios from "axios";

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
        return { id: parseInt(this.$route.params.id) }
      }
    }
  },
  created(){
    axios.get('http://localhost:1337/articles').then(res=>{
      console.log(res);
    })
  }
}
</script>
