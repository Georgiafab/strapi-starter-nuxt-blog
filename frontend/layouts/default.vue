<template>
  <div>
    


    <nuxt />

    <div class="footer">
      <p>这里是底部</p>
      <p>Copyright © 2020 iMyFone Technology Co., Ltd. All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
import categoriesQuery from "~/apollo/queries/category/categories";

export default {
  data() {
    return {
      categories: [],
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    categoryItemId: function(id) {
      return `2-${id}`;
    }
  },
  computed: {},
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery
    }
  }
};
</script>
